import { CONTENT_CONFIG } from "@/config/contentConfig";
import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

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
    <div className="faq-item">
      <button
        onClick={onClick}
        className={`faq-question-button ${isOpen ? "faq-question-open" : "faq-question-closed"}`}
      >
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "–" : "+"}</span>
      </button>

      <animated.div style={animationStyles} className="faq-answer-wrapper">
        <div ref={contentRef} className="faq-answer-content">
          {renderAnswer(answer)}
        </div>
      </animated.div>
    </div>
  );
};

const YourMind: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { TITLE_PRIMARY, FAQS } = CONTENT_CONFIG.INDIVIDUAL_PAGE.YOURMIND_SECTION;

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="yourmind-root">
      <div className="yourmind-container container-custom ">
        <h2 className="yourmind-heading">{TITLE_PRIMARY}</h2>

        {FAQS.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default YourMind;
