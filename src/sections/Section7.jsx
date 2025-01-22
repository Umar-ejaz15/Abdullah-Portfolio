import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import React from "react";

const Section7 = () => {
  gsap.registerPlugin(ScrollToPlugin);
  useGSAP(function () {
    gsap.to(".img1", {
      rotation: 90,
      scale: 1.2,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      scrollTrigger: {
        trigger: ".img1",
        scrub: 1,
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause reverse pause"
      },
    });
  });
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-auto overflow-hidden flex flex-col justify-between py-6 md:py-12 px-4 md:px-16 relative bg-black text-white">
        <img
          className="img1 absolute w-[90%] md:w-[80%] h-[90%] md:h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70"
          src="/triangle.avif"
          alt="background pattern"
        />
        <div className="flex flex-col md:flex-row justify-between items-center z-10 gap-4 md:gap-0">
          <div className="hover:scale-105 flex gap-5 transition-transform duration-300">
            <h1 className="text-[12vw] md:text-[8vw] leading-none font-[anzo1] tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              HOW
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] leading-none font-[anzo1] tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              CAN
            </h1>
          </div>
          <div className="hover:scale-105 flex gap-5 transition-transform duration-300">
            <h1 className="text-[12vw] md:text-[8vw] leading-none font-[anzo1] tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              I HELP
            </h1>
            <h1 className="text-[12vw] md:text-[8vw] leading-none font-[anzo1] tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              YOU
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 mt-6 md:mt-12 relative z-10 font-[anzo2]">
          <div className="flex-1 p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:transform hover:scale-105">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Design Excellence</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses.
              With over 5 years of experience in crafting exceptional digital
              experiences.
            </p>
          </div>
          <div className="flex-1 p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:transform hover:scale-105">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Strategic Expertise</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              With a background in strategic marketing and acknowledged
              expertise in web development, I aim to minimize my client's
              resources spent on macro and micro-management, marketing research,
              and hiring a whole team of a larger agency. Offering comprehensive
              solutions that drive real business results.
            </p>
          </div>
          <div className="flex-1 p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:transform hover:scale-105">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Growth & Impact</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance, defining their identity, and
              engaging customers through captivating black-and-white aesthetics
              with a modern, luxurious, and minimalistic touch. Focused on
              creating lasting impressions that convert visitors into loyal
              customers.
            </p>
          </div>
        </div>
        <div className="mt-6 md:mt-12 text-center">
          <h1 className="font-[anzo1] text-base md:text-lg hover:text-gray-300 transition-colors duration-300 cursor-pointer inline-block border-b-2 border-transparent hover:border-white/50">
            GOT A PROJECT? THEN PLEASE CONTACT ME →
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section7;