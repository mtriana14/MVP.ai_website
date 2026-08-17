"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";

const contactFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const defaultValues = {
  email: "",
};

function Footer() {
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
    <footer
      className="md:w-[90%] w-[95%] mx-auto mt-20 mb-10 md:flex items-center justify-between gap-8"
      aria-labelledby="footer-title"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="lg:text-start text-center"
      >
        <h2
          id="footer-title"
          className="lg:text-[47px] text-[26px] text-[#9801FF] leading-none font-bold"
        >
          Unlock the MVP.ai World
        </h2>
        <p className="text-black mt-5 text-[15px]">
           Join to experience the future of AI and human companionship.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="gap-5 my-7 flex flex-col lg:flex-row items-center"
          aria-label="Newsletter signup form"
        >
          <div className="flex flex-col">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              {...register("email")}
              id="footer-email"
              type="email"
              placeholder="Your Email"
              required
              aria-invalid={!!errors.email}
              className="bg-white border-black border text-[16px] w-[250px] lg:w-[364px] h-[45px] lg:h-[58px] rounded-full pl-5 text-black"
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
            disabled={isLoading}
            className="font-bold lg:w-[150px] cursor-pointer text-white w-[160px] h-[60px] lg:h-[60px] border-b-8 border-t-4 border-x-6 bg-[#F3ABC7] rounded-full text-center text-lg lg:text-[20px] border-black"
          >
            {isLoading ? "Signing up..." : "Sign up"}
          </motion.button>
        </form>
        <nav
          className="gap-12 flex lg:justify-start justify-center items-center"
          aria-label="Download links"
        >
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/apple.svg"
              alt="Download MVP.ai on the Apple App Store"
              width={219}
              height={70}
              className="lg:w-[204px] lg:h-[88px] w-[108px] h-[31px]"
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/google.svg"
              alt="Get MVP.ai on Google Play"
              width={219}
              height={72}
              className="lg:w-[204px] lg:h-[88px] w-[108px] h-[31px]"
            />
          </a>
        </nav>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center mt-5 lg:mt-0 w-full"
      >
        <Image
          src="/assets/cartoon.svg"
          alt="Cartoon illustration representing MVP.ai"
          width={326}
          height={326}
          className="w-[180px] md:w-[260px] lg:w-[326px]"
        />
        <nav className="flex gap-12 mt-4" aria-label="Social media">
          <Link
            href="https://www.reddit.com/user/youraimvp/"
            aria-label="MVP.ai Reddit"
          >
            <Image src="/assets/icon.svg" alt="" width={40} height={40} />
          </Link>
          <Link
            href="https://www.instagram.com/getmvp.ai?igsh=ODh2dXIyZWYzbzNz&utm_source=qr"
            aria-label="MVP.ai Instagram"
          >
            <Image src="/assets/insta.svg" alt="" width={40} height={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/company/youraimvp/"
            aria-label="MVP.ai LinkedIn"
          >
            <Image src="/assets/linkedin.svg" alt="" width={40} height={40} />
          </Link>
          <Link href="https://discord.gg/9hapN22P" aria-label="MVP.ai Discord">
            <Image src="/assets/discord.svg" alt="" width={40} height={40} />
          </Link>
        </nav>
      </motion.div>
    </footer>
  );
}

export default Footer;
