import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = ({ banners }) => {
  const homepagepart1 = banners.filter((b) => b.position === "Homepage 2(1)");
  const homepagepart2 = banners.filter((b) => b.position === "Homepage 2(2)");
  const homepage3small = banners.filter(
    (b) => b.position === "Homepage 3 small"
  );
  const homepage3big = banners.filter((b) => b.position === "Homepage 3 big");
  const homepage4small = banners.filter((b) => b.position === "Homepage 4 small");
  const homepage4big = banners.filter((b) => b.position === "Homepage 4 big");

  return (
    <div>
      <div className="flex max-lg:flex-col gap-6 m-12">
        {homepagepart1.map((item) => (
          <Link key={item._id} to={item.link} className="w-[50%] max-lg:w-full">
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
              src={item.image.url}
              alt={item.title}
            />
          </Link>
        ))}
        {homepagepart2.map((item) => (
          <Link key={item._id} to={item.link} className="w-[50%] max-lg:w-full">
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
              src={item.image.url}
              alt={item.title}
            />
          </Link>
        ))}
      </div>
      <div>
        {homepage3big.map((item) => (
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
        {homepage3small.map((item) => (
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
      <div className="mt-4">
        {homepage4big.map((item) => (
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
        {homepage4small.map((item) => (
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
    </div>
  );
};

export default Banner;
