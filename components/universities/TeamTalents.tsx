import { CONTENT_CONFIG } from "@/config/contentConfig";
import React, { useEffect, useState, useRef, ReactNode } from "react";

interface SelectOption {
  value: string;
  label: string;
}
interface LazyBackgroundProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

const FormInputField: React.FC<{
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  isTextarea?: boolean;
}> = ({ id, label, type = "text", placeholder, isTextarea }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className="block min-h-[120px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:ring-0 focus:outline-none"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="block h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:ring-0 focus:outline-none"
      />
    )}
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
              className={`block cursor-pointer px-4 py-4 text-lg ${
                option.value === selected ? "font-semibold text-white" : "text-white"
              } transition duration-150 ease-in-out hover:bg-[#016962]`}
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

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "getStarted" | "contactUs";
}

const LazyBackground: React.FC<LazyBackgroundProps> = ({ src, className, style, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        backgroundImage: isVisible ? `url(${src})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return <img ref={imgRef} src={isVisible ? src : ""} alt={alt} className={className} />;
};

const Form: React.FC<FormProps> = ({ isOpen, onClose, mode }) => {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
      <LazyBackground
        src="/media/team/download_bg.webp"
        className="relative mx-auto my-10 w-full max-w-6xl transform overflow-visible rounded-4xl shadow-2xl transition-all duration-300"
        style={{
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
          <h2 className="mb-6 text-center text-4xl font-bold text-white">
            {mode === "getStarted" ? "Team Registration" : "Contact Us"}
          </h2>

          {mode === "getStarted" && (
            <h3 className="mx-auto mb-8 max-w-7xl text-center text-2xl text-white md:mb-12">
              Are you ready to elevate your team's performance through the power of Mind Skills? Our
              comprehensive team training program is launching soon. Registration is now open!
            </h3>
          )}

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInputField
                id="firstName"
                label="First Name"
                type="text"
                placeholder="First Name"
              />
              <FormInputField id="lastName" label="Last Name" type="text" placeholder="Last Name" />

              {mode === "getStarted" && (
                <>
                  <FormInputField
                    id="emailAddress"
                    label="Email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <FormInputField
                    id="companyname"
                    label="Company"
                    type="text"
                    placeholder="Company Name"
                  />
                  <FormInputField
                    id="members"
                    label="Members"
                    type="text"
                    placeholder="Number Of Team Members"
                  />
                </>
              )}

              {mode === "contactUs" && (
                <>
                  <FormInputField
                    id="emailAddress"
                    label="Email"
                    type="email"
                    placeholder="Email Address"
                  />
                  <FormInputField
                    id="companyname"
                    label="Company"
                    type="text"
                    placeholder="Company Name"
                  />
                  <div className="md:col-span-2">
                    <FormInputField id="message" label="Message" placeholder="Message" isTextarea />
                  </div>
                </>
              )}
            </div>

            <div className="flex w-full pt-14 lg:justify-center">
              <button
                type="submit"
                className="rounded-full bg-[#71604D] px-7 py-4 text-2xl font-medium text-[#C7C2BB] transition duration-300 ease-in-out select-none"
              >
                {mode === "getStarted" ? "Register" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </LazyBackground>
    </div>
  );
};

const TeamTalent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"getStarted" | "contactUs">("getStarted");

  const openModal = (mode: "getStarted" | "contactUs") => {
    setModalMode(mode);
    setIsModalOpen(true);
  };
  const SECTION = CONTENT_CONFIG.UNIVERSITIES_PAGE.TEAM_TALENT;

  return (
    <div className="flex flex-col justify-center bg-[#F9F9F9] px-4 py-16 text-center sm:px-8 sm:py-20 md:px-10 lg:px-20">
      <h2 className="mb-6 text-left text-xl font-bold text-teal-900 sm:text-left md:text-left md:text-2xl lg:text-left lg:text-4xl xl:text-center xl:text-5xl">
        {SECTION.HEADING}
      </h2>
      <div className="w-full xl:flex xl:justify-center">
        <h3 className="max-w-3xl text-left text-xl text-gray-600 sm:text-left sm:text-lg md:text-left md:text-lg lg:text-left lg:text-xl xl:text-center xl:text-2xl">
          {SECTION.SUB_HEADING}
        </h3>
      </div>

      <div className="flex h-auto w-full justify-start pt-14 pb-12 sm:justify-start md:justify-start lg:justify-start xl:justify-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full cursor-pointer rounded-full bg-[#279C97] px-5 py-3 text-center text-lg font-medium text-white transition duration-300 ease-in-out select-none hover:bg-[#4BC7C1] sm:w-auto sm:px-7 sm:py-4 sm:text-2xl"
          onClick={() => openModal("getStarted")}
        >
          {SECTION.BUTTON_PRIMARY.TEXT}
        </a>
      </div>

      <h2 className="text-left text-base text-xl text-gray-800 sm:text-left md:text-left md:text-lg lg:text-left lg:text-xl xl:text-center xl:text-2xl">
        {SECTION.CONTACT_TEXT}{" "}
        <a
          onClick={() => openModal("contactUs")}
          className="cursor-pointer border-b-2 border-gray-400 text-gray-800 transition-colors duration-300 hover:border-red-700 hover:text-red-700"
        >
          {SECTION.CONTACT_LINK.TEXT}
        </a>
      </h2>

      {isModalOpen && (
        <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode={modalMode} />
      )}
    </div>
  );
};

export default TeamTalent;
