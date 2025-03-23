"use client";
import Image from "next/image";
import React from "react";
import { dummyNews } from "./dummyNews";
import Button from "@/components/Button";

const News = () => {
  return (
    <div className="section-container w-full bg-lightgray">
      <div className="w-full main-container grid ml:grid-cols-2 gap-[20px]">
        {dummyNews.map((data, index) => (
          <div
            key={data.id}
            className="flex flex-col sm:flex-row items-start justify-between p-[10px] gap-[10px] sm:gap-[20px] cursor-pointer group"
          >
            <div className="flex-1 w-full sm:flex-2/5">
              <Image
                src={data.image}
                width={100}
                height={100}
                alt="image"
                className="w-full aspect-[5_/_3]"
              />
            </div>
            <div className="flex-3/5">
              <h2 className="content-heading text-[24px] !text-secondary font-semibold group-hover:underline">
                {data.title}
              </h2>
              <p>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full mt-[20px]">
        <Button className="w-fit" onClick={() => {}} label="More Stories" />
      </div>
    </div>
  );
};

export default News;
