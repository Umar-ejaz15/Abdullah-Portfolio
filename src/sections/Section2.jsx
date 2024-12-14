import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Section2 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText", {
      rotationX: 90,
      duration: 2,
      opacity: 0,
      ease: "power2.out",
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        markers: true,
        scrub: true,
        start: "top 50%",
        end: "bottom -200%",
        // toggleActions: "play none none reverse"
      },
    });
  });
  return (
    <div>
      <h1 className="text-center text-xl text-zinc-600 py-5 uppercase">
        © Design Dynamo 2024 | design
      </h1>
      <div id="section1" className="flex justify-center items-center flex-col ">
        <div className="rotateText">
          <h1 className="text-[17vw]  font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            Impactfull
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            Design{" "}
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            Is the{" "}
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            Design
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            that
          </h1>
        </div>
        <div className="rotateText">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            Works
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section2;