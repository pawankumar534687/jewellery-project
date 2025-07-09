import React, {useState, useEffect} from "react";
import Hero from "../hero/Hero";
import Banner from "../banner/Banner";
import Banner2 from "../banner/Banner2";
import ShopByCategory from "../shopbycategory/ShopByCategory";
import Banner3 from "../banner/Banner3";
import AllData from "../alldata/AllData";
import axios from "axios";

const Home = () => {
  const [banners, setBanners] = useState([]);

  const getallbanner = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:8000/api/getallbanner",
     
    );
    setBanners(response.data.filter(b => b.isActive));
  };

  useEffect(() => {
    getallbanner();
  }, []);

  return (
    <div>
      <Hero  banners={banners} />
      <AllData />
      <Banner banners={banners} />
      <Banner2 banners={banners} />
      <ShopByCategory />
      <Banner3 banners={banners} />
    </div>
  );
};

export default Home;
