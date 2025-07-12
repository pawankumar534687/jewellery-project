import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login-signup/Login";
import Signup from "./components/login-signup/Signup";
import Footer from "./components/footer/Footer";
import MyCart from "./components/mycart/MyCart";
import UserProfile from "./components/profile/UserProfile";
import ProductFrom from "./components/productfrom/ProductFrom";
import Deatailed from "./components/deatailedproduct/Deatailed";
import Profile from "./components/profile/Profile";
import About from "./components/aboutus/About";
import ContactUs from "./components/contactus/ContactUs";
import Terms_and_Conditions from "./components/terms_and_conditions/Terms_and_Conditions";
import PrivacyPolicy from "./components/privacypolicy/PrivacyPolicy";
import WishList from "./components/wishlist/WishList";
import ProtectedRoute from "./components/protectedroute/ProtectedRoute";
import JewellerySubCategory from "./components/jewellerycategory/JewellerySubCategory"
import ForgotPassword from "./components/login-signup/ForgotPassword";
import ResetPassword from "./components/login-signup/ResetPassword";
import Searchs from "./components/Searchs";
import MyCart2 from "./components/mycart/MyCart2";
import CheckOut from "./components/checkout/CheckOut";
import OrderDeatails from "./components/myorders/OrderDeatails";


function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <div>
        <Navbar show={() => setShowCart(true)} />
        {showCart && (
          <MyCart
            onRemove={() => {
              setShowCart(false);
            }}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/jewellery/:subcategory"
            element={<JewellerySubCategory />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/userprofile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route path="/productfrom" element={<ProductFrom />} />
          <Route path="/product/detaildProduct/:id" element={<Deatailed />} />
          <Route
            path="/editprofile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/term-conditions" element={<Terms_and_Conditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <WishList />
              </ProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/searchs" element={<Searchs />} />
          <Route path="/detailedmycart" element={<MyCart2 />} />
          <Route path="/checkout" element={<CheckOut />} />
         
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
// https://delhi-book-store.vercel.app/pages/userprofile
