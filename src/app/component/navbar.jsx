"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkStyle = (path) =>
    `text-white font-bold cursor-pointer ${
      pathname === path ? "underline underline-offset-2 decoration-[1px]" : ""
    }`;

  return (
    <div className="bg-[#1A2E5C] lg:p-3 p-5 w-full overflow-x-hidden">
      <div className="xl:w-[90%] mx-auto flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={79}
          height={58}
          className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"
          priority
        />

       
        <div className="hidden md:block space-x-4">
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <a
            href="/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold cursor-pointer"
          >
            Privacy Policy
          </a>

          <Link href="/datadeletion" className={linkStyle("/datadeletion")}>
            Data
          </Link>

          <Link href="/support" className={linkStyle("/support")}>
            Support
          </Link>
        </div>

     
        <div className="block md:hidden">
          <button
            className="text-white transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
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
                aria-label="Close menu"
              >
                X
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-2">
              <Link
                href="/"
                className={`text-4xl md:text-6xl font-bold ${
                  pathname === "/" ? "underline" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/datadeletion"
                className={`text-4xl md:text-6xl font-bold ${
                  pathname === "/datadeletion" ? "underline" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Data
              </Link>
              <Link
                href="/support"
                className={`text-4xl md:text-6xl font-bold ${
                  pathname === "/support" ? "underline" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </Link>
            </div>

            <div className="flex justify-between px-4 pb-4 text-sm text-gray-600 font-dm font-bold">
              <a
                href="/privacy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
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

export default Navbar;
