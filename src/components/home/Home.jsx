import React, { useState, useEffect } from "react";
import Hero from "../hero/Hero";
import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import ShopByCategory from "../shopbycategory/ShopByCategory";
import Banner3 from "../banner/Banner3";
import AllData from "../alldata/AllData";
import axios from "axios";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  const getallbanner = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://jewellery-backend-km3b.onrender.com/api/getallbanner"
      );
      setBanners(response.data.filter((b) => b.isActive));
       setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    getallbanner();
  }, []);

  return (
    <div>
      {loading && (
        <p style={{ textAlign: "center", color: "gray", fontSize: "14px" }}>
          Website may load slowly due to free hosting...
        </p>
      )}
      <Hero banners={banners} />
      <AllData />
      <Banner banners={banners} />
      <Banner2 banners={banners} />
      <ShopByCategory />
      <Banner3 banners={banners} />
    </div>
  );
};

export default Home;
