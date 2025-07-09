import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const ShopByStyle = ({ setIsOpen }) => {
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
        Shop by Style
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
            to="/jewellery/Curated Looks"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Curated Looks
          </Link>
          <Link
            to="/jewellery/Layered Necklace"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Layered Necklace
          </Link>
          <Link
            to="/jewellery/Contemporary Jewellery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Contemporary Jewellery
          </Link>
          <Link
            to="/jewellery/Daily Wear Everyday Jewellery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Daily Wear Everyday Jewellery
          </Link>
          <Link
            to="/jewellery/Celestial Jewellery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Celestial Jewellery
          </Link>
          <Link
            to="/jewellery/Modern Indian Jewellery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Modern Indian Jewelery
          </Link>
          <Link
            to="/jewellery/Traditional Earrings For Women & Girls"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Traditional Earrings For Women & Girls
          </Link>
          <Link
            to="/jewellery/Polki Jewellery"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Polki Jewellery
          </Link>
          <Link
            to="/jewellery/Collections"
            className="block text-sm hover:underline mb-2"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Collections
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopByStyle;
