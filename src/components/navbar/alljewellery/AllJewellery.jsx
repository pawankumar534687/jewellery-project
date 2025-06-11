import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllJewellery = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex text-sm items-center hover:underline gap-2 px-4 py-2 rounded-md"
      >
        All Jewellery
        <span
          className={`inline-block transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <img className="w-4 h-4" src="/down-arrow.png" alt="arrow" />
        </span>
      </button>

      {open && (
        <div className="absolute bg-white shadow-lg z-10 mt-2 rounded-xl p-4 w-60 space-y-2">
          <Link
            to="/alljewellery/bestseller"
            className="block text-sm hover:underline"
            onClick={() => setIsOpen(false)}
          >
            BestSeller
          </Link>
          <Link
            to="/alljewellery/bracelets"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Bracelets
          </Link>
          <Link
            to="/alljewellery/charms"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Charms
          </Link>
          <Link
            to="/alljewellery/earings"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Earrings
          </Link>
          <Link
            to="/alljewellery/hairaccessories"
            onClick={() => setIsOpen(false)}
            className="block text-sm hover:underline "
          >
            Hair Accessories
          </Link>
          <Link
            to="/alljewellery/nackles"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Necklaces
          </Link>
          <Link
            to="/alljewellery/rings"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Rings
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllJewellery;
