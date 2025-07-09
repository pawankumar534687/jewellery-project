import React, { useEffect, useState } from "react";
import Quantity from "../quantity/Quantity";
import { Link } from "react-router-dom";

const MyCart2 = () => {
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
    <div className="w-full  min-h-screen px-6">
      <div className="w-full p-2 mb-12  border-b border-gray-300">
        <h1 className="text-3xl font-bold text-left">My Cart</h1>
       
      </div>

      {data.length === 0 ? (
        <div className="flex justify-center items-center ">
          <img className="w-52" src="/someicons/cart.png" alt="" />
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-6 hover:bg-pink-100 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.image.url}
                alt={item.productName}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
              />

              <div className="flex-1 w-full text-center md:text-left">
                <p className="text-lg md:text-xl font-semibold truncate">
                  {item.productName}
                </p>
                <div className="mt-4">
                  <Quantity
                    id={item._id}
                    onQuantityChange={handleQuantityChange}
                  />
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex justify-between md:justify-start md:gap-10 items-center mt-2">
                  <p className="text-base md:text-lg font-bold text-red-600">
                    ₹{item.finalprice}
                  </p>
                </div>
                <button
                  onClick={() => handleremove(item._id)}
                  className="mt-3 md:mt-0"
                >
                  <img className="w-5 h-5" src="/delete.png" alt="delete" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
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
        <p className="text-2xl font-semibold mt-4 text-gray-500 text-center">
          Your cart is empty.
        </p>
      )}

      {data.length > 0 ? (
        <div className="bg-white m-4  mt-4">
          <Link
            to="/checkout"
            className="bg-[rgb(12,131,31)] flex rounded-xl p-2 text-white justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-sm">₹{grandtotal}</span>
              <span className=" text-sm">TOTAL</span>
            </div>
            <p>Proceed To Pay </p>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyCart2;
