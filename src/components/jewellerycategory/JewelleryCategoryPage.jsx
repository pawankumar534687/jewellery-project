import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AddToCart from "../addtocart/AddToCart";

const JewelleryCategoryPage = () => {
  const [categoryData, setcategoryData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const params = useParams();

  const category = params.category;

  const getData = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/collection/${category}`
      );
      setcategoryData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (category) {
      getData(category);
    }
  }, []);
  const toggleWishlist = (item) => {
    const isAlreadyInWishlist = wishlistData.some(
      (wishlistItem) => wishlistItem._id === item._id
    );

    let updatedWishlist;

    if (isAlreadyInWishlist) {
      updatedWishlist = wishlistData.filter(
        (wishlistItem) => wishlistItem._id !== item._id
      );
    } else {
      updatedWishlist = [...wishlistData, item];
    }

    setWishlistData(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const isWishlisted = (itemId) => {
    return wishlistData.some((wishlistItem) => wishlistItem._id === itemId);
  };

  return (
    <div className="pt-16">
      <div className="ml-20 p-6 text-4xl underline font-bold">{category}</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto max-w-7xl px-4">
        {categoryData.map((item) => {
          const discountedPrice = item.price - item.price / 10;

          return (
            <Link key={item._id} to={`/product/detaildProduct/${item._id}`}>
              <div className="relative w-full border bg-white p-3 flex flex-col rounded-xl justify-center items-center border-gray-200">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(item);
                  }}
                  className={`absolute top-3 right-3 cursor-pointer bg-white rounded-full shadow transition-transform duration-200 text-red-500 ${
                    isWishlisted(item._id) ? "scale-120" : "scale-100"
                  }`}
                >
                  {isWishlisted(item._id) ? "❤️" : "🤍"}
                </button>

                <div className="w-full h-64 overflow-hidden flex justify-center items-center bg-gray-100 rounded-xl">
                  <img
                    className="object-cover w-full h-full"
                    src={item.images[0]}
                    alt=""
                  />
                </div>

                <p className="text-md font-semibold mt-2">{item.productName}</p>

                <div className="flex gap-16 pb-2">
                  <p className="text-sm font-semibold mt-1 flex flex-col ">
                    <span className="line-through text-gray-400">
                      ₹{item.price}
                    </span>
                    <span className="text-md font-bold text-green-600 uppercase tracking-wide">
                      10% OFF
                    </span>
                  </p>

                  <p className="text-md font-semibold mt-1">
                    ₹{discountedPrice.toFixed(0)}
                  </p>
                </div>

                <AddToCart item={item} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default JewelleryCategoryPage;
