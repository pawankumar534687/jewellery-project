import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [couponLoading, setCouponLoading] = useState(false);

  useEffect(() => {
    const resulte = JSON.parse(localStorage.getItem("cart")) || [];
    setdata(resulte);
  }, []);

  const totalprice = data.reduce((acc, item) => {
    return acc + item.finalprice * item.quantity;
  }, 0);

  const grandtotal = totalprice + 100 + 50;

  const applycoupon = async () => {
    const token = localStorage.getItem("token");
    setCouponLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/apply-coupon",
        {
          couponCode: couponCode,
          totalprice: grandtotal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAppliedCoupon({
        code: couponCode,
        discount: response.data.discount,
        newTotal: response.data.newTotal,
      });
      setCouponCode("");
      setCouponLoading(false);
      toast.success(response.data.message);
    } catch (error) {
      const msg = error.response?.data?.error || "Something went wrong!";
      toast.error(msg);
      setCouponLoading(false);
    }
  };

  const Finalprice = grandtotal - (appliedCoupon?.discount || 0);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const items = cart.map((item) => ({
        productId: item._id,
        productName: item.productName,
        quantity: item.quantity,
        price: Number(item.finalprice),
        image: item.image.url,
      }));

      const itemTotal = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      const deliveryCharge = 100;
      const handlingCharge = 50;

      const totalAmount = itemTotal + deliveryCharge + handlingCharge;

      const discount = appliedCoupon?.discount || 0;
      const finalAmount = totalAmount - discount;
      const id = localStorage.getItem("id");

      const orderData = {
        user: id,

        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          pincode: formData.pincode,
          paymentMethod: formData.paymentMethod,
        },
        items,
        totalAmount,
        deliveryCharge,
        handlingCharge,
        finalAmount,

        coupon: appliedCoupon
          ? {
              code: appliedCoupon.code,
              discount: appliedCoupon.discount,
            }
          : {
              code: "",
              discount: 0,
            },
      };

      if (formData.paymentMethod === "online") {
        const token = localStorage.getItem("token");
        const { data } = await axios.post(
          "http://localhost:8000/api/create-razorpay-order",
          { amount: finalAmount },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const options = {
          key: data.key,
          amount: data.order.amount,
          currency: "INR",
          name: "Zariin",
          description: "Online Payment",
          order_id: data.order.id,
          handler: async function (response) {
            const res = await axios.post(
              "http://localhost:8000/api/verify-payment",
              { ...response, orderData },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (res.data.success) {
              toast.success("Order placed and paid successfully!");
              localStorage.removeItem("cart");
              reset();
              navigate("/");
            }
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        setLoading(false);
      } else {
        const token = localStorage.getItem("token");

        const response = await axios.post(
          "http://localhost:8000/api/new-order",
          orderData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        localStorage.removeItem("cart");
        reset();
        navigate("/");
        toast.success(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Order submission failed:", error);
      toast.error("Failed to place order.");
      setLoading(false);
    }
  };

  return (
    <div className=" bg-white">
      <div className="w-full md:flex   max-md:mt-16 ">
        <div className="md:w-[60%] md:mt-16 mx-auto flex flex-col justify-start items-center">
          <h1 className="text-3xl font-bold ">CheckOut</h1>
          <h1 className="text-xl font-semibold text-gray-600 mb-6">
            Shopping Address
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4 px-10 max-md:px-16"
          >
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Phone *
              </label>
              <input
                className="border-gray-400 p-2 border rounded-lg"
                type="text"
                placeholder="Phone"
                maxLength={10}
                inputMode="numeric"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be exactly 10 digits",
                  },
                })}
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-sm font-medium text-gray-700"
              >
                Address *
              </label>
              <input
                className="border-gray-400 p-2 border rounded-lg"
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="city"
                  className="text-sm font-medium text-gray-700"
                >
                  City *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  placeholder="City"
                  {...register("city", { required: "City is required" })}
                />
                {errors.city && (
                  <p className="text-red-500 text-sm">{errors.city.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="state"
                  className="text-sm font-medium text-gray-700"
                >
                  State *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  placeholder="State"
                  {...register("state", { required: "State is required" })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">{errors.state.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="country"
                  className="text-sm font-medium text-gray-700"
                >
                  Country *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  placeholder="Country"
                  {...register("country", { required: "Country is required" })}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="pincode"
                  className="text-sm font-medium text-gray-700"
                >
                  Pin Code *
                </label>
                <input
                  className="border-gray-400 p-2 border rounded-lg"
                  type="text"
                  maxLength={6}
                  inputMode="numeric"
                  placeholder="Pin Code"
                  {...register("pincode", {
                    required: "Pin Code is required",
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: "Pin Code must be exactly 6 digits",
                    },
                  })}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  }}
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm">
                    {errors.pincode.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1 w-full min-[800px]:w-[48%]">
                <label
                  htmlFor="paymentMethod"
                  className="text-sm font-medium text-gray-700"
                >
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="border border-gray-400 p-2 rounded-lg"
                  {...register("paymentMethod", {
                    required: "Payment method is required",
                  })}
                >
                  <option value="">-- Select Payment --</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="online">Online</option>
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm">
                    {errors.paymentMethod.message}
                  </p>
                )}
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`rounded-2xl ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-fuchsia-500 hover:bg-blue-600"
              } max-md:hidden self-center cursor-pointer p-2 mt-6 bg-gray-900 text-white font-semibold`}
            >
              {loading ? (
                <>
                  <span>Confirming...</span>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                "Confirm Order"
              )}
            </button>
          </form>
        </div>

        <div className="w-full md:w-[40%] md:mt-10 ">
          <div className="w-full min-h-screen px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl mt-6 font-bold mb-8 text-center">
              Order Summary
            </h1>

            <div className="space-y-4">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-white p-4 rounded-xl shadow hover:bg-pink-50 transition-all"
                >
                  <img
                    src={item.image.url}
                    alt={item.productName}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1 text-center sm:text-left space-y-2">
                    <p className="text-lg font-semibold truncate">
                      {item.productName}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="text-center sm:text-right">
                    <p className="text-lg font-bold text-black">
                      ₹{item.finalprice}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white mt-4 p-4 rounded-2xl">
              <h4 className="font-semibold text-md mb-2">Bill Details</h4>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2">
                  <img className="w-6" src="someicons/compliant.png" alt="" />
                  <p className="text-[13px] text-gray-800">Items total</p>
                </div>
                <p className="text-[13px] text-gray-800">₹{totalprice}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2">
                  <img className="w-6" src="someicons/delivery.png" alt="" />
                  <p className="text-[13px] text-gray-800">Delivery charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹100</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2">
                  <img className="w-6" src="someicons/bag.png" alt="" />
                  <p className="text-[13px] text-gray-800">Handling charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹50</p>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl shadow-sm mb-4 mx-4">
              {/* Total Price */}
              <div className="flex justify-between items-center text-base font-medium text-gray-700 mb-2">
                <p>Total Price</p>
                <p>₹{grandtotal}</p>
              </div>

              {/* Coupon Discount */}
              {appliedCoupon && (
                <>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>Coupon ({appliedCoupon.code})</p>
                    <p className="text-green-600 font-semibold">
                      -₹{appliedCoupon.discount}
                    </p>
                  </div>

                  <hr className="my-2 border-gray-300" />

                  {/* Final Price */}
                  <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                    <p>Final Amount</p>
                    <p className="text-green-700">₹{Finalprice}</p>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col sm:flex-row mt-6 gap-3 sm:gap-4 justify-center items-center px-4">
              <input
                className="w-full sm:w-auto p-2 border-gray-500 border rounded-xl"
                type="text"
                placeholder="Coupon Code"
                onChange={(e) => setCouponCode(e.target.value)}
                value={couponCode}
              />
              <button
                type="button"
                onClick={applycoupon}
                disabled={couponLoading}
                className={`bg-neutral-800 cursor-pointer text-white px-4 py-2 font-bold rounded-2xl w-full sm:w-auto`}
              >
                {couponLoading ? (
                  <>
                    <span>Applying...</span>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  "Apply Coupon"
                )}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div className="flex md:hidden justify-center mt-6">
              <button
                onClick={handleSubmit(onSubmit)}
                disabled={loading}
                className={`rounded-2xl cursor-pointer ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-fuchsia-500 hover:bg-blue-600"
                } p-2 bg-gray-900 text-white font-semibold w-full sm:w-auto`}
              >
                {loading ? (
                  <>
                    <span>Confirming...</span>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </>
                ) : (
                  "Confirm Order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
