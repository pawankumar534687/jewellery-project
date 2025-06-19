import React, { useState } from "react";
import Logo from "./logo/Logo";
import AllJewellery from "./alljewellery/AllJewellery";
import { Link } from "react-router-dom";
import ShopByStyle from "./shopbystyle/ShopByStyle";
import Gifting from "./gifting/Gifting";
import Zodiac from "./zodiac/Zodiac";
import Wedding from "./wedding/Wedding";
import Search from "../Search";

const Navbar = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white flex border-b border-b-gray-300 items-center justify-between">
        <button
          className="m-4 absolute lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img className="w-auto h-6" src="/menu.png" alt="menu" />
        </button>

        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex max-lg:hidden items-center">
            <Link className="hover:underline text-sm" to="newarrival">
              New Arrival
            </Link>
            <AllJewellery />
            <ShopByStyle />
            <Gifting />
            <Zodiac />
            <Wedding />
            <Link className="hover:underline text-sm" to="urja">
              Urja
            </Link>
          </div>
        </div>

        <div className="flex gap-8 mr-12">
          <Search />
          {token ? (
            <Link to="/userprofile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round-icon lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </Link>
          ) : (
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-round-icon lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </Link>
          )}

          <button onClick={show}>
            <Link>
              <img className="w-auto h-6" src="/bag.png" alt="" />
            </Link>
          </button>
        </div>
      </div>

      <div className="relative">
        {isOpen && (
          <div className="absolute   overflow-y-scroll top-full left-0 w-[70%] z-50 flex flex-col lg:hidden items-start bg-white shadow-md ">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:underline text-sm ml-4 py-2"
              to="newarrival"
            >
              New Arrival
            </Link>
            <AllJewellery setIsOpen={setIsOpen} isOpen={isOpen} />
            <ShopByStyle setIsOpen={setIsOpen} isOpen={isOpen} />
            <Gifting setIsOpen={setIsOpen} isOpen={isOpen} />
            <Zodiac setIsOpen={setIsOpen} isOpen={isOpen} />
            <Wedding setIsOpen={setIsOpen} isOpen={isOpen} />
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:underline text-sm ml-4 py-2"
              to="urja"
            >
              Urja
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
