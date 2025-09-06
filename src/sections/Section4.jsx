import React from "react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="w-full bg-black min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-900 px-6 py-20">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        src="/moon.mp4"
      ></video>

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-[anzo1] uppercase tracking-tighter text-white text-[14vw] md:text-[10vw] lg:text-[8vw] mb-6 drop-shadow-2xl"
        >
          About
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-zinc-200 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-6 backdrop-blur-sm bg-zinc-900/40 px-6 py-4 rounded-2xl shadow-lg"
        >
          We are dreamers, builders, and storytellers of the digital universe. Our passion lies in blending design and technology to craft experiences that feel alive, bold, and unforgettable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-zinc-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl backdrop-blur-sm bg-zinc-900/40 px-6 py-4 rounded-2xl shadow-lg"
        >
          With a dedicated team of innovators, we transform raw ideas into immersive realities. Every pixel, every line of code, and every interaction is fueled by creativity, precision, and purpose.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 border-2 border-white text-white px-10 py-4 rounded-full font-[anzo3] uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default Section4;