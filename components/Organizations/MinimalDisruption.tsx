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

const MinimalDisruption = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="h-full w-screen bg-[#F3F3F3] select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom ">
        <div className="flex flex-col lg:items-center justify-center 2xl:px-20 3xl:px-50 lg:text-center">
          <h2 className="font-sans !font-bold text-2xl sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-teal-900 mx-auto lg:max-w-lg xl:max-w-7xl 2xl:text-[30px] 3xl:text-[40px]">
            An easy roll-out process with minimal
            <span className="block">disruption to your business.</span>
          </h2>
        </div>

        <div className="py-10 w-full flex justify-center">
          <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-7xl gap-6">
            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/organizations/train.png"
                alt="Train"
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Train
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Employees learn, practice, and build Mind Skills.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/organizations/transform.png"
                alt="Transform"
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Transform
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Teams transform work environments and culture.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/organizations/track.png"
                alt="Track"
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Track
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Leaders monitor progress and business impact.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 2xl:pt-10  w-full   ">
          <div className="flex flex-col   w-full  gap-6">
            <h2 className="font-sans !font-bold text-2xl  sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-gray-800  2xl:text-[30px] 3xl:text-[40px] ">
              What’s included in The WellAbove Program
            </h2>
            <div className="relative mt-10">
              <div className="absolute lg:left-[320px] top-0 bottom-0 w-[2px] bg-gray-line"></div>

              <div className="absolute lg:left-[313px] -left-[5px] z-10">
                <div className="absolute -top-[2px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[270px]  lg:top-[320px] top-[450px]  w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[520px]   lg:top-[640px] top-[880px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[780px]  lg:top-[930px] top-[1330px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
              </div>
              <div className="flex flex-col gap-14">
                {[
                  {
                    img: "/media/organizations/workshops.png",
                    title: "Digital workshops",
                    desc: "Multi-part workshop series designed for different levels and outcomes; drives Program engagement and continuity.",
                  },
                  {
                    img: "/media/organizations/learning.png",
                    title: "Learning platform",
                    desc: "Access to MyQStudio - the only Mind Skills app for peak performance.",
                  },
                  {
                    img: "/media/organizations/enablers.png",
                    title: "Enablers",
                    desc: "Friction-less adoption with Communication toolkit, Surveys, Webinars - all hosted on SaaS infrastructure.",
                  },
                  {
                    img: "/media/organizations/reporting.png",
                    title: "Reporting & analytics",
                    desc: "Insights to leadership on learning engagement and progress, as well as impact on key business metrics.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row ml-[40px] lg:ml-0 items-start gap-8 relative"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl lg:w-64 w-full h-48 object-cover"
                      />
                    </div>

                    <div className="flex flex-col lg:ml-[100px] mt-2">
                      <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-teal-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[24px] ">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <div className="flex lg:justify-center h-auto pt-14 ">
            <a
              
              target="_blank"
              rel="noopener noreferrer"
              className="!py-5 !px-7 bg-[#50418C] hover:bg-[#7B6CB9] font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
              onClick={toggleModal}
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default MinimalDisruption;
