import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import React from "react";

const Section7 = () => {
  gsap.registerPlugin(ScrollToPlugin);
  useGSAP(function () {
    gsap.to(".img1", {
      rotation: 90,
      duration: 2,
      // opacity: 0,
      ease: "power2.out",
      stagger: 1,
      scrollTrigger: {
        trigger: ".img1",
        // markers: true,
        scrub: true,
        start: "top 20%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse"
      },
    });
  });
  return (
    <div className="w-full h-auto bg-white px-6 py-4">
      <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative bg-black text-white rounded-3xl">
        <img
          className="img1 absolute top-0 left-0 w-full h-full object-cover object-center opacity-30"
          src="/triangle.avif"
          alt="background pattern"
        />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[10vw] leading-none font-[anzo1] tracking-tighter">
              HOW
            </h1>
            <h1 className="text-[10vw] leading-none font-[anzo1] tracking-tighter">
              CAN
            </h1>
          </div>
          <div>
            <h1 className="text-[10vw] leading-none font-[anzo1] tracking-tighter">
              I HELP
            </h1>
            <h1 className="text-[10vw] leading-none font-[anzo1] tracking-tighter">
              YOU
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-12 relative z-10 font-[anzo2]  ">
          <div className="flex-1 p-6  rounded-xl hover:bg-white/10 transition-all duration-300">
            <p className="text-sm leading-relaxed font-light">
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses.
            </p>
          </div>
          <div className="flex-1 p-6  rounded-xl hover:bg-white/10 transition-all duration-300">
            <p className="text-sm leading-relaxed font-light">
              With a background in strategic marketing and acknowledged
              expertise in web development, I aim to minimize my client's
              resources spent on macro and micro-management, marketing research,
              and hiring a whole team of a larger agency.
            </p>
          </div>
          <div className="flex-1 p-6  rounded-xl hover:bg-white/10 transition-all duration-300">
            <p className="text-sm leading-relaxed font-light">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance, defining their identity, and
              engaging customers through captivating black-and-white aesthetics
              with a modern, luxurious, and minimalistic touch.
            </p>
          </div>
        </div>{" "}
        <h1 className="font-[anzo1] text-sm">
          GOT A PROJECT? THEN PLEASE CONTACT ME
        </h1>
      </div>
    </div>
  );
};

export default Section7;
