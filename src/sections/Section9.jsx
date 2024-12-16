import React from "react";

const Section9 = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-10 relative object-cover object-center bg-cover bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          src="/bg2.mp4"
        ></video>
        <div className="flex flex-col gap-10">
          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              DESIGN TOOLS
            </h1>
            <p className="text-xl mt-4">Photoshop, Illustrator, InDesign, Figma, After Effects</p>
          </div>

          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              EXPERTISE
            </h1>
            <p className="text-xl mt-4">Logo Design, Print Design, Digital Marketing, Social Media Graphics, Web Design</p>
          </div>

          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              SPECIALTIES
            </h1>
            <p className="text-xl mt-4">Visual Branding, Package Design, Editorial Design, Advertising Graphics, Icon Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;