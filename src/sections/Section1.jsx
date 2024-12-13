import React from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { Tilt } from "react-tilt";

const Section1 = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const img =
    "/black-abstract-background-with-various-corner-layers-vector.jpg";
  return (
    <div className="w-full h-screen  bg-white px-6 py-4 ">
      <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative object-cover object-center bg-cover bg-black text-white rounded-3xl ">
        <Tilt className="w-full" options={defaultOptions}>
          <TiltText />
        </Tilt>
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Section1;
