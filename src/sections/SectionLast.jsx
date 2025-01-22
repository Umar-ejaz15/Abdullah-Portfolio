import React from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaPhone, FaEnvelope, FaGlobeAmericas } from 'react-icons/fa';

const SectionLast = () => {
  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className="w-full h-full flex flex-col justify-center items-center relative py-16 sm:py-24">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover brightness-40"
            src="/what i do.avif"
            alt="background"
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center text-white gap-8 lg:gap-12">
            <div className="flex flex-col gap-6 sm:gap-8 lg:w-1/2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[anzo1] uppercase tracking-tighter leading-tight">
                <h1>Transform</h1>
                <h1>Your Vision</h1>
                <h1>Into Reality</h1>
              </div>
              <div className="max-w-2xl">
                <p className="text-base sm:text-lg lg:text-xl font-[anzo2] uppercase leading-relaxed">
                  Let's create something extraordinary together. With innovative solutions and cutting-edge technology, we'll turn your ideas into impactful digital experiences.
                </p>
              </div>
              <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-4">
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300">
                  <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8" />
                </a> */}
                <a href="https://www.instagram.com/designd_ynamo/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors duration-300">
                  <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
                {/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-300">
                  <FaTiktok className="w-6 h-6 sm:w-8 sm:h-8" />
                </a> */}
                <a href="https://www.linkedin.com/in/ahmedabdullahdesigner/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition-colors duration-300">
                  <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-black/40 p-6 sm:p-8 lg:p-10 rounded-xl backdrop-blur-md shadow-2xl mt-8 lg:mt-0">
              <h2 className="text-2xl sm:text-3xl font-[anzo1] mb-6 sm:mb-8">Let's Connect</h2>
              <div className="flex flex-col gap-6 sm:gap-8">
                <div>
                  <p className="font-[anzo2] text-gray-300 mb-2">Phone</p>
                  <a href="tel:+923076706748" className="text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
                    <FaPhone className="h-5 w-5 sm:h-6 sm:w-6" />
                    +92 307 6706748
                  </a>
                </div>
                <div>
                  <p className="font-[anzo2] text-gray-300 mb-2">Email</p>
                  <a href="mailto:contact@example.com" className="text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 break-all">
                    <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    official.ahmedabdullah@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-[anzo2] text-gray-300 mb-2">Location</p>
                  <p className="text-xl sm:text-2xl flex items-center gap-2">
                    <FaGlobeAmericas className="h-5 w-5 sm:h-6 sm:w-6" />
                    Available Worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionLast;