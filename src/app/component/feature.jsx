"use client";
import React, { useState } from "react";
import Image from "next/image";
import FeatureData from "../data/features.json";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

function Features() {

  return (
    <div className="relative">
      <div className="bg-[#1A2E5C] lg:p-3 -mt-1 px-5 pt-5 z-0 lg:pb-0 pb-10 relative lg:h-[600px] w-full">
        <h1 className="text-[#6CD5F6] font-bold pt-10 text-center text-[35px] lg:text-[65px]">
          The Features
        </h1>
        <div className="w-[70%] lg:w-[80%] mx-auto flex flex-wrap items-center justify-between gap-10 mt-10">
          {FeatureData && FeatureData.length > 0 ? (
            FeatureData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="w-[300px] text-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={38}
                  height={64}
                  className="w-[38px] h-[44px] mx-auto"
                />
                <h1 className="text-white font-semibold text-[20px] lg:text-[28px] mt-5 mb-4">
                  {item.title}
                </h1>
                <p className="text-white text-[13px] lg:text-[18px]">
                  {item.para}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-white text-center">Loading...</p>
          )}
        </div>
      </div>
      <div className="bg-gradient-custom lg:px-10 -mt-1 lg:pt-10 h-[500px] lg:h-screen relative">
        <Image
          src="/assets/pics.svg"
          alt="pic"
          width={100}
          height={100}
          className="w-[90%] lg:block hidden mx-auto absolute xl:-mt-32 mt-20 right-0 left-0 z-40 object-cover  "
        />
        <Image
          src="/assets/mobilepic.svg"
          alt="pic"
          width={100}
          height={100}
          className="w-[90%] lg:hidden block mx-auto absolute xl:-mt-32 mt-20 right-0 left-0 z-40 object-cover  "
        />
      </div>
      <div className="bg-custom-3 pt-[42rem] sm:pt-[54rem] md:pt-[30rem] lg:pt-[24rem]">
        <Accordion />
      </div>
      <div className="lg:bg-gradient-custom-2 bg-custom h-[8vh] pb-10"></div>
    </div>
  );
}

export default Features;
