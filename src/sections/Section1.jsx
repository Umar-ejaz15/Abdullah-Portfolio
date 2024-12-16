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
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="w-full h-full flex flex-col justify-between relative bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white">
          <Tilt
            className="absolute inset-0 w-full h-full z-10 md:block hidden"
            options={defaultOptions}
          >
            <TiltText />
          </Tilt>
          <div className="md:hidden block absolute inset-0 w-full h-full z-10">
            <TiltText />
          </div>
          <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 md:px-0 md:w-auto">
            <Page1Bottom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;