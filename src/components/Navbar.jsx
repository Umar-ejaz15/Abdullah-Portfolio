import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full h-16 text-white flex items-center justify-between p-20">
      <div className="w-12 h-12">
        <img
          className="w-full h-full object-contain rounded-full"
          src="/logo.jpeg"
          alt="logo"
        />
      </div>
      <div>
        <button className="bg-white font-[anzo2] text-black px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
          Get My CV!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
