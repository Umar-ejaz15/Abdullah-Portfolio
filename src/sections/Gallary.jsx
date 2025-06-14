import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    }
  ];

  return (
    <div className="h-auto bg-gradient-to-b from-zinc-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
          Featured Work
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
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
              <div className="group relative overflow-hidden rounded-lg shadow-xl">
                <div className="w-full h-[300px] md:h-[400px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-white text-black text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallary;