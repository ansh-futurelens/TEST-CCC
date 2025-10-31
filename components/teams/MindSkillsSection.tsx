import React, { useState, useRef, useEffect } from "react";


interface SelectOption {
  value: string;
  label: string;
}


const FormInputField: React.FC<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
}> = ({ id, label, type, placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="block w-full px-4 py-4 bg-[#024E48] rounded-2xl 
        focus:outline-none focus:ring-0 text-white placeholder-white 
        text-lg transition duration-200 hover:bg-[#02514B] h-[64px]"
    />
  </div>
);


const FormSelectField: React.FC<{
  id: string;
  label: string;
  options: SelectOption[];
}> = ({ id, label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0].value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label || options[0].label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label htmlFor={id} className="sr-only">{label}</label>
      <button
        type="button"
        id={id}
        className="block w-full px-4 py-4 bg-[#024E48] rounded-2xl
          text-left text-lg text-white cursor-pointer relative pr-10
          h-[64px] flex items-center justify-between hover:bg-[#02514B]
          focus:outline-none focus:ring-0 transition duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute z-[1000] left-0 w-full bg-[#01776F] rounded-xl shadow-lg"
          style={{ bottom: "100%", marginBottom: "-200px" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => { setSelected(option.value); setIsOpen(false); }}
              className={`block px-4 py-4 text-lg cursor-pointer 
                ${option.value === selected ? "font-semibold text-white" : "text-white"}
                hover:bg-[#016962] transition duration-150 ease-in-out`}
              role="option"
              aria-selected={option.value === selected}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


const Form: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 flex items-center justify-center p-4">
      <div
        className="relative rounded-4xl max-w-6xl w-full mx-auto my-10 shadow-2xl overflow-visible transform transition-all duration-300"
        style={{
          backgroundImage: `url('/media/team/download_bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-[#02514B] text-white rounded-full flex items-center justify-center  transition duration-200"
          aria-label="Close modal"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="backdrop-blur-md rounded-4xl p-6 sm:p-10 md:p-12 w-full">
          <h2 className="text-4xl font-bold text-center text-white mb-6">
            Team Registration
          </h2>
          <h3 className="text-white mb-8 md:mb-12 max-w-7xl mx-auto text-2xl text-center">
            Are you ready to elevate your team's performance through the power of Mind Skills? Our comprehensive team training program is launching soon. Registration is now open!

          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInputField id="firstName" label="First Name" type="text" placeholder="First Name" />
              <FormInputField id="lastName" label="Last Name" type="text" placeholder="Last Name" />
              <FormInputField id="emailAddress" label="Email" type="email" placeholder="Email Address" />
              <FormInputField id="companyname" label="Company" type="text" placeholder="Company Name" />
              <FormInputField id="members" label="members" type="text" placeholder="Number Of Team Members" />
            </div>

            <div className="w-full flex lg:justify-center pt-14">
              <button
                type="submit"
                className="py-4 px-7 bg-[#71604D] font-medium text-2xl text-[#C7C2BB] rounded-full transition duration-300 ease-in-out select-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[60]">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">Submission Successful!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest. Your demo request has been logged.
            </p>
            <button
              onClick={() => { setIsSubmitted(false); onClose(); }}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


const MindSkillsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const CARDS = [
    {
      img: "/media/team/department1.png",
      title: "Leadership",
      desc: "Clear strategic thinking and effective decision-making directly impacts growth and stakeholder confidence.",
      points: [
        "Motivate and create safe space",
        "Maintain a clear mind in high-pressure",
        "Agile and adaptive during disruptions",
        "Fully engaged in stakeholder interactions",
      ],
    },
    {
      img: "/media/team/department2.png",
      title: "Sales",
      desc: "Increase new lead generation, improve deal conversion rate, improve customer retention",
      points: [
        "Sustained momentum even when faced with losses",
        "Authentic connections with customers",
        "Staying focused on targets",
        "Prioritize facts and data, rather than getting influenced by biases",
      ],
    },
    {
      img: "/media/team/department3.png",
      title: "Operations",
      desc: "Improve efficiency, maintain quality standards, optimize productivity",
      points: [
        "Sustained focus over long durations minimizing defect rates",
        "Higher productivity with improved engagement",
        "Being fully present helps identify safety issues",
        "Consistent throughput even during high-demand periods",
      ],
    },
    {
      img: "/media/team/department4.png",
      title: "Finance",
      desc: "Accurate budgeting and financial reporting, insightful data for decision making, cost optimization",
      points: [
        "Enhanced analytical reasoning",
        "Minimize emotion-led decisions during high-pressure periods",
        "Sustained attention helps prevent and detect errors",
        "Enhanced cross-functional collaboration",
      ],
    },
    {
      img: "/media/team/department5.png",
      title: "Human Resources",
      desc: "Improved retention rates, enhanced employee experience and engagement, recruiting right talent when needed",
      points: [
        "Critical, unbiased approach to candidate evaluation",
        "Active listening to understand employee concerns",
        "Objectivity in performance reviews",
        "Guide others through uncertainty and changes",
      ],
    },
    {
      img: "/media/team/department6.png",
      title: "Information Technology",
      desc: "Faster resolution to outages, on-time deployment, effective collaboration, timely detection of security breaches",
      points: [
        "Sustained attention improves threat detection",
        "Critical evaluation of procedures and protocols",
        "Clear thinking during critical outages and deadlines",
        "Effective communication and collaboration with users",
      ],
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const handleButtonClick = () => {
    setShowAll(true);
  };

  const displayedCards = showAll ? CARDS : CARDS.slice(0, 3);

  return (
    <div className="min-h-screen h-full w-screen bg-gray-50 select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col lg:items-center justify-center 2xl:px-20 3xl:px-50 lg:text-center">
          <h2 className="font-sans !font-bold text-2xl sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-teal-900 mx-auto lg:max-w-lg xl:max-w-7xl 2xl:text-[30px] 3xl:text-[40px]">
            Mind Skills are a performance multiplier for your team.
          </h2>
        </div>

        <div className="w-full flex justify-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
            {displayedCards.map((card, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center w-full xl:w-[32%] group"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-44 sm:w-48 md:w-52 lg:w-full h-44 sm:h-48 md:h-52 lg:h-[500px] object-cover rounded-2xl select-none transition duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-teal-600 rounded-2xl text-white p-5 flex flex-col  items-start opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out z-20 ">
                  <h2 className="mb-4 text-start  2xl:text-[18px] xl:text-[20px] lg:text-[14px]  2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto font-semibold leading-7">
                    {card.desc}
                  </h2>
                  <ul className="list-disc list-inside space-y-1 text-start text-xl">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-4 left-4 z-10 text-white text-2xl font-semibold transition duration-500 ease-in-out group-hover:opacity-0">
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div className="flex lg:justify-center h-auto pt-8 ">
            <button
              onClick={() => {
                handleButtonClick();
                if (!showAll) return;
                toggleModal();
              }}
              className="cursor-pointer !py-4 !px-7 bg-teal-600 hover:bg-teal-button2-hover font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
            >
              {showAll ? "Get Started" : "View all Teams"}
            </button>


          </div>
        </div>
      </div>
      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default MindSkillsSection;
