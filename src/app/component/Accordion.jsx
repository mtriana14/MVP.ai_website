"use client";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "What is MVP.ai?",
    answer: (
      <p className="">
        <span className="font-extrabold">MVP.ai</span> is your{" "}
        <span className="font-extrabold italic">
          Multifunctional Virtual Partner
        </span>{" "}
        — an emotionally intelligent AI companion that grows, evolves, and bonds
        with you through meaningful conversation.
      </p>
    ),
  },
  { question: "Is MVP.ai like ChatGPT or Replika?", answer: "Not exactly. While it uses advanced AI, MVP.ai is focused on emotional connection, personal growth, and memory-based bonding \u2014 like a best friend who remembers, adapts, and truly feels present." },
  {
    question: "Can I choose my AI’s personality?",
    answer:
      "Yes! At launch, you\u2019ll be able to choose from unique MVP personalities like Kai and Rin, each with their own tone, energy, and bond style.",
  },
  { question: "Does my MVP remember what I say?", answer: "Yes \u2014 through Memory Shards. These let your MVP remember past conversations, emotions, and key moments to deepen your connection over time." },
  { question: "Is my data safe?", answer: "Absolutely. We don\u2019t sell your data, and you\u2019ll always have control over your chat history, memory settings, and personalization preferences." },
  { question: "Is MVP.ai for kids?", answer: "MVP.ai is designed for users ages 13 and up. A future version for younger users may be developed, but the current product is best for teens and adults."},
  { question: "Will it cost money?", answer: "MVP.ai will launch with free access and an optional premium tier called MVP+ Ascend. More info on pricing will be announced closer to launch." },
];

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-[#DD9BFF] w-[95%] sm:w-[80%] md:w-[80%] lg:w-[60%] mx-auto p-12 rounded-3xl shadow-md text-black space-y-2 border-black border-4 text-2xl">
      <h2 className="text-center font-bold text-xl mb-2 font-urbanist">
        FAQs
        <br />
        <span className="mt-3 font-urbanist">(Frequently Asked Questions)</span>
      </h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            className="w-full text-left py-2 px-3 transition flex justify-between items-center font-bold"
            onClick={() => toggle(index)}
          >
            <span>
              {index + 1}. {faq.question}
            </span>
            <span>
              {activeIndex === index ? (
                <IoIosArrowDown className="cursor-pointer w-6 h-6" />
              ) : (
                <IoIosArrowUp className="cursor-pointer w-6 h-6" />
              )}
            </span>
          </button>
          <hr className="my-4 h-[3px] bg-black border-0" />

          {activeIndex === index && (
            <div className="bg-white text-black p-5 shadow-inner mb-6 border-black border-4 rounded-xl font-dm text-xl font-medium">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
