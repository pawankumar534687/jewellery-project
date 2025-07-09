import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Gifting = ({ setIsOpen }) => {
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
        Gifting
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
            to="/jewellery/Gift Box"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Gift Box
          </Link>
          <Link
            to="/jewellery/Jewellery Setes"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Jewellery Setes
          </Link>
          <Link
            to="/jewellery/Gift For Baby"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Gift For Baby
          </Link>
          <Link
            to="/jewellery/Gift for Him"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Gift For Him
          </Link>
          <Link
            to="/jewellery/Gift For Mom"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Gift For Mom
          </Link>
          <Link
            to="/jewellery/Gift For Teens"
            className="block text-sm hover:underline"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Gift For Teens
          </Link>
          <Link
            to="/jewellery/Valentins Gift"
            className="block text-sm hover:underline mb-2"
            onClick={() => {
              setIsOpen(false);
              setOpen(false);
            }}
          >
            Valentins Gift
          </Link>
        </div>
      )}
    </div>
  );
};

export default Gifting;
