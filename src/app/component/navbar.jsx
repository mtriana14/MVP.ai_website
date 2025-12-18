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
    <header className="bg-[#1A2E5C] lg:p-3 p-5 w-full overflow-x-hidden">
      <div className="xl:w-[90%] mx-auto flex items-center justify-between">
        <Link href="/" aria-label="MVP.ai Home">
          <Image
            src="/logo.svg"
            alt="MVP.ai logo"
            width={79}
            height={58}
            className="lg:w-[79px] lg:h-[58px] w-[60px] h-[40px]"
            priority
          />
        </Link>
        <nav
          className="hidden md:block space-x-4"
          aria-label="Primary navigation"
        >
          <Link href="/" className={linkStyle("/")}>
            Home
          </Link>

          <Link href="/privacy" className={linkStyle("/privacy")}>
            Privacy Policy 
          </Link>
          <Link href="/datadeletion" className={linkStyle("/datadeletion")}>
            Data
          </Link>

          <Link href="/support" className={linkStyle("/support")}>
            Support
          </Link>
        </nav>
        <div className="block md:hidden">
          <button
            className="text-white transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <FaBars className="w-8 h-8" />
          </button>
        </div>
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-between items-center p-4">
              <Link href="/" aria-label="MVP.ai Home">
                <Image
                  src="/assets/KaiImage.png"
                  alt="MVP.ai logo"
                  width={53}
                  height={53}
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black text-3xl font-bold"
                aria-label="Close menu"
              >
                ×
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
              <a href="/terms" className="underline underline-offset-2">
                Terms and Conditions
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
