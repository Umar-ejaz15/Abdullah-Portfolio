import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="w-full min-h-screen  bg-white px-6 relative flex items-center justify-center">
        <div className="w-full h-auto overflow-hidden flex flex-col justify-center items-center gap-8 text-white rounded-3xl">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            src="/moon.mp4"
          ></video>
          <div className="z-50 flex flex-col items-center justify-center max-w-4xl mx-auto px-4">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[16vw] md:text-[12vw] lg:text-[10vw] mb-6">
              About
            </h1>
            <p className="text-zinc-300 text-center text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl">
              Welcome to our cosmic journey. We are passionate about creating extraordinary digital experiences that push the boundaries of innovation and creativity. Our mission is to transform ideas into reality through cutting-edge technology and artistic vision.
            </p>
            <p className="text-zinc-100 text-center text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
              With years of experience and a dedicated team of experts, we bring your digital dreams to life with precision, creativity, and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;