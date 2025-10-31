import React, { useState, useRef, useEffect } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormInputField: React.FC<{
  id: string;
  label: string;
  type: string;
  placeholder: string;
}> = ({ id, label, type, placeholder }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      className="block h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:ring-0 focus:outline-none"
    />
  </div>
);

export const FormSelectField: React.FC<{
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
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <button
        type="button"
        id={id}
        className="relative block flex h-[64px] w-full cursor-pointer items-center justify-between rounded-2xl bg-[#024E48] px-4 py-4 pr-10 text-left text-lg text-white transition duration-200 hover:bg-[#02514B] focus:ring-0 focus:outline-none"
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
          className="absolute left-0 z-[1000] w-full rounded-xl bg-[#01776F] shadow-lg"
          style={{ bottom: "100%", marginBottom: "-200px" }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
              className={`block cursor-pointer px-4 py-4 text-lg ${option.value === selected ? "font-semibold text-white" : "text-white"} transition duration-150 ease-in-out hover:bg-[#016962]`}
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

const Form: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const [isButtonActive, setIsButtonActive] = useState(false);

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

  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("button[id]");
    const checkFormValidity = () => {
      let allFilled = true;
      inputs.forEach((input) => {
        if (!input.value.trim()) allFilled = false;
      });
      selects.forEach((select) => {
        if (
          (select as HTMLButtonElement).innerText === "Industry" ||
          (select as HTMLButtonElement).innerText === "Function" ||
          (select as HTMLButtonElement).innerText === "Number of Employees"
        ) {
          allFilled = false;
        }
      });
      setIsButtonActive(allFilled);
    };

    document.addEventListener("input", checkFormValidity);
    document.addEventListener("click", checkFormValidity);

    return () => {
      document.removeEventListener("input", checkFormValidity);
      document.removeEventListener("click", checkFormValidity);
    };
  }, []);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
      <div
        className="relative mx-auto my-10 w-full max-w-6xl transform overflow-visible rounded-4xl shadow-2xl"
        style={{
          backgroundImage: `url('/media/team/download_bg.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full bg-[#02514B] p-3 text-white transition duration-200"
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

        <div className="w-full rounded-4xl p-6 backdrop-blur-md sm:p-10 md:p-12">
          <h2 className="mb-6 text-center text-[34px] font-bold text-white">
            Experience the impact for yourself!
          </h2>
          <h3 className="mx-auto mb-8 max-w-7xl text-center text-2xl text-white md:mb-12">
            Schedule a personalized demo to learn how Q Studio's Mind Skills Training can help your
            <br /> organization and employees.
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInputField
                id="firstName"
                label="First Name"
                type="text"
                placeholder="First Name"
              />
              <FormInputField id="lastName" label="Last Name" type="text" placeholder="Last Name" />
              <FormInputField
                id="emailAddress"
                label="Email"
                type="email"
                placeholder="Email Address"
              />
              <FormInputField
                id="mobileNumber"
                label="Mobile"
                type="tel"
                placeholder="Mobile Number"
              />
              <FormInputField
                id="companyName"
                label="Company"
                type="text"
                placeholder="Company Name"
              />
              <FormSelectField id="industry" label="Industry" options={industryOptions} />
              <FormSelectField id="function" label="Function" options={functionOptions} />
              <FormSelectField
                id="employeeCount"
                label="Employees"
                options={employeeCountOptions}
              />
            </div>

            <div className="flex w-full pt-14 lg:justify-center">
              <button
                type="submit"
                className={`rounded-full px-7 py-4 text-2xl font-medium text-[#C7C2BB] transition duration-300 ease-in-out select-none ${
                  isButtonActive ? "bg-[#B8543D] hover:bg-[#E5684C]" : "bg-[#71604D]"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
