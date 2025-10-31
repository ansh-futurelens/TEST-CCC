import { CONTENT_CONFIG } from "@/config/contentConfig";
import Header from "../common/Header";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import { useCachedImage } from "../useCachedImage";

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
  title: string;
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
          <h2 className="mb-6 text-center text-4xl font-bold text-white">Discover what’s possible</h2>
          <h3 className="mx-auto mb-8 max-w-7xl text-center text-2xl text-white md:mb-12">
          Learn how Q Studio’s Mind Skills can be a competitive advantage for your students and a differentiator for your institution.
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
                id="role"
                label="Role"
                type="text"
                placeholder="Role"
              />
              <FormInputField
                id="emailAddress"
                label="Email"
                type="email"
                placeholder="Email Address"
              />
             
              <FormInputField
                id="institutionName"
                label="Institution Name"
                type="text"
                placeholder="Institution Name"
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

const UniversitiesHeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const HERO = CONTENT_CONFIG.UNIVERSITIES_PAGE.HERO;
  const bgImage = useCachedImage(HERO.BG_IMAGE);

  return (
    <div
      className="hero-root universities-hero-root"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#4eaea9"
          activeTextColor="#FFFFFF"
          hoverBgColor="#4eaea9"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#02514B"
          buttonHoverColor="#007c74"
        />

        <div className="hero-content-wrapper universities-hero-content">
          <div className="hero-left-section universities-left">
            <div className="hero-heading-container">
              <h1 className="hero-heading-primary very-bolder">
                {HERO.HEADING_PRIMARY} <br /> {HERO.HEADING_SECONDARY}
              </h1>

              <h2 className="hero-paragraph">{HERO.SUB_HEADING}</h2>
            </div>

            <div className="hero-button-wrapper">
              <a
                className="hero-button"
                onClick={toggleModal}
                target="_blank"
                rel="noopener noreferrer"
              >
                {HERO.BUTTON_PRIMARY.TEXT}
              </a>
            </div>
          </div>

          <div className="hero-right-section universities-right">
            <LazyImage
              src={HERO.IMAGE.SRC}
              alt={HERO.IMAGE.ALT}
              title={HERO.IMAGE.ALT}
              className="hero-image"
            />
          </div>
        </div>
      </div>

      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};
export default UniversitiesHeroSection;
