import React from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { Tilt } from "react-tilt";

const Section1 = () => {
  const defaultOptions = {
    reverse: false,
    max: 25,
    perspective: 1000,
    scale: 1.01,
    speed: 800,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="w-full h-[95vh] relative overflow-hidden">
      {/* <div className=" absolute top-0 left-0 w-full h-full z-10 "> 
        <img
        className="w-full h-full"
          src=""
          alt=""
        />
      </div> */}
      <div
        id="bg1"
        className="w-full  h-full flex flex-col justify-between relative text-white"
      >
        <Tilt
          className="absolute inset-0 w-full h-[70%] z-10 md:block hidden"
          options={defaultOptions}
        >
          <TiltText />
        </Tilt>
        <div className="md:hidden block absolute inset-0 w-full h-[70%] z-10">
          <TiltText />
        </div>
        <div className="absolute  bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-full px-2 md:px-0 md:w-auto">
          <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Section1;
