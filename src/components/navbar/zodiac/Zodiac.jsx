import React, { useState } from "react";
import { Link } from "react-router-dom";

const Zodiac = ({setIsOpen}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
       Zodiac
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
            to="/zodiac/star-child"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
          Star Child
          </Link>
          <Link
            to="/zodiac/linked"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Linked
          </Link>
          <Link
            to="/zodiac/healing"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Healing
          </Link>
          <Link
            to="/zodiac/initials"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Initials
          </Link>
          <Link
            to="/zodiac/chakras"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Chakras
          </Link>
          
        </div>
      )}

      
    </div>
  );
};

export default Zodiac;
