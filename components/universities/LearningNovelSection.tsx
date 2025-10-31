import { CONTENT_CONFIG } from "@/config/contentConfig";
import React, { useEffect, useState, useRef, ReactNode } from "react";

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
interface LazyBackgroundProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

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

const Form: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
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
          <h2 className="mb-6 text-center text-4xl font-bold text-white">Team Registration</h2>
          <h3 className="mx-auto mb-8 max-w-7xl text-center text-2xl text-white md:mb-12">
            Are you ready to elevate your team's performance through the power of Mind Skills? Our
            comprehensive team training program is launching soon. Registration is now open!
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
                id="companyname"
                label="Company"
                type="text"
                placeholder="Company Name"
              />
              <FormInputField
                id="members"
                label="members"
                type="text"
                placeholder="Number Of Team Members"
              />
            </div>

            <div className="flex w-full pt-14 lg:justify-center">
              <button
                type="submit"
                className="rounded-full bg-[#71604D] px-7 py-4 text-2xl font-medium text-[#C7C2BB] transition duration-300 ease-in-out select-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </LazyBackground>
    </div>
  );
};

const LearningNovelSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const SECTION = CONTENT_CONFIG.UNIVERSITIES_PAGE.QSTUDIO_SECTION;

  return (
    <div className="h-full min-h-screen w-screen bg-[#F3F3F3] px-4 py-16 select-none sm:px-8 sm:py-20 md:px-10 lg:px-20">
      <div className="container-custom">
        <div className="flex flex-col justify-center lg:items-center lg:text-center 2xl:px-20">
          <h2 className="!sm:leading-8 !sm:tracking-wider 3xl:text-[40px] mx-auto font-sans text-2xl !font-bold text-teal-900 sm:text-[30px] sm:font-normal lg:max-w-lg xl:max-w-7xl 2xl:text-[40px]">
            {SECTION.HEADING}
          </h2>
          <h6 className="mt-4 text-base leading-relaxed font-normal text-gray-800 sm:text-lg md:text-xl lg:text-[22px] lg:font-medium xl:mx-auto xl:max-w-5xl xl:text-[24px] 2xl:text-[26px]">
            {SECTION.SUB_HEADING}
          </h6>
        </div>

        <div className="flex w-full justify-center mt-14">
          <div className="flex w-full max-w-7xl flex-col items-start justify-between gap-6 xl:flex-row">
            {SECTION.CARDS.map((card, i) => (
              <div key={i} className="flex w-full flex-col items-center text-center">
                <LazyImage
                  src={card.img}
                  alt={card.title}
                  className="mb-4 h-44 w-44 object-contain select-none sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-54 lg:w-54"
                />
                <h4 className="text-[26px] font-bold text-red-700 sm:text-[28px] md:text-[30px] mt-2">
                  {card.title}
                </h4>
                <p className="!mx-auto mt-2 !max-w-sm !text-[22px] font-normal text-gray-800 sm:!text-[18px] md:!text-[24px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full pt-5 2xl:pt-10">
          <div className="flex w-full flex-col">
            <h2 className="!sm:leading-8 !sm:tracking-wider 3xl:text-[40px] font-sans text-[30px] !font-bold text-gray-800 sm:text-[30px] sm:font-normal 2xl:text-[40px]">
              {SECTION.WHAT_TO_EXPECT.HEADING}
            </h2>

            <div className="relative mt-14">
              <div className="bg-gray-line absolute top-0 bottom-0 w-[2px] lg:left-[320px]"></div>
              <div className="absolute -left-[5px] z-10 lg:left-[313px]">
                {SECTION.WHAT_TO_EXPECT.STEPS.map((_, idx) => (
                  <div className="absolute  z-10 ">
                <div className="absolute top-[20px] h-4 w-4 rounded-full bg-gray-800 shadow-md"></div>
                <div className="absolute top-[450px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[320px] xl:top-[270px]"></div>
                <div className="absolute top-[880px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[730px] xl:top-[520px]"></div>
                <div className="absolute top-[1350px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[1099px] xl:top-[790px]"></div>
                <div className="absolute top-[1750px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[1400px] xl:top-[1020px]"></div>
              </div>
                ))}
              </div>

              <div className="flex flex-col gap-14">
                {SECTION.WHAT_TO_EXPECT.STEPS.map((step, index) => (
                  <div
                    key={index}
                    className="relative ml-[40px] flex flex-col items-start gap-8 lg:ml-0 lg:flex-row"
                  >
                    <div className="flex-shrink-0">
                      <LazyImage
                        src={step.img}
                        alt={step.title}
                        className="h-48 w-full rounded-2xl object-cover lg:w-64"
                      />
                    </div>
                    <div className="mt-2 flex flex-col lg:ml-[100px]">
                      <h4 className="text-[26px] font-bold text-teal-900 sm:text-[28px] md:text-[30px]">
                        {step.title}
                      </h4>
                      <p className="mt-2 !text-[22px] font-normal text-gray-800 sm:!text-[18px] md:!text-[24px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex h-auto pt-14 lg:justify-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#279C97] !px-7 !py-5 text-2xl font-medium text-white antialiased transition duration-300 ease-in-out select-none hover:bg-[#4BC7C1]"
              onClick={toggleModal}
            >
              {SECTION.BUTTON.TEXT}
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default LearningNovelSection;
