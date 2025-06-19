import React, { useState, useEffect } from "react";

const Quantity = ({ id }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    
    const savedQuantity = JSON.parse(localStorage.getItem(`quantity_${id}`));
    if (savedQuantity) {
      setQuantity(savedQuantity);
    }
  }, [id]);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      localStorage.setItem(`quantity_${id}`, JSON.stringify(newQuantity));
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    localStorage.setItem(`quantity_${id}`, JSON.stringify(newQuantity));
  };

  return (
    <div className="flex items-center justify-center  border border-gray-300 rounded-full px-2  w-fit shadow-sm">
      <button
        onClick={handleDecrease}
        className="w-4  h-4 pb-1 font-semibold text-xl cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition"
      >
        -
      </button>
      <span className="text-lg font-medium w-6 text-center">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-4  h-4 pb-1 text-xl cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
