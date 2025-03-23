"use client";
import { Menu02Icon, SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { name: "Computer", path: "/computer" },
  { name: "Internet", path: "/internet" },
  { name: "IT", path: "/it" },
  { name: "Mobile Tech", path: "/mobile-tech" },
  { name: "Review", path: "/review" },
  { name: "Security", path: "/security" },
  { name: "Tech Blog", path: "/tech-blog" },
  { name: "Technology", path: "/technology" },
  { name: "Most Popular", path: "/most-popular" },
];

const Navbar = () => {
  const getTime = () => {
    const now = new Date();
    return (
      now.toLocaleDateString("en-US", {
        weekday: "long", // 'Monday'
        year: "numeric", // '2025'
        month: "long", // 'March'
        day: "numeric", // '3'
      }) +
      " " +
      now.toLocaleTimeString()
    );
  };
  const [dateTime, setDateTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getTime());
    }, 1000);

    // Initialize the dateTime when the component mounts
    setDateTime(getTime());

    return () => clearInterval(interval);
  }, []);

  if (dateTime === null) return null; // Return null until the client-side has rendered

  return (
    // <div className="sticky top-0 bg-white z-[2000]">
    <div>
      <div className="main-container w-full flex items-center justify-between py-[15px] md:py-[20px]">
        <Image
          className="w-[135px] h-[38px] md:w-[150px] md:h-[50px]"
          width={150}
          height={50}
          alt="neu"
          src="/images/logo.png"
        />
        <ul className="hidden uppercase font-grotesk ml:flex items-center gap-[12px] text-sm">
          {menuItems.map(({ name, path }) => (
            <li
              key={name}
              className="hover:border-b-2 border-secondary transition-all duration-150"
            >
              <Link key={path} href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="ml:hidden">
          <HugeiconsIcon
            icon={Menu02Icon}
            size={30}
            color="#004aad"
            strokeWidth={1.5}
          />
        </button>
      </div>
      <div className="w-full bg-lightgray py-[10px] sm:py-[15px]">
        <div className="main-container flex flex-col sm:flex-row items-start gap-y-[5px] sm:items-center justify-between">
          <h3 className="section-header">Front Page</h3>
          {/* input box */}
          <div className="w-full sm:w-[270px] h-[38px] bg-white px-[10px] relative">
            <input
              type="text"
              className="w-full h-full border-none outline-none"
              placeholder="Search"
            />
            <HugeiconsIcon
              className="absolute top-1/2 right-[10px] translate-y-[-50%]"
              icon={SearchIcon}
              size={20}
              color="currentColor"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="main-container w-full flex flex-col md:flex-row items-start gap-y-[3px] md:items-center justify-between py-[8px]">
          {/* left */}
          <div className="flex items-center gap-[20px] text-sm md:text-base">
            <span className="font-semibold text-secondary">
              Neural Tech World
            </span>
            <li className="">Top Stories</li>
          </div>
          {/* right */}
          <div>
            <div className="text-sm md:text-base">{dateTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
