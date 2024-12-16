import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      gsap.from(".rotateText1", {
        rotationX: 90,
        duration: 2,
        opacity: 0,
        ease: "power2.out",
        stagger: 1,
        scrollTrigger: {
          trigger: ".rotateText1",
          // markers: true,
          scrub: true,
          start: "top 50%",
          end: "bottom -150%",
          // toggleActions: "play none none reverse"
        },
      });
    }
  });
  return (
    <div>
      <div id="section1" className="flex text-zic-800 justify-center items-center flex-col ">
        <div className="rotateText1">
          <h1 className="text-[17vw]  font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            HELPING
          </h1>
        </div>
        <div className="rotateText1">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            MY
          </h1>
        </div>
        <div className="rotateText1">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            CLIENTS
          </h1>
        </div>
        <div className="rotateText1">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            TO ACHIEVE
          </h1>
        </div>
        <div className="rotateText1">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            THEIR
          </h1>
        </div>
        <div className="rotateText1">
          <h1 className="text-[17vw] font-[anzo1] leading-[19vw] uppercase  tracking-tighter">
            DREAMS!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section6;