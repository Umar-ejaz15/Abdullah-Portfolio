import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-screen flex flex-col md:flex-row justify-between relative overflow-hidden bg-zinc-900"
    >
      <div className="left z-10 w-full md:w-1/2 h-full flex flex-col justify-center items-start px-10 py-20 md:pl-32">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
          className="uppercase text-[#dad7e8] font-bold font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-none"
        >
          I'm a Dark
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          id="stroke"
          className="uppercase font-dark font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-none text-transparent"
        >
          <span className="text-stroke-3 text-stroke-[#dad7e8]">Mode</span>
        </motion.h1>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
          id="stroke"
          className="uppercase font-dark font-[anzo3] text-[80px] sm:text-[80px] md:text-[100px] lg:text-[150px] leading-none text-transparent"
        >
          <span className="text-stroke-3 text-stroke-[#dad7e8]">Designer</span>
        </motion.h1>
        <motion.h1 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          className="uppercase mt-1 md:ml-96 font-dark font-[anzo4] text-xl sm:text-2xl md:text-3xl lg:text-5xl text-[#dad7e8]"
        >
          to Hire
        </motion.h1>
      </div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-0 sm:w-1/6 h-full bg-[#dad7e8]/10 absolute right-0 rounded-l-3xl"
      ></motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          backgroundImage: "url('/EFFECT.png')",
        }}
        className="hidden z-10 md:flex right w-full sm:w-2/3 md:w-1/3 lg:w-1/4 px-6 sm:px-8 md:px-10 lg:pr-12 welcome-container bg-no-repeat bg-cover p-6 sm:p-8 md:p-10 lg:p-12 flex-col justify-center items-start relative h-[90%] self-center"
      >
        <div className="max-w-xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
            className="font-[anzo3] text-[#dad7e8] text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6"
          >
            Welcome
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "spring", stiffness: 100 }}
            className="font-[anzo4] text-[#dad7e8] text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed"
          >
            I'm thrilled you've docked here. I'm Ahmad Abdullah, and I'm
            passionate about helping individuals and businesses
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 100 }}
            className="font-[anzo4] text-[#dad7e8] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8"
          >
            like yours communicate effectively through thoughtful and visually
            engaging design. Let's explore how I can help you.
          </motion.p>
          <motion.button 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto border-2 border-[#dad7e8] bg-transparent text-[#dad7e8] hover:bg-[#dad7e8] hover:text-[#2d2d2d] font-[anzo4] text-lg sm:text-xl px-10 sm:px-20 py-3 sm:py-5 rounded-full transition-all duration-300"
          >
            Discover
          </motion.button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute w-full  bottom-0 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 h-full flex items-center justify-center"      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.9 }}
          transition={{ 
            duration: 1, 
            delay: 0.7,
            type: "spring",
            stiffness: 100,
            bounce: 0
          }}
          className="opacity-90 h-3/4 md:w-full md:h-full absolute w-full  bottom-0  object-cover object-top"
          src="/model.png"
          alt="Ahmad Abdullah"
        />
      </motion.div>
    </motion.div>
  );
};

export default Section1;