import React, { useState } from "react";
import Logo from "./logo/Logo";
import AllJewellery from "./alljewellery/AllJewellery";
import { Link } from "react-router-dom";
import ShopByStyle from "./shopbystyle/ShopByStyle";
import Gifting from "./gifting/Gifting";
import Zodiac from "./zodiac/Zodiac";
import Wedding from "./wedding/Wedding";
import Search from "../Search";
import { RiAccountCircleLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

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
            <Link
              className="hover:underline text-sm"
              to="/jewellery/New Arrival"
            >
              New Arrival
            </Link>
            <AllJewellery />
            <ShopByStyle />
            <Gifting />
            <Zodiac />
            <Wedding />
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mr-4 sm:mr-6 md:mr-12">
          <Search />

          {token ? (
            <Link to="/userprofile" className="flex items-center">
              <img
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                src="/boy.png"
                alt="Profile"
              />
            </Link>
          ) : (
            <Link to="/login" className="flex items-center">
              <VscAccount  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5" />
            </Link>
          )}

          <button onClick={show} className="flex items-center">
            <img className="w-5 h-5 sm:w-6 sm:h-6" src="/bag.png" alt="Cart" />
          </button>
        </div>
      </div>

      <div className="relative">
        {isOpen && (
          <div className="fixed top-[56px] left-0 w-[60%] z-[999] flex flex-col lg:hidden items-start bg-white shadow-md rounded-b-2xl h-[calc(100vh-240px)] overflow-y-auto">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:underline text-sm ml-4 py-2"
              to="/collection/Jewellery"
            >
              New Arrival
            </Link>
            <AllJewellery setIsOpen={setIsOpen} isOpen={isOpen} />
            <ShopByStyle setIsOpen={setIsOpen} isOpen={isOpen} />
            <Gifting setIsOpen={setIsOpen} isOpen={isOpen} />
            <Zodiac setIsOpen={setIsOpen} isOpen={isOpen} />
            <Wedding setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
