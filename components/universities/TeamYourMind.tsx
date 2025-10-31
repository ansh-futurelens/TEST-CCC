import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CONTENT_CONFIG } from "@/config/contentConfig";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  const renderAnswer = (htmlString: string) => (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );

  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  const animationStyles = useSpring({
    maxHeight: isOpen ? contentHeight : 0,
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
    config: {
      tension: 150,
      friction: 25,
      clamp: false,
    },
  });

  return (
    <div className="border-b border-[#D8D4DD] py-4">
      <button
        onClick={onClick}
        className={`xl:text-1xl flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left text-lg font-medium transition-all duration-200 hover:bg-[#EDEDED] focus:outline-none sm:text-lg md:text-xl lg:text-center lg:text-xl 2xl:text-2xl ${isOpen ? "text-[#279C97]" : "text-[#1E1F1F]"}`}
      >
        <span>{question}</span>
        <span className="ml-2 text-2xl font-light text-gray-700 sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      <animated.div
        style={animationStyles}
        className="xl:text-1xl px-3 pt-2 text-lg text-gray-800 sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl"
      >
        <div
          ref={contentRef}
          style={{
            paddingBottom: 16,
            willChange: "max-height, opacity",
          }}
        >
          {renderAnswer(answer)}
        </div>
      </animated.div>
    </div>
  );
};

const TeamYourMind: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const SECTION = CONTENT_CONFIG.UNIVERSITIES_PAGE.TEAM_YOUR_MIND;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full w-screen bg-[#F0F0F0] px-4 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-20">
      <div className="container-custom h-full">
        <h2 className="mb-8 text-left text-xl font-bold text-teal-900 sm:text-2xl md:text-2xl lg:text-center lg:text-3xl xl:text-4xl 2xl:text-5xl">
          {SECTION.HEADING}
        </h2>

        {SECTION.FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.QUESTION}
            answer={faq.ANSWER}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamYourMind;
