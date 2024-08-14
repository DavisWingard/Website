"use client";
import Image from "next/image";
import logo from "../assets/dwlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center">
        <Image
          src={logo}
          alt="logo"
          objectFit="contain"
          className="w-14 md:w-16 lg:w-18"
        />
      </div>
      <div className="flex items-center gap-4 text-4xl">
        <div
          onClick={() =>
            window.open("https://www.linkedin.com/in/daviswingard/", "_blank")
          }
          className="cursor-pointer"
        >
          <FaLinkedin />
        </div>

        <div
          onClick={() =>
            window.open("https://github.com/DavisWingard", "_blank")
          }
          className="cursor-pointer"
        >
          <FaGithub />
        </div>

        <div
          onClick={() =>
            window.open("https://www.instagram.com/davis.wingard/", "_blank")
          }
          className="cursor-pointer"
        >
          <FaInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
