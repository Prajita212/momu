"use client";
import React, { useState } from "react";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import image from "../../public/momu.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
<div className="flex justify-between items-center lg:w-350 font-semibold mx-8 mt-8 md:mx-10 top-0 bg-white">
        <div> <Link href="/">
          <Image src={image} alt="momu" className="md:w-15 md:h-15 w-10 h-10" />
          </Link> </div>
        <div className="hidden lg:flex md:gap-20 gap-10">
          <Link href="/partners">
            <h2 className="hover:text-[#FFA20C] hover:scale-110 transition duration-300">
              Partner with us
            </h2>
          </Link>
          <Link href="/about">
            <h2 className="hover:text-[#FFA20C] hover:scale-110 transition duration-300">
              About
            </h2>
          </Link>
          <Link href="/contact">
            <h2 className="hover:text-[#FFA20C] hover:scale-110 transition duration-300">
              Contact
            </h2>
          </Link>
          <Link href="/login">
            <h2 className="hover:text-[#FFA20C] hover:scale-110 transition duration-300">
              Login
            </h2>
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="text-2xl cursor-pointer hover:text-[#FFA20C]"
          >
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-semibold transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-3xl hover:text-[#FFA20C]"
        >
          <IoClose />
        </button>
        <Link href="/" onClick={toggleMenu}>
          <h2 className="hover:text-[#FFA20C] transition duration-300">
            Partner with us
          </h2>
        </Link>
        <Link href="/about" onClick={toggleMenu}>
          <h2 className="hover:text-[#FFA20C] transition duration-300">
            About
          </h2>
        </Link>
        <Link href="/contact" onClick={toggleMenu}>
          <h2 className="hover:text-[#FFA20C] transition duration-300">
            Contact
          </h2>
        </Link>
        <Link href="/login" onClick={toggleMenu}>
          <h2 className="hover:text-[#FFA20C] transition duration-300">
            Login
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
