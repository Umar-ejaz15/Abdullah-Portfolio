import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { FaPaintBrush, FaYoutube, FaUsers, FaShoppingBag, FaBusinessTime } from "react-icons/fa";
import { MdWeb, MdOutlineBrandingWatermark, MdInsertPhoto, MdSlideshow } from "react-icons/md";
import { AiOutlineSketch, AiOutlineLayout, AiOutlineFileProtect } from "react-icons/ai";
import { TbCards, TbShirt } from "react-icons/tb";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  useGSAP(() => {
    gsap.to(".shape", {
      rotation: 360,
      scale: 1.1,
      duration: 20,
      ease: "power2.inOut",
      yoyo: true,
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: ".shape",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  const services = [
    { title: "Logo Design", desc: "Unique, timeless logos that define your brand’s identity.", icon: <AiOutlineSketch /> },
    { title: "Brand Identity", desc: "Color palettes, typography, and full design systems for consistency.", icon: <MdOutlineBrandingWatermark /> },
    { title: "Thumbnails", desc: "Eye-catching YouTube & social media thumbnails to boost clicks.", icon: <FaYoutube /> },
    { title: "Gig Images", desc: "Professional Fiverr/Upwork gig banners that attract clients.", icon: <FaUsers /> },
    { title: "Web Design", desc: "Modern UI mockups & website visuals that wow audiences.", icon: <MdWeb /> },
    { title: "Poster Design", desc: "Bold posters & flyers that grab attention instantly.", icon: <FaPaintBrush /> },
    { title: "Social Media Posts", desc: "Trendy & engaging posts tailored for your audience.", icon: <MdInsertPhoto /> },
    { title: "Business Cards", desc: "Professional card designs that leave lasting impressions.", icon: <TbCards /> },
    { title: "Brochures & Catalogs", desc: "Clean layouts to showcase your products & services.", icon: <AiOutlineLayout /> },
    { title: "Infographics", desc: "Visual storytelling with data-driven, easy-to-digest graphics.", icon: <AiOutlineFileProtect /> },
    { title: "Presentations", desc: "Pitch decks & slides that impress and persuade.", icon: <MdSlideshow /> },
    { title: "Merchandise Design", desc: "Custom t-shirts, mugs, and more for your brand.", icon: <TbShirt /> },
    { title: "Banners & Covers", desc: "Social media headers, ads, and campaign visuals.", icon: <FaShoppingBag /> },
    { title: "Creative Direction", desc: "Consistent design language across all platforms.", icon: <FaBusinessTime /> },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden px-6 py-20">
      {/* Gradient Floating Shapes */}
      <motion.div
        className="shape absolute w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-400 top-20 left-10"
        animate={{ x: ["0%", "5%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.div
        className="shape absolute w-64 h-64 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-green-400 via-teal-400 to-cyan-400 bottom-10 right-20"
        animate={{ x: ["0%", "-5%", "0%"], y: ["0%", "5%", "0%"], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-20 md:px-16">
        <div className="text-center mb-16">
          <h1 className="text-[14vw] md:text-[10vw] lg:text-[8vw] font-[anzo1] uppercase tracking-tight bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent leading-none drop-shadow-[0_0_25px_rgb(255,255,255)]">
            What I Do
          </h1>
          <p className="mt-6 text-zinc-300 text-sm md:text-lg max-w-3xl mx-auto backdrop-blur-sm bg-white/5 px-6 py-4 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            From logos to full brand identities, digital assets to merchandise — I cover the full spectrum of graphic design. Everything your brand needs, under one creative roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-6xl">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start gap-4 p-6 md:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-105"
            >
              <div className="text-4xl text-pink-400 hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h1 className="font-[anzo1] text-lg md:text-xl hover:text-gray-300 transition-colors duration-300 cursor-pointer inline-block border-b-2 border-transparent hover:border-white/50">
            Ready to bring your vision to life? Let’s create together →
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section7;
