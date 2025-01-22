import React from "react";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import Section4 from "../sections/Section4";
import Section5 from "../sections/Section5";
import Section6 from "../sections/Section6";
import Section7 from "../sections/Section7";
import Section8 from "../sections/Section8";
import Section9 from "../sections/Section9";
import Section10 from "../sections/Section10";
import Section11 from "../sections/Section11";
import SectionLast from "../sections/SectionLast";
import Gallary from "../sections/Gallary";

import LocomotiveScroll from "locomotive-scroll";
const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="flex flex-col gap-1">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section6 />
        <Section4 />
        <Section7 />
        <Gallary />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />

        <SectionLast />
      </div>
    </>
  );
};

export default Page1;
