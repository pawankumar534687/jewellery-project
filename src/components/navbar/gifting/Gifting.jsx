import React, { useState } from "react";
import { Link } from "react-router-dom";

const Gifting = ({setIsOpen}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
       Gifting
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
            to="/collection/Jewellery"
            className="block text-sm hover:underline"  onClick={() => setIsOpen(false)}
          >
            Gift Box
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Jewellery Setes
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Gift For Baby
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Gift For Him
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Gift For Mom
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Gift For Teens
          </Link>
          <Link
            to="/collection/Jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Valentins Gift
          </Link>
        </div>
      )}

      
    </div>
  );
};

export default Gifting;
