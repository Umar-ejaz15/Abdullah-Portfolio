import React from "react";

const SectionLast = () => {
  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center relative">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
            src="/what i do.avif"
            alt="background"
          />
          <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center text-white">
            <div className="flex flex-col gap-8 lg:w-2/3">
              <div className="text-7xl lg:text-[8vw] font-[anzo1] uppercase tracking-tighter leading-none">
                <h1>Got an</h1>
                <h1>Idea?</h1>
              </div>
              <div className="max-w-2xl">
                <p className="text-xl font-[anzo2] uppercase">
                  Let's transform your vision into reality. Get in touch for innovative solutions.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/3 bg-black/30 p-8 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-[anzo1] mb-4">Contact Us</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-[anzo2] text-gray-300">Phone</p>
                  <a href="tel:+923076706748" className="text-xl hover:text-blue-400 transition-colors">
                    +92 307 6706748
                  </a>
                </div>
                <div>
                  <p className="font-[anzo2] text-gray-300">Location</p>
                  <p className="text-xl">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLast;