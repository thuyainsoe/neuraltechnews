"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Channels = () => {
  const slides = [
    { id: 1, image: "/images/temp/news/image1.png" },
    { id: 2, image: "/images/temp/news/image2.png" },
    { id: 3, image: "/images/temp/news/image3.png" },
    { id: 4, image: "/images/temp/news/image4.png" },
    { id: 5, image: "/images/temp/news/image5.png" },
  ];

  return (
    <div className="section-container w-full bg-black text-white">
      <div className="main-container w-full flex flex-col gap-[20px]">
        <h2 className="section-header">Neural Channels</h2>
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2, // Mobile
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3, // Tablet
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4, // Desktop
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.image}
                  width={100}
                  height={100}
                  alt="image"
                  className="w-full aspect-[3_/_2]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Channels;
