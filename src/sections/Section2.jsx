import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      gsap.from(".rotateText", {
        rotationX: 90,
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText",
          scrub: true,
          start: "top 50%",
          end: "bottom -150%",
        },
      });
    }
  });
  return (
    <>
      <div className="relative w-full h-auto">
        <h1 className="text-center  text-base sm:text-lg md:text-xl text-zinc-600 py-3 sm:py-4 md:py-5 uppercase">
          © Design Dynamo 2024 | design
        </h1>
        <div
          id="section1"
          className="w-full h-auto flex text-zinc-800 justify-center items-center flex-col px-4 sm:px-6 md:px-8"
        >
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              Impactfull
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              Design{" "}
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              Is the{" "}
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              Design
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              that
            </h1>
          </div>
          <div className="rotateText">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[17vw] font-[anzo1] leading-[14vw] sm:leading-[16vw] md:leading-[19vw] uppercase tracking-tighter">
              Works
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
