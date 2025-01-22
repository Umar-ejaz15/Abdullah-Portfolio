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
        id: 11,
        title: "Real Estate Posters",
        image: "/WhatsApp Image 2024-12-13 at 10.00.22 AM.jpeg",
        category: "Posters",
      },
      {
        id: 12,
        title: "3D Design Showcase",
        image: "/WhatsApp Image 2024-12-13 at 10.00.22 AM (1).jpeg",
        category: "3D Design",
      },
    {
      id: 8,
      title: " Design Showcase",
      image: "/WhatsApp Image 2024-12-13 at 10.00.18 AM.jpeg",
      category: "Logo Design",
    },
    {
      id: 3,
      title: "Print Design Collection",
      image: "/WhatsApp Image 2024-12-13 at 10.00.16 AM (1).jpeg",
      category: "Print",
    },
    {
      id: 10,
      title: "Google Ads",
      image: "/WhatsApp Image 2024-12-13 at 10.00.20 AM.jpeg",
      category: "Ads",
    },
    {
      id: 5,
      title: "Motion Graphics",
      image: "/WhatsApp Image 2024-12-13 at 10.00.17 AM (1).jpeg",
      category: "Animation",
    },
    {
      id: 1,
      title: "Gardening Posters",
      image: "/WhatsApp Image 2024-12-13 at 10.00.15 AM (1).jpeg",
      category: "Gardening",
    },
    {
      id: 7,
      title: "Social Media Posters",
      image: "/WhatsApp Image 2024-12-13 at 10.00.18 AM (1).jpeg",
      category: "Posters",
    },
    {
      id: 2,
      title: "Food Posters",
      image: "/WhatsApp Image 2024-12-13 at 10.00.15 AM.jpeg",
      category: "Posters",
    },
    {
      id: 9,
      title: "Illustration Showcase",
      image: "/WhatsApp Image 2024-12-13 at 10.00.20 AM (1).jpeg",
      category: "Illustration",
    },
    {
      id: 4,
      title: "Digital Illustration",
      image: "/WhatsApp Image 2024-12-13 at 10.00.16 AM.jpeg",
      category: "Illustration",
    },
    {
      id: 6,
      title: "Package Design",
      image: "/WhatsApp Image 2024-12-13 at 10.00.17 AM.jpeg",
      category: "Packaging",
    },
  ];

  return (
    <div className="h-auto bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl uppercase font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">
           Gallery
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className=" px-5 w-full max-w-[800px]">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl">
                <div className="w-full h-[400px] md:h-[600px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-full text-sm font-semibold shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-zinc-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallary;