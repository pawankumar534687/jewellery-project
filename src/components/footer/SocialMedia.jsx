import React from "react";
import { Link } from "react-router-dom";
const SocialMedia = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h1 className="text-2xl">JOIN US ON SOCIALS</h1>
      <div className="flex mt-6 gap-4">
        <Link>
          <img className="w-10 h-10" src="/facebook.png" alt="sdf" />
        </Link>
        <Link>
          <img className="w-10 h-10" src="/twitter.png" alt="sdf" />
        </Link>
        <Link>
          <img className="w-10 h-10" src="/linkedin.png" alt="sdf" />
        </Link>
        <Link>
          <img className="w-10 h-10" src="/instagram.png" alt="sdf" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center m-20 ">
        <div>For Queries on your order, Checking order status or for Returns/</div>
        <div>Exchange Email at orders@zariin.com</div>
      </div>
    </div>
  );
};

export default SocialMedia;
