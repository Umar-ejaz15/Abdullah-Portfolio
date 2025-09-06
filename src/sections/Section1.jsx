import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col md:flex-row justify-between relative overflow-hidden bg-black"
    >
      {/* Gradient Balls */}
      <motion.div
        className="absolute w-40 h-40 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 shadow-2xl bottom-10 left-10"
        animate={{
          scale: [1, 1.3, 1], // increase 1.3 to make pulse bigger
          opacity: [0.5, 0.8, 0.5], // optional: pulse opacity
        }}
        transition={{
          repeat: Infinity,
          duration: 2, // slower = more dramatic, faster = quick pulse
          ease: "easeInOut",
        }}
      />

      <motion.div
      
        className="absolute w-60 h-60 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 shadow-2xl top-20 right-10 animate-pulse"
         animate={{
          scale: [1, 1.3, 1], // increase 1.3 to make pulse bigger
          opacity: [0.5, 0.8, 0.5], // optional: pulse opacity
        }}
        transition={{
          repeat: Infinity,
          duration: 2, // slower = more dramatic, faster = quick pulse
          ease: "easeInOut",
        }}
        
      />
      <motion.div
        className="absolute w-36 h-36 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-green-400 via-teal-400 to-cyan-400 shadow-2xl top-1/2 left-1/3 animate-pulse"
          animate={{
          scale: [1, 1.3, 1], // increase 1.3 to make pulse bigger
          opacity: [0.5, 0.8, 0.5], // optional: pulse opacity
        }}
        transition={{
          repeat: Infinity,
          duration: 2, // slower = more dramatic, faster = quick pulse
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-52 h-52 rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl bottom-20 right-1/4 animate-pulse"
         animate={{
          scale: [1, 1.3, 1], // increase 1.3 to make pulse bigger
          opacity: [0.5, 0.8, 0.5], // optional: pulse opacity
        }}
        transition={{
          repeat: Infinity,
          duration: 2, // slower = more dramatic, faster = quick pulse
          ease: "easeInOut",
        }}
      />

      {/* Hero Text */}
      <div className="z-10 w-full md:w-2/3 h-full flex flex-col justify-center items-start px-10 py-20 md:pl-32">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          className="uppercase text-white font-bold font-[anzo3] text-[80px] sm:text-[90px] md:text-[110px] lg:text-[130px] leading-none  transition-all duration-300 drop-shadow-[0_0_15px_rgb(255,255,255)]"
        >
          I'm a Dark
        </motion.h1>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
          className="uppercase font-[anzo3] text-[80px] sm:text-[90px] md:text-[110px] lg:text-[130px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white hover:scale-105 transition-all duration-300 drop-shadow-[0_0_25px_rgb(255,255,255)]"
        >
          Mode Designer
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-lg text-zinc-400 font-[anzo4] text-base sm:text-lg md:text-xl leading-relaxed hover:text-white transition-all duration-300"
        >
          Crafting bold and immersive digital experiences with a touch of dark
          elegance.
          <span className="text-pink-500 font-bold">
            {" "}
            Let’s make it unforgettable ✨
          </span>
        </motion.p>
      </div>

      {/* Background Model Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            type: "spring",
            stiffness: 100,
            bounce: 0.2,
          }}
          className="opacity-80 h-full w-full object-cover object-top hover:opacity-100 transition-all duration-300 filter drop-shadow-2xl"
          src="/model.png"
          alt="Dark Mode Designer"
        />
      </motion.div>
    </motion.div>
  );
};

export default Section1;
