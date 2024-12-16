import React from "react";

const Section5 = () => {
  return (
    <>
      <div className="w-full h-auto bg-gradient-to-b from-gray-900 to-black px-6 py-4">
        <div className="w-full h-full overflow-hidden flex flex-col justify-between   relative rounded-3xl">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover opacity-40 transition-opacity hover:opacity-35"
            src="/what i do.avif"
            alt="background"
          />
          <div className="relative z-10 flex flex-col md:flex-row text-white justify-between gap-12">
            <div className="flex flex-col gap-8">
              <div className="text-[8vw] md:text-[6vw] font-[anzo1] uppercase tracking-tighter leading-none animate-fade-in">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">WHAT</h1>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">I DO</h1>
              </div>
              <div className="max-w-2xl backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                <p className="text-lg font-[anzo2] uppercase mb-6 text-gray-200">I design graphic designs, logos, posters, social media posts, banners, thumbnails and everything</p>
                <ul className="text-base font-[anzo2] space-y-3">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> Brand Identity & Logo Design
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> Social Media Graphics & Marketing Materials
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> Print Design (Brochures, Business Cards, Flyers)
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> Digital Illustrations & Custom Artwork
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> UI/UX Design for Web & Mobile
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">•</span> Motion Graphics & Video Thumbnails
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-md">
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl hover:bg-black/40 transition-colors">
                <h3 className="text-2xl font-[anzo1] uppercase mb-4 text-purple-300">Tools I Master</h3>
                <ul className="font-[anzo2] space-y-3">
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
              </div>
              <div className="backdrop-blur-sm bg-black/30 p-8 rounded-xl hover:bg-black/40 transition-colors">
                <h3 className="text-2xl font-[anzo1] uppercase mb-4 text-purple-300">Work Process</h3>
                <ul className="font-[anzo2] space-y-3">
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">1.</span> Research & Concept Development
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">2.</span> Sketching & Ideation
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">3.</span> Digital Design & Refinement
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">4.</span> Client Review & Revisions
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                    <span className="text-purple-400">5.</span> Final Delivery & Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5; 