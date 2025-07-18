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

    localStorage.setItem("wishlist", JSON.stringify(updatedwishlist)); 
    setWishListProducts(updatedwishlist);
  };

  

  return (
    <div className="w-full pt- min-h-screen px-6">
      <div className="w-full p-2 mb-12  border-b border-gray-300">
        <h1 className="text-3xl font-bold text-left">WishList Products</h1>
       
      </div>

      {wishListProducts.length === 0 ? (
        <>
        <div className="flex justify-center items-center">

        <img className="w-52 " src="favorite.png" alt="favorite.png" />
        </div>
        <p className="text-2xl font-semibold mt-6 text-gray-500 text-center">
          Your wishlist is empty.
        </p>
        </>
      ) : (
        <div className="space-y-4 ">
          {wishListProducts.map((item) => (
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
                <p className="text-lg md:text-xl font-semibold">
                  {item.productName}
                </p>
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                <p className="text-base md:text-lg text-red-600 mt-1">
                  ₹{item.discountedPrice}
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
