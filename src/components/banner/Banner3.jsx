import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Banner3 = () => {
  return (
    <div>
      <div>
        <Link>
          <   motion.img initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="w-full h-auto max-md:hidden"
            src="men-chakra.webp"
            alt=""
          />
        </Link>
        <Link>
          <   motion.img initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="w-full h-auto  md:hidden"
            src="menchakra.webp"
            alt=""
          />
        </Link>
      </div>
      <div>
         <Link>
          <   motion.img initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            className="w-full h-auto "
            src="zariin.webp"
            alt=""
          />
        </Link>
       
      </div>
    </div>
  );
};

export default Banner3;
