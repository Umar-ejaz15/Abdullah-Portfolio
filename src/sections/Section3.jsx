import React from "react";
import Brands from "../components/Brands";
import Tv from "../components/Tv";

const Section3 = () => {
  return (
    <div className="flex flex-col  items-center">
      <Brands />
      <div className="py-5 md:py-10 w-full flex flex-col items-center justify-center">
        <div className="w-2/3 h-[1px] bg-black/40  "></div>
      </div>
    </div>
  );
};

export default Section3;
