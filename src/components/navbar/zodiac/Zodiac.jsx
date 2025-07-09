import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Zodiac = ({ setIsOpen }) => {
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
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
        Zodiac
        <span
          className={`inline-block transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <IoIosArrowDown className="text-lg" />
        </span>
      </button>

      {open && (
        <div className="absolute bg-white shadow-lg z-10 rounded-xl pl-4 w-50 space-y-2">
          <Link
            to="/jewellery/Star Child"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Star Child
          </Link>
          <Link
            to="/jewellery/Linked"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Linked
          </Link>
          <Link
            to="/jewellery/Healing"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Healing
          </Link>
          <Link
            to="/jewellery/Initals"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Initials
          </Link>
          <Link
            to="/jewellery/Chakras"
            className="block text-sm hover:underline mb-2"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Chakras
          </Link>
        </div>
      )}
    </div>
  );
};

export default Zodiac;
