import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col md:flex-row justify-between relative overflow-hidden bg-gradient-to-br from-black to-zinc-900"
    >
      {/* Left Hero Text */}
      <div className="z-10 w-full md:w-2/3 h-full flex flex-col justify-center items-start px-10 py-20 md:pl-32">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="uppercase text-zinc-200 font-bold font-[anzo3] text-[80px] sm:text-[90px] md:text-[110px] lg:text-[130px] leading-none hover:text-white transition-all duration-300"
        >
          I'm a Dark
        </motion.h1>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          className="uppercase font-[anzo3] text-[80px] sm:text-[90px] md:text-[110px] lg:text-[130px] leading-none text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white hover:scale-105 transition-all duration-300"
        >
          Mode Designer
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-lg text-zinc-400 font-[anzo4] text-base sm:text-lg md:text-xl leading-relaxed hover:text-white transition-all duration-300"
        >
          Crafting bold and immersive digital experiences with a touch of dark elegance.
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
          transition={{ duration: 1.2, delay: 0.7, type: "spring", stiffness: 100, bounce: 0.2 }}
          className="opacity-90 h-full w-full object-cover object-top hover:opacity-100 transition-all duration-300 filter drop-shadow-2xl"
          src="/model.png"
          alt="Dark Mode Designer"
        />
      </motion.div>
    </motion.div>
  );
};

export default Section1;