import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = ({ orderId }) => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem("token");
      const id = orderId;
      try {
        const res = await axios.get(
          `https://jewellery-backend-km3b.onrender.com/api/orderbyid/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrder(res.data);
      } catch (err) {
        toast.error("Failed to fetch order");
      }
    };

    fetchOrder();
  }, [id]);

  if (!order) return <div className="mt-20 text-center">Loading...</div>;

  return (
    <div className="">
      <div className=" px-4 max-w-6xl mx-auto">
  <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-3 border-gray-300">
    🧾 Order Details
  </h1>

  <div className="space-y-8">

    {/* Order Info */}
    <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Order Information</h2>
      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
        <p><span className="font-semibold">Order ID:</span> {order.orderId}</p>
        <p><span className="font-semibold">Order Date:</span> {new Date(order.createdAt).toLocaleDateString()}</p>
        <p><span className="font-semibold">Order Status:</span> <span className="text-green-600 font-medium">{order.Orderstatus}</span></p>
        <p><span className="font-semibold">Payment Status:</span> <span className="text-yellow-600">{order.paymentStatus}</span></p>
      </div>
    </div>

    {/* Customer Info */}
    <div className="bg-fuchsia-50 border border-fuchsia-200 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-fuchsia-700">Customer Information</h2>
      <p className="text-sm"><strong>Name:</strong> {order.customer.name}</p>
      <p className="text-sm"><strong>Email:</strong> {order.customer.email}</p>
      <p className="text-sm"><strong>Phone:</strong> {order.customer.phone}</p>
      <p className="text-sm"><strong>Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.state}, {order.customer.country} - {order.customer.pincode}</p>
    </div>

    {/* Items */}
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">🛒 Items</h2>
      <ul className="divide-y divide-gray-200">
        {order.items.map((item) => (
          <li key={item._id} className="flex items-center py-4 gap-4">
            <img src={item.image} alt={item.productName} className="w-16 h-16 rounded object-cover border" />
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.productName}</p>
              <p className="text-sm text-gray-600">Qty: {item.quantity} × ₹{item.price}</p>
            </div>
            <p className="text-right font-semibold text-gray-700">₹{item.quantity * item.price}</p>
          </li>
        ))}
      </ul>
    </div>

    {/* Price Summary */}
    <div className="bg-green-50 border border-green-200 p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-green-700">💰 Payment Summary</h2>
      <div className="flex justify-between text-sm mb-2 text-gray-700">
        <span>Total Amount</span>
        <span>₹{order.totalAmount}</span>
      </div>
      <div className="flex justify-between text-sm mb-2 text-gray-700">
        <span>Delivery Charge</span>
        <span>₹{order.deliveryCharge}</span>
      </div>
      <div className="flex justify-between text-sm mb-2 text-gray-700">
        <span>Handling Charge</span>
        <span>₹{order.handlingCharge}</span>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-lg font-bold text-green-700">
        <span>Final Amount</span>
        <span>₹{order.finalAmount}</span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default OrderDetails;
