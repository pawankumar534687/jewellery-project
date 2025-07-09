import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Wedding = ({ setIsOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        if (!setIsOpen) setOpen(true);
      }}
      onMouseLeave={() => {
        if (!setIsOpen) setOpen(false);
      }}
      className="relative inline-block mb-2 text-left"
    >
      <button
        onClick={() => {
          if (setIsOpen) setOpen(!open);
        }}
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
        Wedding
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
            to="/jewellery/Bridal Favors"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Bridal Favors
          </Link>
          <Link
            to="/jewellery/Bridal Jewelery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Bridal Jewelery
          </Link>
          <Link
            to="/jewellery/Zariin Brides"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Zariin Brides
          </Link>
          <Link
            to="/jewellery/Mangalsutra"
            className="block text-sm hover:underline mb-2"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Mangalsutra
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wedding;
