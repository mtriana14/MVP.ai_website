"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

function navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#1E0E62] lg:p-3 p-5 w-full overflow-x-hidden">
      <div className="xl:w-[90%] mx-auto flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={79}
          height={58}
          className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"
        />
        <div className="hidden md:block">
          <a className="text-white font-bold underline underline-offset-2 decoration-[1px] cursor-pointer">
            Home
          </a>
        </div>
        <div className="block md:hidden">
          <button
            className="text-white transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="w-8 h-8" />
          </button>
        </div>

        {isMenuOpen && (
  <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden">
    <div className="flex justify-between items-center p-4">
      <Image src="/assets/KaiImage.png" alt="logo" width={53} height={53} />
      <button
        onClick={() => setIsMenuOpen(false)}
        className="text-black text-3xl font-bold"
      >
        X
      </button>
    </div>
    <div className="relative flex-1 flex items-center justify-center w-full overflow-hidden">
      <Image
        src="/assets/top_left.png"
        alt="Top Left"
        width={400}
        height={400}
        className="absolute top-[70px] left-0 w-[160px] sm:w-[180px] md:w-[200px]"
      />
      <Image
        src="/assets/top_right.png"
        alt="Top Right"
        width={400}
        height={400}
        className="absolute top-[70px] right-0 w-[160px] sm:w-[180px] md:w-[200px]"
      />
      <Image
        src="/assets/bottom_left.png"
        alt="Bottom Left"
        width={400}
        height={400}
        className="absolute bottom-[70px] left-0 w-[160px] sm:w-[180px] md:w-[200px]"
      />
      <Image
        src="/assets/bottom_right.png"
        alt="Bottom Right"
        width={400}
        height={400}
        className="absolute bottom-[70px] right-0 w-[160px] sm:w-[180px] md:w-[200px]"
      />
      <h2 className="text-4xl md:text-6xl font-bold z-10">Home</h2>
    </div>
    <div className="flex justify-between px-4 pb-4 text-sm text-gray-600 font-dm font-bold">
      <a href="#" className="underline underline-offset-2">
        Privacy Policy
      </a>
      <a href="#" className="underline underline-offset-2">
        Terms and Conditions
      </a>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default navbar;
