import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div className="flex max-lg:flex-col gap-6 m-12">
        <Link   to="/collection/Jewellery" className="w-[50%] max-lg:w-full">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            className="w-full h-auto object-cover"
            src="/flat.webp"
            alt="ds"
          />
        </Link>
        <Link   to="/collection/Jewellery" className="w-[50%] max-lg:w-full">
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
            }}
            className="w-full h-auto object-cover"
            src="/flat2.webp"
            alt="dsa"
          />
        </Link>
      </div>
      <div>
        <Link  to="/collection/Jewellery">
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
            src="balance3.webp"
            alt=""
          />
        </Link>
        <Link to="/collection/Jewellery">
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
            src="balance.webp"
            alt=""
          />
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/collection/Jewellery">
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
            src="banner4.webp"
            alt=""
          />
        </Link>
        <Link to="/collection/Jewellery">
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
            src="heirloom.webp"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
