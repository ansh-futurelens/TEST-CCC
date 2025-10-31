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
    <div className="border-b border-[#D8D4DD] py-4 ">
      <button
        onClick={onClick}
        className={`flex justify-between items-center w-full text-left lg:text-center 
                    font-medium focus:outline-none text-lg sm:text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-2xl 
                    py-1.5 px-3 transition-all duration-200 rounded-md 
                    hover:bg-[#EDEDED] 
                    ${isOpen ? "text-[#279C97]" : "text-[#1E1F1F]"}`}
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

const TeamYourMind: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqs = [
    {
      question:
        "How much time should I expect to commit to this program weekly?",
      answer:
        "For consistent and noticeable progress, all you need is 10 minutes a day. If some days get too busy, that’s ok as long as you keep learning and practicing the skills and techniques.",
    },
    {
      question: "Can I access the training content offline?",
      answer:
        "Certain features of the app can be accessed offline if the information has been downloaded to your device when connected to the internet. You can continue to interact with many features of the app whether you are in a basement or in an airplane.",
    },
    {
      question: "How do I create my account and get started?",
      answer:
        "Your team lead will provide you with a unique access code and instructions for app onboarding. You can create an account using the code and your email id.",
    },
    {
      question: "Is my personal data and progress information secure?",
      answer:
        "All our users' data is protected and not shared or sold. We also do not share your personal details with your employer. For instance, while we provide aggregate trends and insights for your team as a whole through reports and dashboards, only you can access your individual data. Our algorithms are designed to run without human intervention.",
    },
    {
      question: "How can team leaders monitor their team's engagement?",
      answer:
        "The team leader, assigned at the time of signing up, will get periodic reports and insights on team engagement and progress.",
    },
    {
      question:
        "How can team leaders get support for implementation challenges?",
      answer:
        "A Q Guide is assigned to each team after signing up. Team leaders can reach out to their Q Guide with questions on implementation challenges, and any other advice relating to the Program.",
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
      <div className="container-custom h-full">
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

export default TeamYourMind;
