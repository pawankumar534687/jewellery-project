import React from "react";

const ReachUs = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src="/bird.webp" alt="" />
        <h1 className="text-2xl font-semibold m-8">REACH US</h1>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1>info@zariin.com</h1>
        <h1>+91 9717761833</h1>
        <h1>MON - SAT | 10:00 AM - 6:00 PM (IST)</h1>
        <h1>C-18, 2nd Floor, Vasant Vihar, Block C, New Delhi - 110057</h1>
      </div>
     <div className="flex flex-col justify-center items-center">
        <img className="m-16" src="/heart.webp" alt="" />
        <h1>
          Heirlooms Jewellery | Tattva Elements Jewellery | Shiny Disco Balls |
          Healing Crystal Jewellery | Chakra Jewellery | Photo Locket |
        </h1>
        <h1>
          Birthstone Jewelry | Bridal Jewellery | Mangalsutra Jewellery |
          Jewellery Gift Boxes | Gifts For Baby | Gifts For Mom | Gift for Teens
        </h1>
      </div>
     <div className="flex flex-col justify-center items-center">
        <img className="m-12" src="/zariin-logo.webp" alt="" />
        <h1>All Rights Reserved © Copyright 2024</h1>
      </div>
    </div>
  );
};

export default ReachUs;
