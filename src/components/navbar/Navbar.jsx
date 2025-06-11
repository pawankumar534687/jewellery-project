import React, { useState } from "react";
import Logo from "./logo/Logo";
import AllJewellery from "./alljewellery/AllJewellery";
import { Link } from "react-router-dom";
import ShopByStyle from "./shopbystyle/ShopByStyle";
import Gifting from "./gifting/Gifting";
import Zodiac from "./zodiac/Zodiac";
import Wedding from "./wedding/Wedding";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex border-b border-b-gray-300  items-center justify-between">
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
          <Link>
            <img className="w-auto h-6" src="/search.png" alt="" />
          </Link>
          <Link to="/login">
            <img className="w-auto h-5" src="/user.png" alt="" />
          </Link>
          <Link>
            <img className="w-auto h-6" src="/bag.png" alt="" />
          </Link>
        </div>
      </div>

      <div className="relative">
        {isOpen && (
          <div className="absolute  overflow-y-scroll top-full left-0 w-[70%] z-50 flex flex-col lg:hidden items-start bg-white shadow-md mt-2">
            <Link onClick={()=> setIsOpen(false) } className="hover:underline text-sm ml-4 py-2" to="newarrival">
              New Arrival
            </Link>
            <AllJewellery setIsOpen={setIsOpen} isOpen={isOpen}  />
            <ShopByStyle setIsOpen={setIsOpen} isOpen={isOpen} />
            <Gifting setIsOpen={setIsOpen} isOpen={isOpen} />
            <Zodiac setIsOpen={setIsOpen} isOpen={isOpen}  />
            <Wedding setIsOpen={setIsOpen} isOpen={isOpen}  />
            <Link onClick={()=> setIsOpen(false) } className="hover:underline text-sm ml-4 py-2" to="urja">
              Urja
            </Link>
          </div>
        )}
       
      </div>
    </>
  );
};

export default Navbar;
