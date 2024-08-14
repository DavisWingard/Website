import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoPython } from "react-icons/io5";
import { BiLogoJava } from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-transparent pb-24 max-w-screen-lg mx-auto">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* First row of icons */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoTypescript
              className="text-7xl"
              style={{ color: "#3178c6" }}
            />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJavascript1 className="text-7xl" style={{ color: "#f0db4f" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoPython className="text-7xl" style={{ color: "#4584b6" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoJava className="text-7xl" style={{ color: "#bc0b19" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className="text-7xl" style={{ color: "#823085" }} />
          </div>
        </div>

        {/* Second row of icons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNextdotjs className="text-7xl text-white scale-90" />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoNodejs className="text-7xl" style={{ color: "#6cc24a" }} />
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoTailwindCss
              className="text-7xl"
              style={{ color: "#06b6d4" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
