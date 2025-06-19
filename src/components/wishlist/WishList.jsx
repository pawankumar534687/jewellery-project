import React, { useState, useEffect } from "react";

const WishList = () => {
  const [wishListProducts, setWishListProducts] = useState([]);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishListProducts(wishlist);
  }, []);

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productToAdd = {
      _id: item._id,
      price: item.price,
      image: item.image,
      productName: item.productName,
    };

    const updatedCart = [...existingCart, productToAdd];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const wishlishremove = (id) => {
    const currentwishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const updatedwishlist = currentwishlist.filter((item) => item._id !== id);

    localStorage.setItem("wishlist", JSON.stringify(updatedwishlist)); // 👈 fix here
    setWishListProducts(updatedwishlist);
  };

  return (
    <div className="w-full pt-6 bg-gray-100 min-h-screen px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">WishList Products</h1>

      {wishListProducts.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="space-y-4 ">
          {wishListProducts.map((item) => (
            <div
              key={item._id}
              className="w-full flex flex-col md:flex-row items-center gap-3 md:gap-6 hover:bg-pink-100 bg-white p-4 rounded-xl shadow"
            >
              <img
                src={item.images}
                alt={item.productName}
                className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-md"
              />

              <div className="flex-1 w-full text-center md:text-left">
                <p className="text-lg md:text-xl font-semibold">
                  {item.productName}
                </p>
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <p className="text-base md:text-lg text-red-600 mt-1">
                  ₹{item.price}
                </p>
              </div>

              <button
                onClick={() => handleAddToCart(item)}
                className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-sm mt-3 md:mt-0"
              >
                Add to Cart
              </button>
              <div className="flex justify-center items-center ">
                <button className="cursor-pointer" onClick={() => wishlishremove(item._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
