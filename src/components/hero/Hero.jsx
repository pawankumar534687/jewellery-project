import React from "react";
import { Link } from "react-router-dom";
const Hero = ({ banners }) => {
  const homepage1small = banners.filter(
    (b) => b.position === "Homepage 1 small"
  );
  const homepage1big = banners.filter((b) => b.position === "Homepage 1 big");

  return (
    <div className="mt-14">
      {homepage1big.map((item) => (
        <Link key={item._id} to={item.link}>
          <img
            className="w-full h-auto  max-md:hidden"
            src={item.image.url}
            alt={item.title}
          />
        </Link>
      ))}
      {homepage1small.map((item) => (
        <Link key={item._id} to={item.link}>
          <img
            className="w-full h-auto  md:hidden"
            src={item.image.url}
            alt={item.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Hero;
