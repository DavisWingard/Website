"use client";
import { HERO_TEXT } from "@/constants";
import React from "react";
import photo from "../assets/daviswingard.png";
import Image from "next/image";
import MotionContainer from "./MotionContainer";

const Hero = () => {
  return (
    <div className="border-b border-transparent pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left pb-2">
            <MotionContainer delay={0.5}>
              <h1 className="pb-16 text-4xl tracking-tight lg:mt-16 lg:text-6xl">
                Hi, I'm Davis.
              </h1>
            </MotionContainer>
            <MotionContainer delay={0.8}>
              <span className="bg-gradient-to-r from-purple-500 via-slate-400 to-blue-300 bg-clip-text text-4xl tracking-tight text-transparent">
                SWE & Web Developer
              </span>
            </MotionContainer>
            <MotionContainer delay={0.9}>
              <p className="my-2 max-w-xl py-2 font-light tracking-tighter">
                {HERO_TEXT}
              </p>
            </MotionContainer>
            <MotionContainer delay={1}>
              <a
                href="../public/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                  View my Resume!
                </button>
              </a>
            </MotionContainer>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-end lg:items-center">
          <MotionContainer delay={0.85} initial={{ x: 100, opacity: 0 }}>
            <Image
              src={photo}
              alt="photo"
              className="max-w-full h-auto lg:max-w-md lg:mr-8"
            />
          </MotionContainer>
        </div>
      </div>
    </div>
  );
};

export default Hero;
