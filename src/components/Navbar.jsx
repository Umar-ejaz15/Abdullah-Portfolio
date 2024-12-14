import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-16  text-white flex items-center justify-between p-20">
      <div className="w-12 h-12">
        <img
          className="w-full h-full object-contain rounded-full border-2 border-purple-500"
          src="/logo.jpeg"
          alt="logo"
        />
      </div>
      <div>
        <button className="bg-gradient-to-r from-purple-600 to-purple-800 font-[anzo2] text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          Get My CV!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;