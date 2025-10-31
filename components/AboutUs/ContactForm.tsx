import React, { useEffect, useState } from "react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormInputField: React.FC<{
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  isTextarea?: boolean;
  value: string;
  onChange: (value: string) => void;
}> = ({ id, label, type = "text", placeholder, isTextarea, value, onChange }) => (
  <div className="w-full">
    <label htmlFor={id} className="sr-only">
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block min-h-[120px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white hover:bg-[#02514B] focus:outline-none"
      />
    ) : (
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-4 text-lg text-white placeholder-white hover:bg-[#02514B] focus:outline-none"
      />
    )}
  </div>
);

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    companyName: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const allFieldsFilled =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    isEmailValid(formData.emailAddress) &&
    formData.companyName.trim() &&
    formData.message.trim();

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className="relative mx-auto my-10 w-full max-w-6xl overflow-visible rounded-4xl shadow-2xl"
        style={{
          backgroundImage: "url('/media/team/download_bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full bg-[#02514B] p-3 text-white"
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
          <h2 className="mb-10 text-center text-[34px] font-bold text-white">Contact us</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormInputField
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(v) => handleChange("firstName", v)}
              />
              <FormInputField
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(v) => handleChange("lastName", v)}
              />
              <FormInputField
                id="emailAddress"
                label="Email"
                type="email"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={(v) => handleChange("emailAddress", v)}
              />
              <FormInputField
                id="companyName"
                label="Company"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(v) => handleChange("companyName", v)}
              />
              <div className="md:col-span-2">
                <FormInputField
                  id="message"
                  label="Message"
                  placeholder="Message"
                  isTextarea
                  value={formData.message}
                  onChange={(v) => handleChange("message", v)}
                />
              </div>
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

export default ContactForm;
