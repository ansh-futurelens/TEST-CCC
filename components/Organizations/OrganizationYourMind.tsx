import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const renderAnswer = (htmlString: string) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  return (
    <div className="border-b border-[#D8D4DD] py-4">
      <button
        onClick={onClick}
        className={`flex justify-between items-center w-full text-left lg:text-center 
                    font-medium focus:outline-none text-lg sm:text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-2xl 
                    py-1.5 px-3 transition-all duration-200 rounded-md 
                    hover:bg-[#EDEDED] 
                    ${isOpen ? "text-[#50418C]" : "text-[#1E1F1F]"}`}
      >
        <span>{question}</span>
        <span className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-light text-gray-700 ml-2">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="text-left text-gray-800 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-2xl pt-1 px-3">
          {renderAnswer(answer)}
        </div>
      )}
    </div>
  );
};

const OrganizationYourMind: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqs = [
    {
      question: "Who should participate in the Program?",
      answer:
        "Everyone! The program is designed for all employees regardless of role or seniority. The wider the participation, the more impactful are the changes.",
    },
    {
      question:
        "Can we customize the program to fit our organization's specific needs?",
      answer:
        "Absolutely! The modular design allows you to select which areas to prioritize. Your Q Guide can support you in developing the learning plan that is best suited for your focus areas.",
    },
    {
      question:
        "Can we get help promoting the program and app to our employees?",
      answer:
        "We provide a comprehensive communication toolkit including email templates, whitepapers, promotional videos, etc. to help drive adoption. Your Q Guide can also advise on best practices for employee engagement.",
    },
    {
      question:
        "How much administrative support is required to manage the program?",
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
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className=" h-full w-screen bg-[#F0F0F0] py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20 ">
      <div className="container-custom">
        <h2 className="font-bold text-left lg:text-center text-teal-900 mb-8 text-xl sm:text-2xl  md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          What's on your mind?
        </h2>

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndexes.includes(index)}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default OrganizationYourMind;
