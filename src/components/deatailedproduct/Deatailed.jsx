import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { toast } from "react-toastify";
import Quantity from "../quantity/Quantity";
import AddToCart from "../addtocart/AddToCart";
const Deatailed = () => {
  const [detailed, setdetailed] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const detailedProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/detaildProduct/${id}`
      );

      setdetailed(response.data);
      setSelectedImage(response.data.images?.[0]);
    } catch (error) {
      toast.error("faild to load");
    }
  };

  useEffect(() => {
    detailedProduct();
  }, [id]);
  if (!detailed) return <div className="pt-24 text-center">Loading...</div>;

  return (
    <div className="w-full flex pt-12 max-lg:flex-col border-b border-b-neutral-200 min-h-[calc(100vh-100px)]">
      
      <div className="w-[50%] border-r max-lg:w-full border-r-neutral-200">
        <div className="flex justify-center p-6 items-center flex-col">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[65%] h-auto rounded-2xl"
            />
          )}
          <div className="flex gap-4 pt-8 flex-wrap justify-center">
            {detailed?.images?.map((image, index) => (
              <img
                src={image}
                alt="img"
                key={index}
                className={`w-20 rounded-2xl cursor-pointer ${
                  selectedImage === image ? "border-2 border-green-600" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT DETAILS SECTION */}
      <div className="w-[50%] max-lg:w-full p-12 flex flex-col gap-6">
        <h2 className="text-3xl font-semibold">{detailed?.productName}</h2>

        {/* DESKTOP PRICING */}
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xl flex gap-4">
              <span className="line-through text-gray-400">
                ₹{detailed?.price}
              </span>
              <span className="text-md font-bold text-green-600 uppercase tracking-wide">
                10% OFF
              </span>
              <span className="font-semibold">
                ₹{(detailed?.price - detailed?.price / 10).toFixed(0)}
              </span>
            </p>
            <p className="text-[12px] text-gray-500">
              (Inclusive of all taxes)
            </p>
          </div>
        </div>

        {/* MOBILE PRICING */}
        <div className="lg:hidden flex flex-col gap-2">
          <p className="text-xl flex flex-wrap items-center gap-4">
            <span className="line-through text-gray-400">
              ₹{detailed?.price}
            </span>
            <span className="text-md font-bold text-green-600 uppercase tracking-wide">
              10% OFF
            </span>
            <span className="font-semibold">
              ₹{(detailed?.price - detailed?.price / 10).toFixed(0)}
            </span>
          </p>
          <p className="text-[12px] text-gray-500">(Inclusive of all taxes)</p>
        </div>

        {/* QUANTITY + ADD TO CART */}
        <div className="border-b flex justify-between items-center border-b-neutral-200 py-4">
          <Quantity id={detailed._id} />
          <AddToCart item={detailed} />
        </div>

        {/* CUSTOMER CARE */}
        <div>
          <div className="font-semibold">Customer Care Details</div>
          <div className="text-md text-gray-500">
            {detailed?.customerCareDetails}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-500">{detailed?.description}</p>
        </div>

        {/* WHY SHOP */}
        <div>
          <h3 className="text-lg font-semibold py-6">Why shop from Zariin?</h3>

          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex gap-6 pb-4">
              <img
                className="w-[10%]"
                src={
                  idx === 0
                    ? "/jewellrymodel/firsticon.png"
                    : idx === 1
                    ? "/jewellrymodel/secondicon.png"
                    : "/jewellrymodel/thurd.png"
                }
                alt=""
              />
              <div>
                <h5 className="text-sm">
                  {idx === 0
                    ? "Fast & Secure Shipping"
                    : idx === 1
                    ? "Authentic Certified Jewellery"
                    : "Exclusive Designs"}
                </h5>
                <p className="text-sm text-gray-500">
                  {idx === 0 &&
                    "Enjoy fast and secure delivery of your precious jewellery right to your doorstep."}
                  {idx === 1 &&
                    "Every piece is hallmarked and certified for purity and authenticity."}
                  {idx === 2 &&
                    "Discover unique handcrafted jewellery designed by expert artisans."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deatailed;
