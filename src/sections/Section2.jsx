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
        duration: 2.5,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.8,
        scrollTrigger: {
          trigger: ".rotateText",
          scrub: true,
          start: "top 60%",
          end: "bottom -120%",
        },
      });
    }
  });
  return (
    <>
      <div className="relative w-full mt-0 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-950 to-zinc-900">
        <h1 className="text-center text-base sm:text-lg md:text-xl text-zinc-400 py-3 sm:py-4 md:py-5 font-light tracking-widest">
          © DESIGN DYNAMO 2024 | DESIGN
        </h1>
        <div
          id="section1"
          className="w-full h-auto flex text-zinc-100 justify-center items-center flex-col px-4 sm:px-6 md:px-8"
        >
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              Impactful
            </h1>
          </div>
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              Design
            </h1>
          </div>
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              Is the
            </h1>
          </div>
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              Design
            </h1>
          </div>
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              that
            </h1>
          </div>
          <div className="rotateText mix-blend-difference">
            <h1 className="text-[12vw] sm:text-[14vw] md:text-[16vw] font-bold leading-[14vw] sm:leading-[16vw] md:leading-[18vw] uppercase tracking-[-0.08em] bg-gradient-to-b from-white to-zinc-300 text-transparent bg-clip-text">
              Works
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;