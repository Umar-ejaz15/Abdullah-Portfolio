import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <>
      <div className="w-full min-h-screen relative py-12 md:py-6 flex justify-center items-center px-3 bg-zinc-950">
        <div className="w-full h-full overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
            src="/what i do.avif"
            alt="background"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 h-full">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-8 w-full md:w-1/2">
                <div className="text-[8vw] sm:text-[6vw] md:text-[4vw] flex flex-wrap gap-5 py-8 font-[anzo1] uppercase tracking-tighter leading-none">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-white">
                    WHAT
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-white">
                    I DO
                  </motion.h1>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="backdrop-blur-lg bg-zinc-900/60 p-6 sm:p-8 rounded-2xl w-full border border-zinc-800 shadow-xl">
                  <p className="text-base sm:text-lg font-[anzo2] uppercase mb-6 text-zinc-200">
                    I offer comprehensive web development and graphic design services for all your digital needs
                  </p>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-4 text-zinc-100">
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Custom Website Development
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> E-commerce Solutions
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Logo & Brand Design
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Social Media Graphics
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Print Design Materials
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Digital Marketing Assets
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 w-full md:w-1/2 lg:w-2/5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="backdrop-blur-lg bg-zinc-900/60 p-6 sm:p-8 rounded-2xl hover:bg-zinc-800/60 transition-colors duration-300 border border-zinc-800 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-[anzo1] uppercase mb-4 text-white">
                    Design & Development Tools
                  </h3>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-4 text-zinc-100">
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> WordPress & Website Builders
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Adobe Creative Suite
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> Figma & Sketch
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> HTML, CSS & JavaScript
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">•</span> UI/UX Design Tools
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="backdrop-blur-lg bg-zinc-900/60 p-6 sm:p-8 rounded-2xl hover:bg-zinc-800/60 transition-colors duration-300 border border-zinc-800 shadow-xl">
                  <h3 className="text-xl sm:text-2xl font-[anzo1] uppercase mb-4 text-white">
                    Work Process
                  </h3>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-4 text-zinc-100">
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">1.</span> Initial Consultation
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">2.</span> Design Concept
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">3.</span> Development & Creation
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">4.</span> Revision & Refinement
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                      <span className="text-white">5.</span> Final Delivery
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;