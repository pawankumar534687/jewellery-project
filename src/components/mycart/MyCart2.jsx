import React, { useEffect, useState } from "react";

const MyCart2 = () => {
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
    <div className="w-full pt-6 bg-gray-100 min-h-screen px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Cart</h1>

      {data.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-6 hover:bg-pink-100 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.image}
                alt={item.productName}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
              />

              <div className="flex-1 w-full text-center md:text-left">
                <p className="text-lg md:text-xl font-semibold truncate">
                  {item.productName}
                </p>
                <div>
                  <h1>quantity btn</h1>
                </div>
              </div>
              <div className="flex gap-20">
                <div className="flex justify-between md:justify-start md:gap-10 items-center mt-2">
                  <p className="text-base md:text-lg font-bold text-red-600">
                    ₹{item.price}
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
    </div>
  );
};

export default MyCart2;
