import React from "react";
import { motion } from "framer-motion";

const Section5 = () => {
  return (
    <>
      <div className="w-full min-h-screen relative py-12 md:py-0 flex justify-center items-center px-3">
        <div className="w-full h-full overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
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
                <div className="text-[8vw] sm:text-[6vw] md:text-[4vw] flex flex-wrap gap-5 py-8 font-[anzo1] uppercase tracking-tighter leading-none animate-fade-in">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    WHAT
                  </motion.h1>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    I DO
                  </motion.h1>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="backdrop-blur-sm bg-black/20 p-4 sm:p-6 rounded-xl w-full">
                  <p className="text-base sm:text-lg font-[anzo2] uppercase mb-6 text-gray-200">
                    I design graphic designs, logos, posters, social media posts,
                    banners, thumbnails and everything
                  </p>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-3 text-white">
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Brand Identity &
                      Logo Design
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Social Media
                      Graphics & Marketing Materials
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Print Design
                      (Brochures, Business Cards, Flyers)
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Digital
                      Illustrations & Custom Artwork
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> UI/UX Design for
                      Web & Mobile
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Motion Graphics &
                      Video Thumbnails
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
                  className="backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-xl hover:bg-black/40 transition-colors">
                  <h3 className="text-xl sm:text-2xl font-[anzo1] uppercase mb-4 text-purple-300">
                    Tools I Master
                  </h3>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-3 text-white">
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Adobe Photoshop
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Adobe Illustrator
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Adobe InDesign
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> Figma
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">•</span> After Effects
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="backdrop-blur-sm bg-black/30 p-4 sm:p-6 rounded-xl hover:bg-black/40 transition-colors">
                  <h3 className="text-xl sm:text-2xl font-[anzo1] uppercase mb-4 text-purple-300">
                    Work Process
                  </h3>
                  <ul className="text-sm sm:text-base font-[anzo2] space-y-3 text-white">
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">1.</span> Research &
                      Concept Development
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">2.</span> Sketching &
                      Ideation
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">3.</span> Digital Design &
                      Refinement
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">4.</span> Client Review &
                      Revisions
                    </li>
                    <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                      <span className="text-purple-400">5.</span> Final Delivery &
                      Support
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