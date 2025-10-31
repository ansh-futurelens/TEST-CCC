import React, { useState } from "react";

interface DownloadFormProps {
  onClose: () => void;
}

const DownloadForm: React.FC<DownloadFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    companyName: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const allFieldsFilled =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    isEmailValid(formData.emailAddress) &&
    formData.companyName.trim();

  return (
    <div
      className="relative mx-auto my-10 w-full max-w-6xl transform overflow-visible rounded-4xl shadow-2xl transition-all duration-300"
      style={{
        backgroundImage: `url(/media/team/download_bg.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full bg-[#02514B] p-3 text-white transition duration-200"
        aria-label="Close form"
      >
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="w-full rounded-4xl p-6 backdrop-blur-md sm:p-10 md:p-12">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="/media/team/EBook.webp"
              alt="Form Visual"
              className="h-auto w-100 rounded-xl object-contain"
            />
          </div>

          <div>
            <div className="mb-10">
              <h2 className="text-[34px] font-bold text-white">
                Download The Mind Skills Advantage eBook
              </h2>
              <h3 className="mt-6 text-[24px] text-white">
                Fill out your name and email address below.
              </h3>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  className="h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-3 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  className="h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-3 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={(e) => handleChange("emailAddress", e.target.value)}
                  className="h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-3 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:outline-none md:col-span-2"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  className="h-[64px] w-full rounded-2xl bg-[#024E48] px-4 py-3 text-lg text-white placeholder-white transition duration-200 hover:bg-[#02514B] focus:outline-none md:col-span-2"
                />
              </div>

              <div className="flex w-full justify-center pt-6">
                <button
                  type="submit"
                  className={`rounded-full px-6 py-3 text-[24px] font-medium text-white transition-colors duration-300 ease-in-out select-none ${
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
    </div>
  );
};

export default DownloadForm;
