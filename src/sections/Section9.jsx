import React from "react";
import { FaLightbulb, FaCode, FaHandshake, FaRocket, FaPalette, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Section9 = () => {
  return (
    <div className="w-full h-auto bg-black relative overflow-hidden text-white py-20 px-6 md:px-10">
      {/* Floating Gradient Balls */}
      <motion.div
        className="absolute w-48 h-48 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 top-10 left-10"
        animate={{ x: ["0%", "5%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-green-400 via-teal-400 to-cyan-400 bottom-20 right-20"
        animate={{ x: ["0%", "-5%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-zinc-200 font-[anzo1] uppercase tracking-tighter text-[9vw] md:text-[7vw] lg:text-[6vw] drop-shadow-[0_0_20px_rgb(255,255,255)]">
            Why Choose Me
          </h1>
          <p className="mt-4 text-lg md:text-xl text-zinc-300 max-w-3xl">
            Not just a developer, not just a designer — I’m your creative partner 🚀  
            Here’s why clients love working with me:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: FaLightbulb, title: "Creative Vision", desc: "I blend design and code to craft digital experiences that are both beautiful and functional.", color: "text-yellow-400" },
           
            { icon: FaHandshake, title: "Reliable Partner", desc: "Clear communication, on-time delivery, and long-term support you can trust.", color: "text-blue-400" },
            { icon: FaRocket, title: "Results-Driven", desc: "I focus on impact — building designs & websites that actually get results.", color: "text-pink-500" },
            { icon: FaPalette, title: "Versatile Creativity", desc: "From logos to web apps, I adapt styles to fit your unique brand identity.", color: "text-purple-400" },
            { icon: FaGlobe, title: "Modern Tech", desc: "Using the latest frameworks & tools, I ensure your brand stays ahead of the curve.", color: "text-cyan-400" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <item.icon className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${item.color}`} />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-300 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="font-[anzo1] text-xl md:text-2xl text-zinc-100 hover:text-gray-300 transition-colors duration-300 cursor-pointer inline-block border-b-2 border-transparent hover:border-white/50">
            Let’s build something extraordinary together →
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Section9;
