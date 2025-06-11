import React, {useState} from "react";
import { Link } from "react-router-dom";

const ShopByStyle = ({setIsOpen}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex text-sm hover:underline items-center gap-2 px-4 py-2 rounded-md"
      >
        Shop by Style
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
            to="/shopbystyle/curated-looks"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Curated Looks
          </Link>
          <Link
            to="/shopbystyle/layered-necklace"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Layered Necklace
          </Link>
          <Link
            to="/shopbystyle/contemporary-jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Contemporary Jewellery
          </Link>
          <Link
            to="/shopbystyle/daily-wear-everyday-jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Daily Wear Everyday Jewellery
          </Link>
          <Link
            to="/shopbystyle/celestial-jewellery"
            className="block text-sm hover:underline "
          >
            Celestial Jewellery
          </Link>
          <Link
            to="/shopbystyle/modern-indian-jewelery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Modern Indian Jewelery
          </Link>
          <Link
            to="/shopbystyle/traditional-earrings-for-women-girls"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Traditional Earrings For Women & Girls
          </Link>
          <Link
            to="/shopbystyle/polki-jewellery"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Polki Jewellery
          </Link>
           <Link
            to="/shopbystyle/collections"
            className="block text-sm hover:underline "  onClick={() => setIsOpen(false)}
          >
            Collections
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopByStyle;
