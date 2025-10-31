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

const CollaborateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="relative w-screen select-none bg-gray-50">
      <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex flex-col items-center 2xl:items-start justify-between gap-10 2xl:flex-row-reverse">
          <div className="flex flex-col 2xl:w-[60%] xl:pt-20 lg:pt-10 pt-10 z-10">
            <h2 className="font-sans !font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] 2xl:text-start lg:text-center">
              Collaborate, Innovate, Excel - Together.
            </h2>

            <h6 className="mt-8 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto">
              Teams that are mentally fit have higher engagement for a common
              goal, develop strong interpersonal bonds, create an environment
              where innovation flourishes, and recover from setbacks faster,
              together.
            </h6>

            <div className="flex flex-col lg:flex-col 2xl:flex-row lg:items-center 2xl:items-start justify-start lg:justify-center 2xl:justify-start items-start xl:mt-16 lg:mt-10 mt-6 gap-6 xl:items-center">
              <a

                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-teal-900 hover:bg-teal-800 font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out select-none"
                onClick={toggleModal}
              >
                Get Started
              </a>

              <a
                href="/teams"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lg md:text-xl 2xl:text-2xl text-gray-800 hover:text-teal-900 border-b border-gray-800 transition duration-300 ease-in-out lg:self-center"
              >
                Explore more
              </a>
            </div>
          </div>

          <div className="flex justify-center 2xl:w-[40%] select-none">
            <img
              src="/media/landing/collabrate.png"
              alt="Collaborate Illustration"
              className="w-[500px] max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}

    </div>
  );
};

export default CollaborateSection;
