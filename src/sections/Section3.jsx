import React from "react";
import Brands from "../components/Brands";

const Section3 = () => {
  return (
    <div>
      <Brands />
      <div className="flex justify-center py-10">
        <div className="w-1/2 h-1 bg-black/20"></div>
      </div>
      <div className="flex relative justify-center items-center">
        <div className="w-1/2 h-1/2 overflow-hidden">
          <img className="py-10 w-full h-full overflow-hidden" src="/empty.avif" alt="placeholder" />
        </div>
        <video
          autoPlay
          loop
          muted
          className="py-10 absolute w-[665px] h-[500px] object-cover object-center top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
          src="/WhatsApp Video 2024-12-13 at 10.00.23 AM.mp4"
        ></video>
      </div>
    </div>
  );
};

export default Section3;