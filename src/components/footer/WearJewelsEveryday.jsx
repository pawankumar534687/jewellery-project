import React from "react";
import { Link } from "react-router-dom";
const WearJewelsEveryday = () => {
  return (
    <div>
      <h1 className="lg:text-6xl max-lg:text-3xl max-md:2xl max-sm:xl  pt-16 flex justify-center items-center">
        #WearJewelsEveryday
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 mt-6   justify-items-center">
        <div className="flex flex-col gap-2 mt-12">
          <h1 className="text-xl">ABOUT</h1>
          <Link to="/about" className="text-sm">about</Link>
          <Link to="/contactus" className="text-sm">Contact Us</Link>
          <Link to="/term-conditions" className="text-sm">Terms and Conditions</Link>
          <Link to="/privacypolicy" className="text-sm">Privacy Policy</Link>
          <Link to="/wishlist" className="text-sm">WishList</Link>
          <Link className="text-sm">Celebrities</Link>
        </div>

        <div className="flex flex-col gap-2 mt-12">
          <h1 className="text-xl">SHOP WITH US</h1>
          <Link className="text-sm">Wholesale Information </Link>
          <Link className="text-sm">Book an Appointment</Link>
          <Link className="text-sm">Track your order</Link>
        </div>

        <div className="flex flex-col gap-2 mt-12">
          <h1 className="text-xl">INFORMATION</h1>
          <Link className="text-sm">Privacy Policy</Link>
          <Link className="text-sm">Terms & Conditions</Link>
          <Link className="text-sm">Shipping & Returns</Link>
          <Link className="text-sm">Refund Policy</Link>
          <Link className="text-sm">Contact Us</Link>
          <Link className="text-sm">FAQs</Link>
          <Link className="text-sm">Raise a Ticket</Link>
          <Link className="text-sm">Write to us</Link>
          <Link className="text-sm">Sitemap</Link>
        </div>
        <div className="flex flex-col gap-2 mt-12">
          <h1 className="text-xl">POPULAR CATEGORIES</h1>
          <Link className="text-sm">Necklace</Link>
          <Link className="text-sm">Earrings</Link>
          <Link className="text-sm">Rings</Link>
          <Link className="text-sm">Bracelets & Cuffs</Link>
          <Link className="text-sm">Jewellery Sets</Link>
          <Link className="text-sm">Hair Jewellery</Link>
          <Link className="text-sm">Men's Accessories</Link>
          <Link className="text-sm">Evil Eye Jewellery</Link>
          <Link className="text-sm">Zodiac Jewellery</Link>
        </div>
      </div>
    </div>
  );
};

export default WearJewelsEveryday;
