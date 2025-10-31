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

  const industryOptions: SelectOption[] = [
    { value: "education", label: "Education" },
    { value: "healthcare", label: "Healthcare" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "retail", label: "Retail" },
    { value: "technology", label: "Technology" },
    { value: "banking_finance", label: "Banking & Finance" },
    { value: "hospitality", label: "Hospitality" },
    { value: "media", label: "Media" },
    { value: "transportation", label: "Transportation" },
    { value: "government", label: "Government" },
    { value: "professional_services", label: "Professional Services" },
  ];

  const functionOptions: SelectOption[] = [
    { value: "function", label: "Function" },
    { value: "talent", label: "Talent" },
    { value: "sales_marketing", label: "Sales & Marketing" },
    { value: "operations", label: "Operations" },
    { value: "legal_compliance", label: "Legal & Compliance" },
    { value: "production", label: "Production" },
    { value: "it", label: "Information Technology" },
  ];

  const employeeCountOptions: SelectOption[] = [
    { value: "", label: "Number of Employees" },
    { value: "1-50", label: "1-50" },
    { value: "51-500", label: "51-500" },
    { value: "501-2000", label: "501-2000" },
    { value: "2001-5000", label: "2001-5000" },
    { value: "5000+", label: "5000+" },
  ];

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
            Experience the impact for yourself!
          </h2>
          <h3 className="text-white mb-8 md:mb-12 max-w-7xl mx-auto text-2xl text-center">
            Schedule a personalized demo to learn how Q Studio's Mind Skills
            Training can help your<br /> organization and employees.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInputField id="firstName" label="First Name" type="text" placeholder="First Name" />
              <FormInputField id="lastName" label="Last Name" type="text" placeholder="Last Name" />
              <FormInputField id="emailAddress" label="Email" type="email" placeholder="Email Address" />
              <FormInputField id="mobileNumber" label="Mobile" type="tel" placeholder="Mobile Number" />
              <FormInputField id="companyName" label="Company" type="text" placeholder="Company Name" />
              <FormSelectField id="industry" label="Industry" options={industryOptions} />
              <FormSelectField id="function" label="Function" options={functionOptions} />
              <FormSelectField id="employeeCount" label="Employees" options={employeeCountOptions} />
            </div>

            <div className="w-full flex lg:justify-center pt-14">
              <button
                type="submit"
                className="py-4 px-7 bg-[#71604D] font-medium text-2xl text-[#C7C2BB] rounded-full transition duration-300 ease-in-out select-none"
              >
                Submit
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

const EveryRole = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const CARDS = [
    {
      img: "/media/organizations/impact1.png",
      title: "Everyone",
      points: [
        "Adaptability",
        "Focus",
        "Collaboration",
        "Initiative",
        "Resilience",
        "Self-awareness",
      ],
    },
    {
      img: "/media/organizations/impact2.png",
      title: "Managers",
      points: [
        "Empathy",
        "Decisiveness",
        "Composure",
        "Flexibility",
        "Active listening",
        "Conflict mediation",
      ],
    },
    {
      img: "/media/organizations/impact3.png",
      title: "Leadership",
      points: [
        "Inspirational",
        "Confidence",
        "Authenticity",
        "Agility",
        "Vulnerability",
        "Strategic thinking",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 select-none overflow-hidden">
      <div className="container-custom h-full pt-16 sm:pt-20 lg:pt-28 xl:pt-34 px-4 sm:px-6 lg:px-10 2xl:px-20">
        <div className="flex flex-col lg:items-center justify-center lg:text-center mb-10">
          <h2
            className="font-sans font-bold text-teal-900 
                        text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] 2xl:text-[42px] 
                        leading-snug tracking-wide mx-auto max-w-4xl"
          >
            Mind Skills for every role and goal.
          </h2>

          <h6
            className="text-gray-800 mt-4 
                        text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 
                        font-normal lg:font-semibold xl:max-w-5xl xl:mx-auto leading-relaxed"
          >
            From frontline employees to C-suite executives, every person across
            an organization benefits when equipped with Mind Skills.
          </h6>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
            {CARDS.map((card, i) => (
              <div
                key={i}
                className="relative group 
                                w-full sm:w-full md:w-full lg:w-full xl:w-[45%] 2xl:w-[30%]
                                flex flex-col items-center text-center rounded-2xl overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full 
                                    h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] xl:h-[440px] 2xl:h-[460px]
                                    object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 bg-[#50418C]/95 
                                    rounded-2xl flex flex-col items-center justify-center 
                                    text-white opacity-0 group-hover:opacity-100 
                                    transition-all duration-500 ease-in-out p-4 sm:p-6 lg:p-8"
                >
                  <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-4 sm:mb-6">
                    {card.title}
                  </h2>

                  <div className="flex flex-col items-center space-y-3">
                    {card.points.map((point, idx) => (
                      <h3
                        key={idx}
                        className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-center"
                      >
                        {point}
                      </h3>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute bottom-4 left-4 
                                    text-white text-lg sm:text-xl md:text-2xl lg:text-3xl 
                                    font-semibold transition duration-500 ease-in-out group-hover:opacity-0"
                >
                  {card.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-8 pb-12">
          <button
            className="cursor-pointer py-3 px-6 sm:py-4 sm:px-8 
                        bg-[#50418C] hover:bg-[#7B6CB9] 
                        text-base sm:text-lg md:text-xl lg:text-2xl 
                        font-medium text-white rounded-full 
                        transition duration-300 ease-in-out"
            onClick={toggleModal}
          >
            Schedule a Demo
          </button>
        </div>
      </div>
      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}

    </div>
  );
};

export default EveryRole;
