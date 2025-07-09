import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner2 = ({ banners }) => {
  const homepage5small = banners.filter(
    (b) => b.position === "Homepage 5 small"
  );
  const homepage5big = banners.filter((b) => b.position === "Homepage 5 big");
  return (
    <div className="mt-6">
      {homepage5big.map((item) => (
        <Link key={item._id} to={item.link}>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            className="w-full h-auto max-md:hidden"
            src={item.image.url}
            alt={item.title}
          />
        </Link>
      ))}
      {homepage5small.map((item) => (
        <Link key={item._id} to={item.link}>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            className="w-full h-auto  md:hidden"
            src={item.image.url}
            alt={item.title}
          />
        </Link>
      ))}
    </div>
  );
};

export default Banner2;
