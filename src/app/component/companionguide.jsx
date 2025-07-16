"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import guideData from "../../data/guideData.json";
import questionMark from "../../../public/assets/QuestionMark.png";
import exclamationMark from "../../../public/assets/ExclamationMark.png";

const CompanionGuide = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [hasUnreadAnswer, setHasUnreadAnswer] = useState(false);
  const [typedIntro, setTypedIntro] = useState("");
  const [typedAnswer, setTypedAnswer] = useState("");

  const typingIndexRef = useRef(0);
  const answerIndexRef = useRef(0);

  const defaultIntro = "Hey hey! I’m Kai, your cool MVP guide. Got a question for me? Pick a topic and I’ll help!";

  const handleToggle = () => {
    if (isOpen && selectedQuestion) {
      setHasUnreadAnswer(true);
    } else if (!isOpen && selectedQuestion) {
      setHasUnreadAnswer(false);
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (selectedQuestion) {
      const fullAnswer = selectedQuestion.answer;
      setTypedAnswer("");
      answerIndexRef.current = 0;

      const interval = setInterval(() => {
        const i = answerIndexRef.current;
        if (i < fullAnswer.length) {
          setTypedAnswer((prev) => prev + fullAnswer.charAt(i));
          answerIndexRef.current += 1;
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [selectedQuestion]);

  useEffect(() => {
    const fullIntro = selectedTopic ? selectedTopic.intro : defaultIntro;
    setTypedIntro("");
    typingIndexRef.current = 0;

    const interval = setInterval(() => {
      const i = typingIndexRef.current;
      if (i < fullIntro.length) {
        setTypedIntro((prev) => prev + fullIntro.charAt(i));
        typingIndexRef.current += 1;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [selectedTopic]);

  const colorMap = {
    Vision: "bg-[#F9C74F]",
    Philosophy: "bg-[#7209B7]",
    Lore: "bg-[#2BDCFF]",
    Support: "bg-[#F3722C]",
  };

  const emojiMap = {
    Vision: "⭐",
    Philosophy: "🧠",
    Lore: "🌀",
    Support: "🛠️",
  };

  const textColorMap = {
    Vision: "text-black",
    Philosophy: "text-white",
    Lore: "text-black",
    Support: "text-black",
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 group font-dm">
          <button onClick={handleToggle} className="relative w-[115px] h-[115px] cursor-pointer">
            <div className="absolute -top-24 -left-32 w-[190px] h-[120px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Image
                src="/assets/ChatBubble.svg"
                alt="Chat Bubble"
                width={190}
                height={120}
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 text-sm font-bold text-black text-center leading-snug">
                Hey, click on me to activate Guide Chat Mode!
              </div>
            </div>
            <Image src="/assets/RainbowRectangle.png" alt="Rainbow BG" width={115} height={115} className="absolute top-0 left-0 w-full h-full" unoptimized />
            <Image src="/assets/Visor.png" alt="Visor" width={80} height={80} className="absolute -top-4 -right-9 rotate-25" unoptimized />
            <Image src="/assets/KaiHead2.png" alt="Kai" width={90} height={90} className="absolute top-0 left-0 w-[110px] h-[110px] object-contain" unoptimized />
            {hasUnreadAnswer && (
              <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow-md">
                1
              </div>
            )}
          </button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-12 w-[370px] rounded-[28px] bg-[#1e1e1e] text-white p-5 pb-0 z-50 border-6 border-black shadow-[8px_8px_0px_#000000]">
          <div className="flex items-center justify-between -mb-2">
            <h2 className="text-xl font-medium font-dm">Kai</h2>
            {!selectedTopic ? (
              <Image src="/assets/Visor.png" alt="Visor" width={64} height={64} className="pb-1" unoptimized />
            ) : (
              <div className={`flex items-center mb-4 px-3 py-1 border-white border-5 shadow-[4px_4px_0px_#FFFFFF] rounded-[10px] font-bold text-white text-sm ${colorMap[selectedTopic.title]}`}>
                <span className="mr-2">{emojiMap[selectedTopic.title]}</span>
                {selectedTopic.title}
              </div>
            )}
          </div>

          <div className="w-full h-[4px] rounded-xl bg-white mb-4" />

          {!selectedQuestion && (
            <div className="flex items-start mb-5">
              <Image src="/assets/PurpleChatBubble.png" alt="Chat Bubble" width={38} height={38} className="mr-2 mt-[2px]" unoptimized />
              <p className="text-[12px] font-semibold leading-snug font-dm whitespace-pre-line">{typedIntro}</p>
            </div>
          )}

          {!selectedTopic && (
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
              {guideData.topics.map((topic) => (
                <button
                  key={topic.title}
                  onClick={() => setSelectedTopic(topic)}
                  className={`${colorMap[topic.title]} w-30% h-[45px] border-white border-5 shadow-[4px_4px_0px_#FFFFFF] rounded-[10px] text-white px-4 py-2 cursor-pointer`}
                >
                  {emojiMap[topic.title]} {topic.title}
                </button>
              ))}
            </div>
          )}

          {selectedTopic && !selectedQuestion && (
            <>
              <div className="gap-3 mb-12 grid grid-cols-2">
                {selectedTopic.questions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedQuestion(q);
                      setHasUnreadAnswer(false);
                    }}
                    className={`${colorMap[selectedTopic.title]} ${textColorMap[selectedTopic.title]} text-white cursor-pointer w-full py-2 rounded-lg text-left text-sm shadow hover:brightness-90 transition flex items-center font-semibold`}
                  >
                    <Image src={questionMark} alt="Question Mark" height={30} width={30} className="object-contain mr-1" unoptimized />
                    {q.question}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setSelectedTopic(null)}
                className="bg-white text-black px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 transition absolute bottom-3"
              >
                Back to Topics
              </button>
            </>
          )}

          {selectedQuestion && (
            <>
              <div className="flex items-start mb-3">
                <Image src="/assets/PurpleChatBubble.png" alt="Chat Bubble" width={38} height={38} className="mr-2 mt-[2px]" unoptimized />
                <div className={`${colorMap[selectedTopic.title]} ${textColorMap[selectedTopic.title]} px-3 py-2 rounded-lg text-sm shadow flex items-center font-semibold text-white mb-2`}>
                  <Image src={questionMark} alt="Question Mark" width={20} height={20} className="object-contain mr-2" unoptimized />
                  {selectedQuestion.question}
                </div>
              </div>

              <div className={`${colorMap[selectedTopic.title]} ${textColorMap[selectedTopic.title]} p-4 rounded-lg mb-12 text-sm flex items-start shadow text-white font-semibold`}>
                <Image src={exclamationMark} alt="Exclamation Mark" width={24} height={24} className="mr-2 mt-1 object-contain" unoptimized />
                <p className="font-semibold text-white">{typedAnswer}</p>
              </div>

              <button
                onClick={() => setSelectedQuestion(null)}
                className="bg-white text-black px-4 py-2 rounded font-bold mb-3 cursor-pointer hover:bg-gray-200 transition bottom-3 absolute"
              >
                Back to Questions
              </button>
            </>
          )}

          <div className="-bottom-4 left-72 w-[72px] h-[72px] relative cursor-pointer" onClick={handleToggle}>
            <Image src="/assets/RainbowRectangle.png" alt="Rainbow BG" fill className="absolute top-0 left-0 w-full h-full shadow-[6px_6px_0px_#000000] rounded-[10px]" unoptimized />
            <Image src="/assets/KaiHead2.png" alt="Kai Icon" fill className="absolute flex top-1 left-1 w-[64px] h-[64px] object-contain" unoptimized />
          </div>
        </div>
      )}
    </>
  );
};

export default CompanionGuide;
