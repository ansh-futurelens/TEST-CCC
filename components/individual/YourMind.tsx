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
                    py-1 px-3 transition-all duration-200 rounded-md 
                    hover:bg-[#EDEDED] 
                    ${isOpen ? "text-red-700" : "text-dark-900"}`}
      >
        <span>{question}</span>
        <span className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-light text-gray-700 ml-2">
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="text-left  text-gray-800 text-lg sm:text-lg md:text-xl lg:text-xl xl:text-1xl 2xl:text-2xl pt-2 px-3">
          {renderAnswer(answer)}
        </div>
      )}
    </div>
  );
};

const YourMind: React.FC = () => {

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const faqs = [
    {
      question: "Is MyQStudio just about meditation?",
      answer:
        "MyQStudio offers a personalized approach to mental fitness—because “one size fits one.” We provide a structured system of science-backed concepts and proven techniques that you can easily follow and adopt. You’ll learn, practice, and build the Mind Skills most relevant to your specific situation and apply them to daily life. While meditation is one valuable technique we offer, MyQStudio includes many additional concepts and methods tailored to your individual needs.",
    },
    {
      question: "How will I measure my progress with MyQStudio?",
      answer: `
        <h2>You’ll notice progress in multiple ways:</h2>
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li class="mt-2" style="margin-left: 8px;">See immediate improvements and sustained gains over time</li>
          <li class="mt-2" style="margin-left: 8px;">Track your growth, consistency, and habits using MyQStudio's built-in tools</li>
          <li class="mt-2" style="margin-left: 8px;">Visualize your progress through a personalized journey map</li>
        </ul>
        <h2 style="margin-top: 16px;">Beyond data, the true measure of success is the quality of your experiences and positive life changes. Improved mental fitness positively impacts your focus, confidence, mindset, and even physiological metrics like sleep and energy levels.</h2>
      `,
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "You can cancel your subscription anytime by sending a request through the Help Center. Your access will continue until the end of your current billing period.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "We take the security of your personal information very seriously. We do not sell or share your data with any external entity. The only people who can see your info are you and us here at Q Studio.",
    },
    {
      question: "Can I access the app offline?",
      answer: "Certain features of the app can be accessed offline.",
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer:
        "You will not be able to use your app when your subscription period ends. Your progress will be securely retained for up to 12 months unless you ask us to delete your data.",
    },
  ];

  const handleToggle = (index: number) => {

    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); // close
    } else {
      setOpenIndexes([...openIndexes, index]); // open
    }
  };

  return (
    <div className=" h-full w-screen bg-[#F7F7F7] py-12 py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom h-full ">
        <h2 className="font-bold text-left lg:text-center text-teal-900 mb-8 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
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

export default YourMind;
