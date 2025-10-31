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
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ id, label, type, placeholder, value, onChange }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-xl bg-[#E8E8E8] px-4 py-5 text-[20px] text-gray-800 placeholder-gray-500 transition duration-200 hover:bg-[#DEDEDE] focus:border-teal-500 focus:ring-0 focus:outline-none"
    />
  </div>
);

const FormSelectField: React.FC<{
  id: string;
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
}> = ({ id, label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOptionLabel =
    options.find((option) => option.value === value)?.label || options[0].label;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (optionValue: string) => {
    onChange({ target: { name: id, value: optionValue } });
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <button
        type="button"
        id={id}
        className={`relative block w-full cursor-pointer rounded-xl bg-[#E8E8E8] px-4 py-5 pr-10 text-left text-lg transition duration-200 hover:bg-[#DEDEDE] focus:ring-0 focus:outline-none ${value === "" ? "text-gray-500" : "text-gray-900"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptionLabel}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg
            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-xl bg-[#D6D6D6] shadow-lg focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className={`block cursor-pointer px-4 py-3 text-lg ${
                  option.value === value ? "font-semibold" : "text-gray-900"
                } transition duration-150 ease-in-out hover:bg-[#BCBCBC] ${
                  option.value === "" && options[0].value === ""
                    ? "cursor-not-allowed opacity-50"
                    : ""
                } `}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Experience: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    companyName: "",
    industry: "",
    function: "",
    employeeCount: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    setIsSubmitted(true);
  };

  const industryOptions: SelectOption[] = [
    { value: "", label: "Education" },
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
    { value: "", label: "Finance" },
    { value: "talent", label: "Talent" },
    { value: "sales_marketing", label: "Sales & Marketing" },
    { value: "operations", label: "Operations" },
    { value: "legal_compliance", label: "Legal & Compliance" },
    { value: "production", label: "Production" },
    { value: "it", label: "Information Technology" },
  ];

  const employeeCountOptions: SelectOption[] = [
    { value: "", label: "1-50" },
    { value: "51-500", label: "51-500" },
    { value: "501-2000", label: "501-2000" },
    { value: "2001-5000", label: "2001-5000" },
    { value: "5000+", label: "5000+" },
  ];

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-20">
      <div className="container-custom w-full max-w-6xl">
        <div className="w-full rounded-4xl bg-[#F0F0F0] p-6 sm:p-10 md:p-12">
          <h2 className="mb-6 text-center text-[20px] font-bold text-teal-900  sm:text-[20px] md:text[25px] lg:text-[30px] xl:text-[34px]">
            Experience the impact for yourself!
          </h2>
          <h3 className="mx-auto mb-10 max-w-7xl text-18px text-gray-800 md:mb-10 md:text-[18px] lg:text-[24px]">
            Schedule a personalized demo to learn how Q Studio's Mind Skills Training can help your
            organization and employees.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInputField
                id="firstName"
                label="First Name"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <FormInputField
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <FormInputField
                id="emailAddress"
                label="Email Address"
                type="email"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
              <FormInputField
                id="mobileNumber"
                label="Mobile Number"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <FormInputField
                id="companyName"
                label="Company Name"
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
              <FormSelectField
                id="industry"
                label="Industry"
                options={industryOptions}
                value={formData.industry}
                onChange={handleChange}
              />
              <FormSelectField
                id="function"
                label="Function"
                options={functionOptions}
                value={formData.function}
                onChange={handleChange}
              />
              <FormSelectField
                id="employeeCount"
                label="Number of Employees"
                options={employeeCountOptions}
                value={formData.employeeCount}
                onChange={handleChange}
              />
            </div>

            <div className="w-full">
              <div className="flex h-auto pt-14 lg:justify-center">
                <a
                  href="https://apps.apple.com/in/app/id6621264428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#A099BE] !px-7 !py-5 text-2xl font-medium text-white antialiased transition duration-300 ease-in-out select-none"
                >
                  Submit
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {isSubmitted && (
        <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-2xl">
            <h3 className="mb-4 text-xl font-semibold text-teal-800">Submission Successful!</h3>
            <p className="mb-6 text-gray-600">
              Thank you for your interest. Your demo request has been logged.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="rounded-lg bg-teal-500 px-6 py-2 font-semibold text-white transition duration-200 hover:bg-teal-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Experience;
