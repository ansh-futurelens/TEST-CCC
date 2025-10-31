import React, { useState, useRef, useEffect } from "react";

interface SelectOption {
    value: string;
    label: string;
}


const FormInputField: React.FC<{
    id: string;
    label: string;
    type?: string;
    placeholder: string;
    isTextarea?: boolean; // new prop
}> = ({ id, label, type = "text", placeholder, isTextarea }) => (
    <div className="w-full">
        <label htmlFor={id} className="sr-only">{label}</label>
        {isTextarea ? (
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                className="block w-full px-4 py-4 bg-[#024E48] rounded-2xl 
                focus:outline-none focus:ring-0 text-white placeholder-white 
                text-lg transition duration-200 hover:bg-[#02514B] min-h-[120px]"
            />
        ) : (
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="block w-full px-4 py-4 bg-[#024E48] rounded-2xl 
                focus:outline-none focus:ring-0 text-white placeholder-white 
                text-lg transition duration-200 hover:bg-[#02514B] h-[64px]"
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
                    <h2 className="text-4xl font-bold text-center text-white mb-10">
                        Contact us
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInputField id="firstName" label="First Name" type="text" placeholder="First Name" />
                            <FormInputField id="lastName" label="Last Name" type="text" placeholder="Last Name" />
                            <FormInputField id="emailAddress" label="Email" type="email" placeholder="Email Address" />
                            <FormInputField id="companyname" label="Company" type="text" placeholder="Company Name" />

                            <div className="md:col-span-2">
                                <FormInputField
                                    id="message"
                                    label="Message"
                                    placeholder="Message"
                                    isTextarea={true}
                                />
                            </div>
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

const JoinOurMission: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);
    return (
        <div className="w-full bg-[#F9F9F9]">
            <div className="container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 items-center">


                    <div className="col-span-12 lg:col-span-6 order-1">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-sans font-bold text-[#145a4a] mb-6">
                            Join our mission:
                        </h1>

                        <h2 className="text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-md text-gray-800 mb-4 leading-relaxed">
                            Be part of something transformative!
                        </h2>

                        <h3 className="text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-md text-gray-800 mb-4 leading-relaxed">
                            We're seeking passionate innovators ready to<br />
                            revolutionize the future of the workforce through<br />
                            cutting-edge mental fitness solutions.<br />
                            If you're driven to help others thrive and want to<br />
                            grow in a collaborative, purpose-driven<br />
                            environment, we want to meet you. Bring your<br />
                            unique talents and help us build more resilient, high-<br />
                            performing workplaces.
                        </h3>

                        <h3 className="text-xl xl:text-2xl lg:text-lg md:text-lg sm:text-md text-gray-800 mb-4 leading-relaxed">
                            Want to be part of a group committed to the<br /> mission of bringing
                            mental fitness to everyone?
                        </h3>

                        <div className="pt-5">
                            <a

                                target="_blank"
                                rel="noopener noreferrer"
                                className="py-4 px-8 bg-[#FBB040] hover:bg-[#FAC069] font-medium text-xl sm:text-2xl text-white rounded-full transition duration-300 ease-in-out"
                                onClick={toggleModal}
                            >
                                Contact us
                            </a>
                        </div>
                    </div>


                    <div className="col-span-12 lg:col-span-6 order-2 flex justify-start lg:justify-end mt-10 lg:mt-0">
                        <img
                            src="/media/about_us/join_our_mission.png"
                            alt="Join our mission"
                            className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[90%] max-w-[480px] h-auto rounded-[2rem] object-contain"
                        />
                    </div>
                </div>
            </div>
            {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
        </div>
    );
};

export default JoinOurMission;
