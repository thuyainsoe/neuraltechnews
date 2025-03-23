"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { dummyChannels } from "./dummyChannel";
import { LinkBackwardIcon, LinkForwardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const Channels = () => {
  return (
    <div className="section-container w-full bg-black text-white">
      <div className="main-container w-full flex flex-col gap-[30px]">
        <h2 className="section-header text-white">Neural Channels</h2>
        <div className="w-full relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
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
            {dummyChannels.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="flex flex-col items-start gap-[15px] group cursor-pointer">
                  <div className="w-full relative">
                    <Image
                      src={slide.image}
                      width={100}
                      height={100}
                      alt="image"
                      className="w-full aspect-[3_/_2] border-[0.01rem] border-[#ffffffcc]"
                    />
                    <span className="absolute bottom-[5px] left-[5px] flex items-center w-fit h-[20px] bg-secondary px-[10px] text-xs text-white">
                      {slide.title}
                    </span>
                  </div>
                  <p className="text-lg group-hover:underline">
                    {slide.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-navigation mt-[30px] flex items-center gap-[30px] justify-center">
            <button className="custom-prev cursor-pointer">
              <HugeiconsIcon
                icon={LinkBackwardIcon}
                size={25}
                color="white"
                strokeWidth={1.5}
              />
            </button>
            <button className="custom-next cursor-pointer">
              <HugeiconsIcon
                icon={LinkForwardIcon}
                size={25}
                color="white"
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channels;
