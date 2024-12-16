import React from "react";

const Section10 = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-10 relative object-cover object-center bg-cover bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src="/bg.mp4"
        ></video>
        <div className="flex flex-col gap-10">
          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              PERSONAL
            </h1>
            <p className="text-xl mt-4">Intuition, Imagination, Discipline, Visual Communication</p>
          </div>
          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              PROFESSIONAL
            </h1>
            <p className="text-xl mt-4">Adobe Creative Suite, UI/UX Design, Typography, Color Theory, Layout Design</p>
          </div>
          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              ADDITIONAL
            </h1>
            <p className="text-xl mt-4">Motion Graphics, 3D Design, Digital Illustration, AI Tools, Brand Identity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;