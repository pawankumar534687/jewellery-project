import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const ShopByCategory = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold flex justify-center p-12 items-center">
        Shop By Categories
      </h1>
      <div className="grid max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-6 lg:grid-cols-6 items-center my-4  mx-auto w-fit gap-6">
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}      className="rounded-md" src="earrings.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">Earrings</div>
          </div>
        </Link>
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}     className="rounded-md" src="necklace.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">
              Necklaces
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}     className="rounded-md" src="bracelet.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">
              Bracelets
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}     className="rounded-md" src="ring.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">
              Rings
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}     className="rounded-md" src="headgear.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">
              Head Jewellery
            </div>
          </div>
        </Link>
        <Link>
          <div>
            <motion.img   initial={{ opacity: 0, y: 50 }}        
      whileInView={{ opacity: 1, y: 0 }}      
      transition={{ duration: 0.6 }}          
      whileHover={{ scale: 1.05 }}           
      viewport={{ once: true }}     className="rounded-md" src="healing2.webp" alt="" />
            <div className="items-center flex-col justify-center flex mt-2 text-sm font-semibold">
              Healing Jewelry
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ShopByCategory;
