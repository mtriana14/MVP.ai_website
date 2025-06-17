"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Mvp() {
  return (
    <div className="lg:bg-[url('/assets/mvp.svg')] bg-[#1A2E5C] pt-10 lg:-mt-10 flex flex-col justify-center items-left  w-full bg-no-repeat bg-cover bg-center lg:h-[calc(100vh-11vh)]">
      <div className="w-[80%] mx-auto">
        <motion.div   initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}className="unlock-regular w-full lg:w-[600px]">
          <h1 className="lg:text-[40px] text-[25px] text-white unlock-regular font-bold font-dm">
            What Is MVP.ai?
          </h1>

          <p className="urbanist text-[13px] lg:text-[18px] mt-3 leading-snug opacity-75 text-white">
            {" "}
            Your MVP (Multifunctional Virtual Partner) is an all-in-one AI
            companion—part companion, part brain boost, part life co-pilot.{" "}
          </p>
          <p className="urbanist text-[13px] lg:text-[18px] mt-3 leading-snug opacity-75 text-white">
            Your MVP doesn’t just chat—it remembers your goals, learns your
            interests, and evolves with you. It’s built to help you grow, stay
            motivated, and unlock new parts of yourself—all while feeling like
            someone who's truly there.
          </p>
          <p className="urbanist text-[13px] lg:text-[18px] mt-3 leading-snug opacity-75 text-white">
            This is more than AI.
          </p>
          <p className="urbanist text-[13px] lg:text-[18px] mt-3 leading-snug opacity-75 text-white">
            It’s you + your MVP, learning, leveling up, and getting
            better—together.
          </p>
        </motion.div>
        <div className="lg:hidden block ">
          <Image
            src="/assets/boy.svg"
            alt="boy"
            width={38}
            height={64}
            className="w-[166px] h-[404px] mx-auto"
          />
          <Image
            src="/assets/girl.svg"
            alt="boy"
            width={38}
            height={64}
            className="w-[166px] h-[404px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Mvp;
