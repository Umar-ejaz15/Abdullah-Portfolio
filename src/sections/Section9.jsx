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
          <div className="z-10 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              WEB DEVELOPMENT
            </h1>
            <p className="text-xl mt-4">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Node.js</p>
          </div>

          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              GRAPHIC DESIGN
            </h1>
            <p className="text-xl mt-4">Logo Design, Brand Identity, UI/UX Design, Social Media Graphics, Print Design</p>
          </div>

          <div className="z-50 flex flex-col leading-none justify-center items-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase text-center tracking-tighter text-[8vw]">
              TOOLS & SOFTWARE
            </h1>
            <p className="text-xl mt-4">VS Code, Git, Figma, Adobe Photoshop, Adobe Illustrator, Adobe XD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;