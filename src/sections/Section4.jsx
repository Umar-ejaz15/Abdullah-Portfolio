import React from "react";

const Section4 = () => {
  return (
    <>
      <div className="w-full h-screen  bg-white px-6 py-4 mt-10 ">
        <div className="w-full  h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative object-cover object-center bg-cover bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white rounded-3xl ">
          <video
            autoPlay
            loop
            muted
            className=" absolute top-0 left-0  object-cover object-center"
            src="/moon.mp4"
          ></video>
          <div className="z-50 flex justify-cennter items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[25vw]">About</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
