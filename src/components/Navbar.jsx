import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const handleDownloadCV = () => {
    window.open('/cv-reseume-2.pdf', '_blank');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-full fixed top-0 z-50 h-16  text-[#2d2d2d] flex items-center justify-between px-5 py-10"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-12 h-12"
      >
        <img
          className="w-full h-full object-contain rounded-full border-2 border-[#dad7e8]"
          src="/logo.jpeg"
          alt="logo"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-[#dad7e8] to-[#b4b0c5] font-[anzo4] text-[#2d2d2d] px-8 md:px-16 py-4 rounded-full hover:shadow-lg hover:shadow-[#dad7e8]/20 transition-all duration-300">
          Get My CV!
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;