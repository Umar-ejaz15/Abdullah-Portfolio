import React from "react";
import { FaLightbulb, FaCode, FaHandshake, FaRocket, FaPalette, FaGlobe } from "react-icons/fa";

const Section9 = () => {
  return (
    <div className="w-full h-auto bg-white">
      <div className="w-full h-full overflow-hidden flex flex-col justify-between py-20 px-6 md:px-10 relative bg-gradient-to-r from-black via-zinc-950 to-zinc-800 text-white">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-40"
          src="/bg2.mp4"
        ></video>

        <div className="flex flex-col gap-12 relative z-10">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-zinc-200 font-[anzo1] uppercase tracking-tighter text-[9vw] md:text-[7vw] lg:text-[6vw]">
              Why Choose Me
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-300 max-w-3xl">
              Not just a developer, not just a designer — I’m your creative partner 🚀  
              Here’s why clients love working with me:
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <FaLightbulb className="text-4xl text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3">Creative Vision</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                I blend design and code to craft digital experiences that are both beautiful and functional.
              </p>
            </div>

           

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <FaHandshake className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3">Reliable Partner</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                Clear communication, on-time delivery, and long-term support you can trust.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <FaRocket className="text-4xl text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3">Results-Driven</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                I focus on impact — building designs & websites that actually get results.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <FaPalette className="text-4xl text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3">Versatile Creativity</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                From logos to web apps, I adapt styles to fit your unique brand identity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <FaGlobe className="text-4xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-3">Modern Tech</h3>
              <p className="text-zinc-300 text-base leading-relaxed">
                Using the latest frameworks & tools, I ensure your brand stays ahead of the curve.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="font-[anzo1] text-xl md:text-2xl text-zinc-100 hover:text-gray-300 transition-colors duration-300 cursor-pointer inline-block border-b-2 border-transparent hover:border-white/50">
              Let’s build something extraordinary together →
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
