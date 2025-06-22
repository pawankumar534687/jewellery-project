import React, { useState, useEffect } from "react";

const Quantity = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((p) => p._id === id);
    if (item) {
      setQuantity(item.quantity);
    }
  }, [id]);

  const updateCart = (newQuantity) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setQuantity(newQuantity);
  };

  const handleIncrease = () => {
    updateCart(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      updateCart(quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-center  border border-gray-300 rounded-full px-2 w-fit shadow-sm">
      <button
        onClick={handleDecrease}
        className="w-4 h-4 pb-1 font-semibold text-xl cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition"
      >
        -
      </button>
      <span className="text-lg font-medium w-6 text-center">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-4 h-4 pb-1 text-xl cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
