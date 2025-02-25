import React from "react";

const Navbar = () => {
  const handleDownloadCV = () => {
    window.open('/cv-reseume-2.pdf', '_blank');
  };

  return (
    <nav className="w-full fixed top-0 z-50 h-16  text-white flex items-center justify-between px-5 py-10">
      <div className="w-12 h-12">
        <img
          className="w-full h-full object-contain rounded-full border-2 border-purple-500"
          src="/logo.jpeg"
          alt="logo"
        />
      </div>
      <div>
        <button 
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-purple-600 to-purple-800 font-[anzo2] text-white px-6 py-2 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          Get My CV!
        </button>
      </div>
    </nav>
  );
};

export default Navbar;