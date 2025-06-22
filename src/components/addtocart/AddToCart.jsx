import React from "react";

const AddToCart = ({ item }) => {
  const handleAdd = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const originalPrice = item.price;
    const subtract = originalPrice / 10;
    const discountedPrice = originalPrice - subtract;

    const productToAdd = {
      _id: item._id,
      price: item.price,
      discountprice: discountedPrice.toFixed(0),
      image: item.images?.[0],
      productName: item.productName,
      quantity: 1, // Initial quantity
    };

    const existProduct = existingCart.find((p) => p._id === item._id);

    if (existProduct) {
      // Agar already product hai → sirf quantity +1 karni chahiye (optional)
      const updatedCart = existingCart.map((p) =>
        p._id === item._id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...existingCart, productToAdd];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          handleAdd();
          e.preventDefault();
          e.stopPropagation();
        }}
        className="bg-black text-sm px-12 rounded-2xl py-2 cursor-pointer text-white"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddToCart;
