import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const AllJewellery = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (!setIsOpen) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!setIsOpen) setOpen(false);
      }}
      className="relative inline-block text-left"
    >
      <button
        onClick={() => {
          if (setIsOpen) setOpen(!open);
        }}
        className="flex text-sm items-center hover:underline gap-2 px-4 py-2 rounded-md"
      >
        All Jewellery
        <span
          className={`inline-block transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown className="text-lg" />
        </span>
      </button>

      {open && (
        <div className="absolute bg-white shadow-lg z-10  rounded-xl pl-4 w-50 space-y-2">
          <Link
            to="/jewellery/BestSeller"
            className="block text-sm hover:underline"
            onClick={() => setIsOpen(false)}
          >
            BestSeller
          </Link>
          <Link
            to="/jewellery/Bracelets"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Bracelets
          </Link>
          <Link
            to="/jewellery/Charms"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Charms
          </Link>
          <Link
            to="/jewellery/Earrings"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Earrings
          </Link>
          <Link
            to="/jewellery/Hair Accessories"
            onClick={() => setIsOpen(false)}
            className="block text-sm hover:underline "
          >
            Hair Accessories
          </Link>
          <Link
            to="/jewellery/Necklaces"
            className="block text-sm hover:underline "
            onClick={() => setIsOpen(false)}
          >
            Necklaces
          </Link>
          <Link
            to="/jewellery/Rings"
            className="block text-sm hover:underline mb-2"
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
