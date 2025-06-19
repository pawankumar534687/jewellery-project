import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToCart from "../addtocart/AddToCart";

const AllData = () => {
  const [alldata, setalldata] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:8000/api/alldata");
      setalldata(response.data);
    };
    getData();
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full pt-12 bg-gray-100">
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <svg viewBox="0 0 10 6" className="w-4 h-4 rotate-90">
          <path
            fill="currentColor"
            d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
          />
        </svg>
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-200"
      >
        <svg viewBox="0 0 10 6" className="w-4 h-4 -rotate-90">
          <path
            fill="currentColor"
            d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
          />
        </svg>
      </button>

      <div
        ref={scrollRef}
        className="overflow-x-auto px-12 pb-12 hide-scrollbar scroll-smooth"
      >
        <div className="flex gap-4">
          {alldata.map((item) => {
            const discountedPrice = item.price - item.price / 10;

            return (
              <Link key={item._id} to={`/product/detaildProduct/${item._id}`}>
                <div className="relative w-60 shrink-0 border bg-white p-3 flex flex-col rounded-xl justify-center items-center border-gray-200">
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

                  <img className="rounded-xl" src={item.images[2]} alt="" />
                  <p className="text-md font-semibold mt-2">
                    {item.productName}
                  </p>

                  <div className="flex gap-16 ">
                    <p className="text-sm font-semibold mt-1 ">
                      <span className="line-through  text-gray-400">
                        ₹{item.price}
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
    </div>
  );
};

export default AllData;
