"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const defaultValues = {
  email: "",
};

function Header() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    const loadingToastId = toast.loading("Sending message...");
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast.success("Welcome! You've successfully joined MVP.ai", {
        id: loadingToastId,
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again later.", {
        id: loadingToastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header
      className="lg:bg-[url('/assets/head.jpg')] bg-[url('/assets/mobileheader.svg')] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center h-[calc(100vh-6vh)]"
      role="banner"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="lg:w-[600px] w-[70%] space-y-10 text-center"
      >
        <h1 className="lg:text-[65px] text-[35px] text-white leading-none font-bold text-shadow-lg">
          Meet Your AI Companion
        </h1>

        <p className="text-white text-[17px] lg:text-[18px] text-shadow-lg max-w-prose mx-auto">
          Have fun, learn anything, and build an elevating bond with your own
          personality-packed MVP!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-5 flex flex-col lg:flex-row items-center"
          aria-label="Join early access form"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Your Email"
              className="bg-[#DFDFDF] opacity-80 text-[16px] w-[250px] lg:w-[364px] h-[55px] lg:h-[63px] rounded-full pl-5 text-black"
              required
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="font-bold lg:w-[217px] cursor-pointer w-[180px] h-[60px] lg:h-[70px] border-b-10 border-t-4 border-x-6 bg-white rounded-full text-center text-sm lg:text-[16px] border-black"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Join the community"}
          </motion.button>
        </form>
        <nav
          className="gap-5 flex justify-center items-center mt-4"
          aria-label="Download links"
        >
          <a
            href="https://apps.apple.com/us/app/mvp-ai/id6748925755"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/apple.svg"
              alt="Download MVP.ai on the Apple App Store"
              width={120}
              height={40}
              className="lg:w-[200px] lg:h-[70px] w-[130px] h-[40px]"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mvp.untitled1mvpai&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/google.svg"
              alt="Get MVP.ai on Google Play"
              width={180}
              height={53}
              className="lg:w-[200px] lg:h-[70px] w-[130px] h-[40px]"
            />
          </a>
        </nav>
      </motion.div>
    </header>
  );
}

export default Header;