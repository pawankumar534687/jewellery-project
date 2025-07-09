import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Quantity from "../quantity/Quantity";
import AddToCart from "../addtocart/AddToCart";

const Deatailed = () => {
  const [detailed, setDetailed] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();

  const [zoomVisible, setZoomVisible] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const zoomScale = 2;

  const handleMouseMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 48; // lens width/2
    const y = e.clientY - rect.top - 48;

    const maxX = rect.width - 96;
    const maxY = rect.height - 96;

    setLensPosition({
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    });

    setZoomVisible(true);
  };

  const fetchDetailedProduct = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `http://localhost:8000/api/detaildProduct/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDetailed(response.data);
      setSelectedImage(response.data.images?.[0]?.url);
    } catch (error) {
      toast.error("Failed to load product details");
    }
  };

  useEffect(() => {
    fetchDetailedProduct();
  }, [id]);

  if (!detailed) return <div className="pt-24 text-center">Loading...</div>;

  return (
    <div className="w-full flex pt-12 max-lg:flex-col border-b border-b-neutral-200 min-h-[calc(100vh-100px)]">
      {/* LEFT IMAGE SECTION */}
      <div className="w-[50%] border-r max-lg:w-full border-r-neutral-200">
        <div className="flex justify-center p-6 items-center flex-col">
          {selectedImage && (
            <div
              className="relative w-[85%] aspect-square rounded-2xl overflow-hidden border"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setZoomVisible(false)}
              ref={imageRef}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover"
              />
              {zoomVisible && (
                <div
                  className="absolute w-24 h-24 border border-black/20 bg-black/10 pointer-events-none"
                  style={{
                    top: `${lensPosition.y}px`,
                    left: `${lensPosition.x}px`,
                  }}
                />
              )}
            </div>
          )}
          <div className="flex gap-4 pt-8 flex-wrap justify-center">
            {detailed?.images?.map((image, index) => (
              <div
                key={index}
                className={`w-20 h-20 rounded-2xl overflow-hidden cursor-pointer ${
                  selectedImage === image.url ? "border-2 border-green-600" : ""
                }`}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={`image-${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[50%] max-lg:w-full p-12 flex flex-col gap-6 relative">
        {zoomVisible && (
          <div
            className="absolute top-4 right-12 w-[100%] h-[70%]  rounded-lg hidden lg:block z-10"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${zoomScale * 100}%`,
              backgroundPosition: `${-lensPosition.x * zoomScale + 50}px ${
                -lensPosition.y * zoomScale + 50
              }px`,
            }}
          />
        )}

        <h2 className="text-3xl font-semibold">{detailed.productName}</h2>

        {/* DESKTOP PRICING */}
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xl flex gap-4">
              <span className="line-through text-gray-400">
                ₹{detailed.price}
              </span>
              <span className="text-md font-bold text-green-600 uppercase tracking-wide">
                {detailed.discount}% OFF
              </span>
              <span className="font-semibold">₹{detailed.finalprice}</span>
            </p>
            <p className="text-[12px] text-gray-500">
              (Inclusive of all taxes)
            </p>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-2">
          <p className="text-xl flex flex-wrap items-center gap-4">
            <span className="line-through text-gray-400">
              ₹{detailed.price}
            </span>
            <span className="text-md font-bold text-green-600 uppercase tracking-wide">
              {detailed.discount}% OFF
            </span>
            <span className="font-semibold">₹{detailed.finalprice}</span>
          </p>
          <p className="text-[12px] text-gray-500">(Inclusive of all taxes)</p>
        </div>

        <div className="border-b flex justify-between items-center border-b-neutral-200 py-4">
          <Quantity id={detailed._id} quantity={detailed.quantity} />
          <AddToCart item={detailed} />
        </div>

        <div>
          <div className="font-semibold">Customer Care Details</div>
          <div className="text-md text-gray-500">
            {detailed.customerCareDetails}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="text-gray-500">{detailed.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold py-6">Why shop from Zariin?</h3>

          {/* 1. Fast & Secure Shipping */}
          <div className="flex gap-4 pb-4 max-sm:flex-col w-full items-start">
            <img
              className="w-12 h-12 object-contain"
              src="/jewellrymodel/firsticon.png"
              alt="Fast & Secure Shipping"
            />
            <div className="flex-1">
              <h5 className="text-sm font-medium">Fast & Secure Shipping</h5>
              <p className="text-sm text-gray-500">
                Enjoy fast and secure delivery of your precious jewellery right
                to your doorstep.
              </p>
            </div>
          </div>

          {/* 2. Authentic Certified Jewellery */}
          <div className="flex gap-4 pb-4 max-sm:flex-col w-full items-start">
            <img
              className="w-12 h-12 object-contain"
              src="/jewellrymodel/secondicon.png"
              alt="Certified Jewellery"
            />
            <div className="flex-1">
              <h5 className="text-sm font-medium">
                Authentic Certified Jewellery
              </h5>
              <p className="text-sm text-gray-500">
                Every piece is hallmarked and certified for purity and
                authenticity.
              </p>
            </div>
          </div>

          {/* 3. Exclusive Designs */}
          <div className="flex gap-4 pb-4 max-sm:flex-col w-full items-start">
            <img
              className="w-12 h-12 object-contain"
              src="/jewellrymodel/thurd.png"
              alt="Exclusive Designs"
            />
            <div className="flex-1">
              <h5 className="text-sm font-medium">Exclusive Designs</h5>
              <p className="text-sm text-gray-500">
                Discover unique handcrafted jewellery designed by expert
                artisans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deatailed;
