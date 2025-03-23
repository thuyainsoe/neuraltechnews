import { dummyHero } from "@/fakedata/dummyHero";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="main-container section-container w-full">
      <div className="w-full ml:h-[450px] flex flex-col ml:flex-row items-center gap-y-[20px]">
        <div className="flex-2 w-full aspect-square sm:aspect-auto ml:h-full relative border-y-[0.02rem] border-y-gray-50">
          <Image
            src="/images/temp/image1.png"
            width={100}
            height={100}
            alt="temp 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute p-[10px] bg-[#ffffffcc] bottom-0 left-0 flex flex-col gap-[5px]">
            <h2 className="content-heading text-[25px] font-semibold">
              The State of the Microprocessor Market and the Problem With
              Tariffs
            </h2>
            <p className="text-sm">
              This week, I’ll cover the microprocessor companies I know best and
              close with my Product of the Week, Microsoft’s Copilot AI. I’m
              pretty pleased with this implementation, and kudos to...
            </p>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col items-stretch h-full">
          {dummyHero.map((data, index) => (
            <div
              key={data.id}
              className="flex-1 w-full bg-lightgray border-y-[0.02rem]
              cursor-pointer hover:bg-secondary transition-all duration-150 group border-y-gray-50 p-[10px] flex items-center gap-[10px]"
            >
              <Image
                src={data.img}
                width={100}
                height={100}
                alt="image"
                className="w-[70px] aspect-[3_/_2]"
              />
              <p className="text-base font-oswald group-hover:text-white transition-colors duration-150">
                {data.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
