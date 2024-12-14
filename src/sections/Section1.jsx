import React from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { Tilt } from "react-tilt";

const Section1 = () => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  const img =
    "/black-abstract-background-with-various-corner-layers-vector.jpg";
  return (
    <div className="w-full h-screen  bg-white px-6 py-4 ">
      <div className="w-full  h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative object-cover object-center bg-cover bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white rounded-3xl ">
      <Tilt className=" absolute w-full h-screen top-0 left-0 " options={defaultOptions}>
          <TiltText />
        </Tilt>
        <div className=" absolute bottom-10">

        <Page1Bottom />
        </div>
      </div>
    </div>
  );
};

export default Section1;
