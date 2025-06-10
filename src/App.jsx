import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import TopLink from "./components/toplink/TopLink";
import AllJewellery from "./components/navbar/alljewellery/AllJewellery";
import BestSeller from "./components/navbar/alljewellery/BestSeller";
import Bracelets from "./components/navbar/alljewellery/Bracelets";
import Charms from "./components/navbar/alljewellery/Charms";
import Eearings from "./components/navbar/alljewellery/Eearings";
import HairAccessories from "./components/navbar/alljewellery/HairAccessories";
import Nackles from "./components/navbar/alljewellery/Nackles";
import Rings from "./components/navbar/alljewellery/Rings";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div>
        <Link
          to="/toplink"
          className="flex justify-center items-center bg-black text-white text-[12px]"
        >
          GET 10% OFF, USE CODE NOW10. ADD TO CART TO SEE ALL OFFERS !
          <img
            className="h-6 w-6 inline ml-1 text-amber-300"
            src="/arrow.png"
            alt="arrow"
          />
        </Link>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toplink" element={<TopLink />} />

          <Route path="/alljewellery" element={<AllJewellery />}>
            <Route path="bestseller" element={<BestSeller />} />
            <Route path="bracelets" element={<Bracelets />} />
            <Route path="charms" element={<Charms />} />
            <Route path="earings" element={<Eearings />} />
            <Route path="hairaccessories" element={<HairAccessories />} />
            <Route path="nackles" element={<Nackles />} />
            <Route path="rings" element={<Rings />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
