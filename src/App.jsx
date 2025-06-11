import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import TopLink from "./components/toplink/TopLink";
// import AllJewellery from "./components/navbar/alljewellery/AllJewellery";
import AllJewelleryRoute from "./components/navbar/alljewellery/AllJewelleryRoute";
import BestSeller from "./components/navbar/alljewellery/BestSeller";
import Bracelets from "./components/navbar/alljewellery/Bracelets";
import Charms from "./components/navbar/alljewellery/Charms";
import Eearings from "./components/navbar/alljewellery/Eearings";
import HairAccessories from "./components/navbar/alljewellery/HairAccessories";
import Nackles from "./components/navbar/alljewellery/Nackles";
import Rings from "./components/navbar/alljewellery/Rings";
import Home from "./components/home/Home";
import NewArrival from "./components/navbar/newarrival/NewArrival";
import CuratedLooks from "./components/navbar/shopbystyle/CuratedLooks";
import CelestialJewellery from "./components/navbar/shopbystyle/CelestialJewellery";
import Collections from "./components/navbar/shopbystyle/Collections";
import ContemporaryJewellery from "./components/navbar/shopbystyle/ContemporaryJewellery";
import DailyWearEverydayJewellery from "./components/navbar/shopbystyle/DailyWearEverydayJewellery";
import LayeredNecklace from "./components/navbar/shopbystyle/LayeredNecklace";
import ModernIndianJewelery from "./components/navbar/shopbystyle/ModernIndianJewelery";
import PolkiJewellery from "./components/navbar/shopbystyle/PolkiJewellery";
import TraditionalEarringsForWomenGirls from "./components/navbar/shopbystyle/TraditionalEarringsForWomenGirls";
import ShopByStyleRoutes from "./components/navbar/shopbystyle/ShopByStyleRoutes";
import GiftingRoutes from "./components/navbar/gifting/GiftingRoutes";
import GiftBox from "./components/navbar/gifting/GiftBox";
import GiftForBaby from "./components/navbar/gifting/GiftForBaby";
import GiftForHim from "./components/navbar/gifting/GiftForHim";
import GiftForMom from "./components/navbar/gifting/GiftForMom";
import GiftForTeens from "./components/navbar/gifting/GiftForTeens";
import JewellerySetes from "./components/navbar/gifting/JewellerySetes";
import ValentinsGift from "./components/navbar/gifting/ValentinsGift";
import ZodiacRoutes from "./components/navbar/zodiac/ZodiacRoutes";
import Chakras from "./components/navbar/zodiac/Chakras";
import Healing from "./components/navbar/zodiac/Healing";
import Initials from "./components/navbar/zodiac/Initials";
import Linked from "./components/navbar/zodiac/Linked";
import StarChild from "./components/navbar/zodiac/StarChild";
import WeddingRoutes from "./components/navbar/wedding/WeddingRoutes"
import BridalFavors from "./components/navbar/wedding/BridalFavors"
import BridalJewelery from "./components/navbar/wedding/BridalJewelery"
import Mangalsutra from "./components/navbar/wedding/Mangalsutra"
import ZariinBrides from "./components/navbar/wedding/ZariinBrides"
import Urja from  "./components/navbar/urja/Urja"
import Login from "./components/login-signup/Login"
import Signup from "./components/login-signup/Signup";
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

          <Route path="/newarrival" element={<NewArrival />} />

          <Route path="/alljewellery" element={<AllJewelleryRoute />}>
            <Route path="bestseller" element={<BestSeller />} />
            <Route path="bracelets" element={<Bracelets />} />
            <Route path="charms" element={<Charms />} />
            <Route path="earings" element={<Eearings />} />
            <Route path="hairaccessories" element={<HairAccessories />} />
            <Route path="nackles" element={<Nackles />} />
            <Route path="rings" element={<Rings />} />
          </Route>
          <Route path="/shopbystyle" element={<ShopByStyleRoutes />}>
            <Route path="curated-looks" element={<CuratedLooks />} />
            <Route path="layered-necklace" element={<LayeredNecklace />} />
            <Route
              path="contemporary-jewellery"
              element={<ContemporaryJewellery />}
            />
            <Route
              path="daily-wear-everyday-jewellery"
              element={<DailyWearEverydayJewellery />}
            />
            <Route
              path="celestial-jewellery"
              element={<CelestialJewellery />}
            />
            <Route
              path="modern-indian-jewelery"
              element={<ModernIndianJewelery />}
            />
            <Route
              path="traditional-earrings-for-women-girls"
              element={<TraditionalEarringsForWomenGirls />}
            />
            <Route path="polki-jewellery" element={<PolkiJewellery />} />
            <Route path="collections" element={<Collections />} />
          </Route>
          <Route path="/gifting" element={<GiftingRoutes />}>
            <Route path="gift-box" element={<GiftBox />} />
            <Route path="jewellery-setes" element={<JewellerySetes />} />
            <Route path="gift-for-baby" element={<GiftForBaby />} />
            <Route path="gift-for-him" element={<GiftForHim />} />
            <Route path="gift-for-mom" element={<GiftForMom />} />
            <Route path="gift-for-teens" element={<GiftForTeens />} />
            <Route path="valentins-gift" element={<ValentinsGift />} />
          </Route>
          <Route path="/zodiac" element={<ZodiacRoutes />}>
            <Route path="chakras" element={<Chakras />} />
            <Route path="healing" element={<Healing />} />
            <Route path="initials" element={<Initials />} />
            <Route path="linked" element={<Linked />} />
            <Route path="star-child" element={<StarChild />} />
          </Route>
          <Route path="/wedding" element={<WeddingRoutes />}>
            <Route path="bridal-favors" element={<BridalFavors />} />
            <Route path="bridal-jewelery" element={<BridalJewelery />} />
            <Route path="mangalsutra" element={<Mangalsutra />} />
            <Route path="zariin-brides" element={<ZariinBrides />} />
           
          </Route>
          <Route path="/wedding" element={<WeddingRoutes />}>
            <Route path="bridal-favors" element={<BridalFavors />} />
            <Route path="bridal-jewelery" element={<BridalJewelery />} />
            <Route path="mangalsutra" element={<Mangalsutra />} />
            <Route path="zariin-brides" element={<ZariinBrides />} />
           
          </Route>
          <Route path="/urja" element={<Urja/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
