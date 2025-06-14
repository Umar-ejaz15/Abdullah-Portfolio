import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full min-h-screen flex flex-col md:flex-row justify-between relative overflow-hidden bg-gradient-to-br mb-0 from-black to-zinc-800"
    >
      <div className="left z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start px-10 py-20 md:pl-32 bg-gradient-to-r from-transparent via-zinc-900/30 to-transparent">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="uppercase text-zinc-200 font-bold font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none hover:text-white transition-all duration-300"
        >
          I'm a Dark
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          id="stroke"
          className="uppercase font-dark font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none text-zinc-200 hover:scale-105 transition-all duration-300"
        >
          <span className="hover:text-white">Mode</span>
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
          id="stroke"
          className="uppercase font-dark font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-none text-zinc-200 hover:scale-105 transition-all duration-300"
        >
          <span className="hover:text-white">Designer</span>
        </motion.h1>
        <motion.h1 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
          className="uppercase mt-1 md:ml-72 font-dark font-[anzo4] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-200 hover:text-white transition-all duration-300"
        >
          to Hire
        </motion.h1>
      </div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-0 sm:w-1/6 h-full bg-gradient-to-t from-zinc-800 via-zinc-900 to-black absolute right-0 rounded-l-3xl backdrop-blur-sm"
      ></motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          backgroundImage: "url('/EFFECT.png')",
          boxShadow: "0 0 40px rgba(0, 0, 0, 0.3)"
        }}
        className="hidden z-10 md:flex right w-full sm:w-2/3 md:w-1/3 lg:w-1/4 px-6 sm:px-8 md:px-10 lg:pr-12 welcome-container bg-no-repeat bg-cover p-6 sm:p-8 md:p-10 lg:p-12 flex-col justify-center items-start relative h-[90%] self-center rounded-xl backdrop-blur-sm bg-gradient-to-br from-black/80 via-zinc-900/80 to-black/80"
      >
        <div className="max-w-xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            className="font-[anzo3] text-zinc-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 hover:text-white transition-all duration-300"
          >
            Welcome
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="font-[anzo4] text-zinc-200 text-base sm:text-sm mb-4 sm:mb-6 leading-relaxed hover:text-white transition-all duration-300 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent p-2"
          >
            I'm thrilled you've docked here. I'm Ahmad Abdullah, and I'm
            passionate about helping individuals and businesses
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
            className="font-[anzo4] text-zinc-200 text-base sm:text-sm leading-relaxed mb-6 sm:mb-8 hover:text-white transition-all duration-300 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent p-2"
          >
            like yours communicate effectively through thoughtful and visually
            engaging design. Let's explore how I can help you.
          </motion.p>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-zinc-200 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent text-zinc-200 hover:bg-zinc-200 hover:text-black font-[anzo4] text-sm sm:text-md px-10 sm:px-12 py-3 sm:py-5 rounded-full transition-all duration-300"
          >
            Discover
          </motion.button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute w-full bottom-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 h-full flex items-center justify-center"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.7,
            type: "spring",
            stiffness: 100,
            bounce: 0.2
          }}
          className="opacity-90 h-3/4 md:w-full md:h-full absolute w-full bottom-0 object-cover object-top hover:opacity-100 transition-all duration-300 filter drop-shadow-2xl"
          src="/model.png"
          alt="Ahmad Abdullah"
        />
      </motion.div>
    </motion.div>
  );
};

export default Section1;