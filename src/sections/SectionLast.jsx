import React from "react";

const SectionLast = () => {
  return (
    <>
      <div className="w-full h-screen bg-white px-6 py-4">
        <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-20 relative rounded-3xl">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/what i do.avif"
            alt="background"
          />
          <div className="relative z-10 flex text-white">
            <div className="flex flex-col gap-6 ">
              <div className="text-[10vw]  font-[anzo1] uppercase tracking-tighter leading-none">
                <h1>GOT AN</h1>
                <h1>IDEA</h1>
              </div>
              <div className="max-w-2xl">
                <p className="text-lg font-[anzo2] uppercase ">
                  IT IS NOT JUST ABOUT SOLVING THE PROBLEM BUT OFFERING THE
                  TRANSFORMATION!
                </p>
              </div>
            </div>
            <div className="mt-8 object-cover object-top mix-blend-lighten">
              I CAN COME TO WHEREVER YOU ARE. +92 307 6706748
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLast;
