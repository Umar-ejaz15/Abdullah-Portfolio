import React from "react";

const Section10 = () => {
  return (
    <div className="w-full h-auto  bg-white px-6 py-4 mt-10 ">
      <div className="w-full  h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative object-cover object-center bg-cover bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white rounded-3xl ">
        <video
          autoPlay
          loop
          muted
          className=" absolute top-0 left-0  object-cover object-center"
          src="/bg.mp4"
        ></video>
        <div className="flex flex-col gap-10">
          <div className="z-50 flex flex-col leading-none  justify-cennter items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[10vw]">
              PERSONAL
            </h1>
            <p>Honesty, Communication, Punctuality</p>
          </div>
          <div className="z-50 flex flex-col leading-none justify-cennter items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[10vw]">
              PROFESSIONAL
            </h1>
            <p>Photoshop, Wix Studio, Figma</p>
          </div>
          <div className="z-50 flex flex-col leading-none justify-cennter items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[10vw]">
              ADDITIONAL
            </h1>
            <p>Business Development, Branding, SEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section10;
