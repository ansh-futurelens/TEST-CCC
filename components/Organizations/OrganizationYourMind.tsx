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
        className={`faq-question ${isOpen ? "faq-question-open" : "faq-question-closed"}`}
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

const OrganizationYourMind: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who should participate in the Program?",
      answer:
        "Everyone! The program is designed for all employees regardless of role or seniority. The wider the participation, the more impactful are the changes.",
    },
    {
      question: "Can we customize the program to fit our organization's specific needs?",
      answer:
        "Absolutely! The modular design allows you to select which areas to prioritize. Your Q Guide can support you in developing the learning plan that is best suited for your focus areas.",
    },
    {
      question: "Can we get help promoting the program and app to our employees?",
      answer:
        "We provide a comprehensive communication toolkit including email templates, whitepapers, promotional videos, etc. to help drive adoption. Your Q Guide can also advise on best practices for employee engagement.",
    },
    {
      question: "How much administrative support is required to manage the program?",
      answer:
        "Minimal! The automated enrollment system, self-guided learning modules, and automated reminders significantly reduce administrative burden. Most organizations dedicate only 1-2 hours per week for program oversight.",
    },
    {
      question: "Is there dedicated support for enterprise clients?",
      answer:
        "Yes, all enterprise clients are assigned a dedicated account manager. We also provide priority technical support with guaranteed response times.",
    },
    {
      question: "How is employee data protected?",
      answer:
        "All our users' personal data (including your employees' data) is protected and not shared or sold. We also do not share the personal details of your employees' information with anyone. For instance, while we provide aggregate trends and insights, we do not share any individually or personally identifiable information with anyone outside Q Studio. Our algorithms are designed to run without human intervention and anonymously gather the data and insights.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-root">
      <div className="container-custom">
        <h2 className="faq-heading">What's on your mind?</h2>
        {faqs.map((faq, index) => (
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

export default OrganizationYourMind;
