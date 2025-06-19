import React from "react";

const AddToCart = ({ item }) => {
  const handleAdd = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const originalPrice = item.price;
    const subtract = originalPrice / 10;
    const discountedPrice = originalPrice - subtract;

    const productToAdd = {
      _id: item._id,
      price: item.price,
      discountprice: discountedPrice.toFixed(0),
      image: item.images[0],
      productName: item.productName,
    };

   const existProduct = existingCart.find((p) => p._id === item._id);

if (existProduct) {
 
  const updatedCart = existingCart.filter((p) => p._id !== item._id);

 
  updatedCart.push({ ...productToAdd, quantity: 1 });

  localStorage.setItem("cart", JSON.stringify(updatedCart));
} else {
  const updatedCart = [...existingCart, { ...productToAdd, quantity: 1 }];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

  };

  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          handleAdd(item);
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
