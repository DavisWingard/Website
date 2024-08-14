import { HERO_TEXT } from "@/constants";
import React from "react";
import photo from "../assets/daviswingard.png";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="border-b border-transparent pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left">
            <h1 className="pb-16 text-5xl tracking-tight lg:mt-16 lg:text-6xl">
              Hi, I'm Davis.
            </h1>
            <span className="bg-gradient-to-r from-purple-500 via-slate-400 to-blue-300 bg-clip-text text-4xl tracking-tight text-transparent">
              SWE & Web Developer
            </span>
            <p className="my-2 max-w-xl py-2 font-light tracking-tighter">
              {HERO_TEXT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-end lg:items-center">
          <div className="flex justify-center lg:justify-end">
            <Image
              src={photo}
              alt="photo"
              className="max-w-full h-auto lg:max-w-md lg:mr-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
