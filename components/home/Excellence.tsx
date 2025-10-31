import React, { useState, useEffect, useRef } from "react";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

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
  onChange: (value: string) => void;
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
      onChange={(e) => onChange(e.target.value)}
      className="block h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:outline-none"
    />
  </div>
);

const Form: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    role: "",
    institution: "",
  });

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

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const allFieldsFilled =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    isEmailValid(formData.emailAddress) &&
    formData.role.trim() &&
    formData.institution.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allFieldsFilled) return;
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
      <div
        className="relative mx-auto my-10 w-full max-w-6xl transform overflow-visible rounded-4xl shadow-2xl transition-all duration-300"
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
          <h2 className="mb-6 text-center text-4xl font-bold text-white">
            Discover what's possible
          </h2>
          <h3 className="mx-auto mb-8 max-w-7xl text-center text-2xl text-white md:mb-12">
            Learn how Q Studio’s Mind Skills can be a competitive advantage for your students and a
            differentiator for your institution.
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInputField
                id="firstName"
                label="First Name"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(v) => setFormData((prev) => ({ ...prev, firstName: v }))}
              />
              <FormInputField
                id="lastName"
                label="Last Name"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(v) => setFormData((prev) => ({ ...prev, lastName: v }))}
              />

              <FormInputField
                id="role"
                label="Role"
                type="text"
                placeholder="Role"
                value={formData.role}
                onChange={(v) => setFormData((prev) => ({ ...prev, role: v }))}
              />
              <FormInputField
                id="emailAddress"
                label="Email"
                type="email"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={(v) => setFormData((prev) => ({ ...prev, emailAddress: v }))}
              />
              <FormInputField
                id="institution"
                label="institution"
                type="text"
                placeholder="Institution Name"
                value={formData.institution}
                onChange={(v) => setFormData((prev) => ({ ...prev, institution: v }))}
              />
            </div>

            <div className="flex w-full pt-14 lg:justify-center">
              <button
                type="submit"
                className={`rounded-full px-7 py-4 text-2xl font-medium text-white transition-colors duration-300 select-none ${
                  allFieldsFilled ? "bg-[#B8543D] hover:bg-[#E5684C]" : "bg-[#71604D]"
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

const Excellence: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = CONTENT_CONFIG.LANDING_PAGE.COLLABORATE;

  return (
    <div className="mind-power-root bg-gray-50">
      <div className="mind-power-container container-custom">
        <div className="mind-power-inner flex-col items-center gap-20 2xl:flex-row-reverse">
          <div className="mind-power-left">
            <h2 className="mind-power-heading">{config.HEADING}</h2>
            <h6 className="mind-power-paragraph-primary">{config.PARAGRAPH}</h6>

            <div className="mind-power-buttons-wrapper">
              <button onClick={() => setIsModalOpen(true)} className="mind-power-button-primary">
                {config.BUTTON_PRIMARY.TEXT}
              </button>

              <a
                href={config.BUTTON_SECONDARY.LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mind-power-button-secondary"
              >
                {config.BUTTON_SECONDARY.TEXT}
              </a>
            </div>
          </div>

          <div className="mind-power-right">
            <LazyImage src={config.IMAGE.SRC} alt={config.IMAGE.ALT} className="mind-power-image" />
          </div>
        </div>
      </div>

      {isModalOpen && <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Excellence;
