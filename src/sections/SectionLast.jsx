import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";
import { motion } from "framer-motion";

const SectionLast = () => {
  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden text-white">
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

      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 sm:px-16">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[9vw] font-[anzo1] uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-400 to-purple-400 drop-shadow-[0_0_25px_rgb(255,0,255)]"
          >
            Transform Your Vision Into Reality
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 max-w-3xl text-lg md:text-xl text-zinc-300"
          >
            Let’s create something extraordinary together. With innovative solutions and creative direction, we’ll turn your ideas into impactful digital experiences.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-6xl">
          {/* Contact Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 hover:border-white/40 transition-all"
          >
            <h2 className="text-2xl sm:text-3xl font-[anzo1] mb-6">Let’s Connect</h2>
            <div className="flex flex-col gap-6">
              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Phone</p>
                <a href="tel:+923076706748" className="flex items-center gap-3 text-xl sm:text-2xl hover:text-blue-400 transition-colors">
                  <FaPhone /> +92 307 6706748
                </a>
              </div>
              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Email</p>
                <a href="mailto:official.ahmedabdullah@gmail.com" className="flex items-center gap-3 text-xl sm:text-2xl hover:text-blue-400 transition-colors break-all">
                  <FaEnvelope /> official.ahmedabdullah@gmail.com
                </a>
              </div>
              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Location</p>
                <p className="flex items-center gap-3 text-xl sm:text-2xl">
                  <FaGlobeAmericas /> Available Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6 lg:w-1/2 items-center justify-center"
          >
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/designd_ynamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-pink-500 transition-all duration-300"
              >
                <FaInstagram className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmedabdullahdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionLast;
