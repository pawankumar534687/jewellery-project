import React, { useState } from "react";
import { CheckCircle } from "lucide-react"; 
import { FaCartPlus } from "react-icons/fa";
const AddToCart = ({ item }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productToAdd = {
      _id: item._id,
      price: Number(item.price),
      finalprice: item.finalprice,
      discount: item.discount,
      image: item.images?.[0],
      productName: item.productName,
      quantity: 1,
    };

    const existProduct = existingCart.find((p) => p._id === item._id);

    if (existProduct) {
      const updatedCart = existingCart.map((p) =>
        p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...existingCart, productToAdd];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }

    // Show feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Reset after 1.5s
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleAdd();
      }}
      disabled={added}
      className={`text-sm px-6 py-2 rounded-full flex items-center gap-2 justify-center transition-all duration-300 font-semibold shadow-md ${
        added
          ? "bg-fuchsia-500 text-white"
          : "bg-black text-white hover:bg-gray-800"
      }`}
    >
      {added ? (
        <>
          <CheckCircle className="w-5 h-5 animate-bounce" />
          Added
        </>
      ) : (
        <>
          <FaCartPlus className="w-4 h-4" />
          Add to Cart
        </>
      )}
    </button>
  );
};

export default AddToCart;
