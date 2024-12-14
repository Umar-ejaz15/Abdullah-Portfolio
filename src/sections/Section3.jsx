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
        
      </div>
    </div>
  );
};

export default Section3;