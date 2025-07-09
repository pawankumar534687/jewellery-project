import React, { useEffect, useState } from "react";
import Quantity from "../quantity/Quantity";
import { Link } from "react-router-dom";

const MyCart = ({ onRemove }) => {
  const [data, setdata] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setdata(cart);
  }, [updateCount]); // Run every time quantity updates

  const handleremove = (id) => {
    const updatedCart = data.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setdata(updatedCart);
  };

  const handleQuantityChange = () => {
    setUpdateCount((prev) => prev + 1);
  };

  const totalprice = data.reduce(
    (acc, item) => acc + item.finalprice * item.quantity,
    0
  );
  const grandtotal = totalprice + 100 + 50;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9998] flex justify-end max-lg:justify-center">
      <div className="relative bg-gray-100 flex flex-col z-[9999] top-0 right-0 bottom-0 md:left-auto md:w-[45%] lg:w-[30%] max-md:inset-y-0 max-md:mx-auto max-md:left-0 max-md:right-0 rounded-3xl max-md:top-0 max-md:bottom-0 max-md:w-[90%] max-md:h-[90%] shadow-lg">
        <div className="flex justify-between border-b rounded-t-3xl bg-white border-b-neutral-300">
          <h2 className="text-xl p-4 font-semibold mb-2">Your Cart</h2>
          <button
            onClick={onRemove}
            className="self-end cursor-pointer m-4 text-lg font-bold text-black"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pt-2 px-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="mb-2 bg-white p-4 rounded-2xl flex pb-4 gap-4"
            >
              <img
                src={item.image.url}
                alt=""
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm text-gray-700 max-w-[70%] truncate">
                    {item.productName}
                  </p>
                  <button
                    className="cursor-pointer"
                    onClick={() => handleremove(item._id)}
                  >
                    <img className="w-3 h-3" src="/delete.png" alt="delete" />
                  </button>
                </div>
                <div className="flex  justify-between items-center ">
                  <Quantity
                    id={item._id}
                    onQuantityChange={handleQuantityChange}
                  />
                  <p className="text-lg font-bold mt-2">₹{item.finalprice}</p>
                </div>
              </div>
            </div>
          ))}
          {data.length > 0 ? (
            <div className="bg-white mt-4 p-4 rounded-2xl ">
              <h4 className="font-semibold text-md mb-2">Bill Deatails</h4>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img className="w-6 " src="someicons/compliant.png" alt="" />
                  <p className="text-[13px] text-gray-800">Items total</p>
                </div>
                <p className="text-[13px] text-gray-800"> ₹{totalprice}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img className="w-6 " src="someicons/delivery.png" alt="" />
                  <p className="text-[13px] text-gray-800">Delivery charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹{100}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img className="w-6 " src="someicons/bag.png" alt="" />
                  <p className="text-[13px] text-gray-800">Handling charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹{50}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <p className="font-semibold text-sm">Grand total</p>
                <p className="font-semibold text-md">₹ {grandtotal}</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <img className="w-12" src="/someicons/cart.png" alt="" />
            </div>
          )}

          <div className="bg-white mt-4 p-4 rounded-2xl ">
            <h3 className="font-semibold text-md">Cancellation Policy</h3>
            <p className="text-[13px] text-gray-500">
              Orders cannot be cancelled once packed for delivery. In case of
              unexpected delays, a refund will be provided, if applicable.
            </p>
          </div>
        </div>
       {data.length > 0 && (
  <div className="bg-white p-4 sticky bottom-0 left-0 w-full z-10 rounded-b-3xl">
    <Link
      to="/checkout"
      onClick={onRemove}
      className="bg-[rgb(12,131,31)] flex rounded-xl p-2 text-white justify-between items-center"
    >
      <div className="flex flex-col">
        <span className="font-semibold text-lg">₹{grandtotal}</span>
        <span className=" text-sm">TOTAL</span>
      </div>
      <p>Proceed To Pay</p>
    </Link>
  </div>
)}
      </div>
    </div>
  );
};

export default MyCart;
