import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaGlobeAmericas } from "react-icons/fa";

const SectionLast = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-full flex flex-col justify-center items-center relative py-16 sm:py-24">
        {/* Background */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover brightness-40"
          src="/what i do.avif"
          alt="background"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center text-white gap-8 lg:gap-12">
          {/* Left Text + Social */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:w-1/2">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-[anzo1] uppercase tracking-tighter leading-tight">
              <h1>Transform</h1>
              <h1>Your Vision</h1>
              <h1>Into Reality</h1>
            </div>

            <p className="max-w-2xl text-base sm:text-lg lg:text-xl font-[anzo2] uppercase leading-relaxed">
              Let’s create something extraordinary together. With innovative solutions and creative direction, 
              we’ll turn your ideas into impactful digital experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-4">
              <a
                href="https://www.instagram.com/designd_ynamo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-pink-500 transition-all duration-300"
              >
                <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmedabdullahdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-blue-600 transition-all duration-300"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Contact Card */}
          <div className="lg:w-1/2 w-full bg-black/40 p-6 sm:p-8 lg:p-10 rounded-xl backdrop-blur-md shadow-2xl border border-white/20 hover:border-white/40 transition-all">
            <h2 className="text-2xl sm:text-3xl font-[anzo1] mb-6 sm:mb-8">
              Let’s Connect
            </h2>

            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Phone</p>
                <a
                  href="tel:+923076706748"
                  className="text-xl sm:text-2xl hover:text-blue-400 transition-colors flex items-center gap-3"
                >
                  <FaPhone className="h-5 w-5 sm:h-6 sm:w-6" />
                  +92 307 6706748
                </a>
              </div>

              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Email</p>
                <a
                  href="mailto:official.ahmedabdullah@gmail.com"
                  className="text-xl sm:text-2xl hover:text-blue-400 transition-colors flex items-center gap-3 break-all"
                >
                  <FaEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />
                  official.ahmedabdullah@gmail.com
                </a>
              </div>

              <div>
                <p className="font-[anzo2] text-gray-300 mb-2">Location</p>
                <p className="text-xl sm:text-2xl flex items-center gap-3">
                  <FaGlobeAmericas className="h-5 w-5 sm:h-6 sm:w-6" />
                  Available Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLast;
