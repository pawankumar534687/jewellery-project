import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner3 = ({ banners }) => {
  const homepage6small = banners.filter(
    (b) => b.position === "Homepage 6 small"
  );
  const homepage6big = banners.filter((b) => b.position === "Homepage 6 big");
  const homepage7big = banners.filter((b) => b.position === "Homepage 7");

  return (
    <div>
      <div>
        {homepage6big.map((item) => (
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
        {homepage6small.map((item) => (
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
      <div>
        {homepage7big.map((item)=>(
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
            className="w-full h-auto "
            src={item.image.url}
            alt={item.title}
          />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Banner3;
