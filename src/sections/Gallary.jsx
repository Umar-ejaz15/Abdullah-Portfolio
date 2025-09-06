import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Gallary = () => {
  const projects = [
    {
      id: 1,
      title: "Real Estate Design",
      image: "/WhatsApp Image 2024-12-13 at 10.00.22 AM.jpeg",
      category: "Real Estate",
    },
    {
      id: 2,
      title: "3D Showcase",
      image: "/WhatsApp Image 2024-12-13 at 10.00.22 AM (1).jpeg",
      category: "3D Design",
    },
    {
      id: 3,
      title: "Logo Collection",
      image: "/WhatsApp Image 2024-12-13 at 10.00.18 AM.jpeg",
      category: "Branding",
    },
    {
      id: 4,
      title: "Print Design",
      image: "/WhatsApp Image 2024-12-13 at 10.00.16 AM (1).jpeg",
      category: "Print",
    },
    {
      id: 5,
      title: "Digital Ads",
      image: "/WhatsApp Image 2024-12-13 at 10.00.20 AM.jpeg",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Motion Design",
      image: "/WhatsApp Image 2024-12-13 at 10.00.17 AM (1).jpeg",
      category: "Animation",
    },
  ];

  return (
    <div className="h-auto bg-gradient-to-b from-zinc-900 to-black text-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400"
        >
          Featured Work
        </motion.h2>

        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="w-full max-w-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-500"
              >
                {/* Image */}
                <div className="w-full h-[300px] md:h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="w-full p-6">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full backdrop-blur-md bg-white/20 text-white shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallary;
