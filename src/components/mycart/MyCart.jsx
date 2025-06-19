import React, { useEffect, useState } from "react";
import Quantity from "../quantity/Quantity";
const MyCart = ({ onRemove }) => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const resulte = JSON.parse(localStorage.getItem("cart")) || [];
    setdata(resulte);
  }, []);

  const handleremove = (id) => {
    const currentcart = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCart = currentcart.filter((item) => item._id !== id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setdata(updatedCart);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[9998] flex justify-end max-lg:justify-center">
      <div
        className="
          relative bg-gray-100 flex flex-col z-[9999]
          top-0 right-0 bottom-0
          md:left-auto md:w-[45%]        
          lg:w-[30%]                     
          max-md:inset-y-0 max-md:mx-auto max-md:left-0 max-md:right-0
          max-md:top-0 max-md:bottom-0 max-md:w-[90%] max-md:h-[90%] max-md:rounded-xl  
          shadow-lg rounded-2xl "
      >
        <div className="flex justify-between border-b bg-white border-b-neutral-300">
          <h2 className="text-xl  p-4 font-semibold mb-2">Your Cart</h2>
          <button
            onClick={onRemove}
            className="self-end cursor-pointer m-4 text-lg font-bold text-black"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-scroll pt-2 max-h-[70vh] px-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="mb-2 bg-white p-4 rounded-2xl flex pb-4 gap-4"
            >
              <img
                src={item.image}
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
                <div className="flex justify-between items-center ">
                  <Quantity id={item._id} />

                  <p className="text-lg font-bold mt-2">
                    ₹{item.discountprice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          d
        </div>
      </div>
    </div>
  );
};

export default MyCart;
