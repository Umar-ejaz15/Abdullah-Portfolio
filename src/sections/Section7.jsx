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
      transformOrigin: "center center",
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
    <div className="w-full h-screen bg-white">
      <div className="w-full h-screen overflow-hidden flex flex-col justify-between py-6 md:py-12 px-4 md:px-16 relative bg-black text-white">
        <img
          className="img1 absolute w-[90%] md:w-[80%] h-[90%] md:h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70"
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
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Graphic Design Mastery</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              Specializing in comprehensive graphic design solutions including brand identity, 
              logo design, marketing materials, social media graphics, and print design. 
              With expertise in Adobe Creative Suite and years of experience creating 
              visually striking designs that capture brand essence and engage target audiences.
            </p>
          </div>
          <div className="flex-1 p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:transform hover:scale-105">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Web Development Skills</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              Proficient in modern web development technologies including HTML5, CSS3, 
              JavaScript, and popular frameworks like React. Creating responsive, 
              user-friendly websites with clean code and optimal performance. 
              Experienced in building both static and dynamic web applications 
              that deliver exceptional user experiences.
            </p>
          </div>
          <div className="flex-1 p-4 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:transform hover:scale-105">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Creative Solutions</h3>
            <p className="text-xs md:text-sm leading-relaxed font-light">
              Combining graphic design expertise with web development skills to deliver 
              complete digital solutions. From concept to execution, I create cohesive 
              brand experiences across all platforms. Specializing in modern, clean designs 
              that effectively communicate your message while ensuring technical excellence 
              in implementation.
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