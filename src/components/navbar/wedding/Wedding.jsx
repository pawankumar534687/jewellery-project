import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wedding = ({setIsOpen}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
       Wedding
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
            to="/wedding/bridal-favors"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
         Bridal Favors
          </Link>
          <Link
            to="/wedding/bridal-jewelery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Bridal Jewelery
          </Link>
          <Link
            to="/wedding/zariin-brides"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Zariin Brides
          </Link>
          <Link
            to="/wedding/mangalsutra"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
           Mangalsutra
          </Link>
          
          
        </div>
      )}

      
    </div>
  );
};

export default Wedding;
