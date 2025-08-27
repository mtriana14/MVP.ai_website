"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import point from "../../../public/assets/point.png";
import CompanionGuide from "../component/companionguide.jsx";

const DataDeletion = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    
    <div className="bg-[#1A2E5C] p-5 w-full overflow-x-hidden h-full">
      <div className="mx-auto flex flex-col">
        <h1 className="ml-[18px] text-white md:text-[64px] font-bold mb-4 font-dm">
          Request for Account & Data Deletion
        </h1>

        <p className="font-urbanist text-white md:text-[28px] font-light ml-[28px] mb-12 w-[70%]">
          At <span className="font-bold">MVP.ai</span>, we believe your trust is
          earned, not assumed. You deserve the right to your own data and can
          send a request to us to delete your account and/or delete your data
          securely stored on our system.
        </p>

        <div
          className="mx-auto border-8 border-black rounded-xl w-[90%]"
          data-tf-live="01K0W8ZC4EW7869GBMTN1N48H4"
        ></div>

        <div className="flex items-center md:ml-[92px] mt-12 md:w-[70%] w-[85%] ml-[80px] gap-2">
          <p className="font-urbanist text-white md:text-[30px] font-medium">
            Note: Once the request is verified, we will take care of deleting your
            data and account information. Your request will be fulfilled within
            3–5 business days. Thank you for bonding with your MVP and with us!
          </p>
          <Image
            src={point}
            alt="Pointing Hand"
            width={78}
            height={78}
            className="inline-block mt-1"
          />
        </div>
      </div>
    </div>
    <CompanionGuide />
    </>
  );
};

export default DataDeletion;
