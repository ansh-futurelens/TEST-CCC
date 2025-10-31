import React from "react";

interface AdvantageSectionProps {
    title: string;
    description1?: string;
    buttonText?: string;
    buttonLink?: string;
    imageSrc: string;
    isRight?: boolean;
    bgColor?: string;
    bgImage?: string;
}

const AdvantageSection: React.FC<AdvantageSectionProps> = ({
    title,
    description1,
    buttonText = "Try for Free",
    buttonLink = "#",
    imageSrc,
    isRight = false,
    bgColor = "bg-gray-bg",
    bgImage,
}) => {
    return (
        <div
            className={`relative w-screen select-none ${bgColor}`}
            style={{
                backgroundImage: bgImage ? `url(${bgImage})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {bgImage && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm pointer-events-none"></div>
            )}

            <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">

                <div
                    className={`grid grid-cols-1 2xl:grid-cols-12 items-center gap-20 ${isRight ? "2xl:flex-row-reverse" : ""
                        }`}
                >

                    <div
                        className={`2xl:col-span-8 xl:col-span-8 lg:col-span-8 flex flex-col justify-center text-left ${isRight ? "2xl:order-2" : ""
                            }`}
                    >
                        <h2 className="font-sans font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] text-start">
                            {title}
                        </h2>

                        {description1 && (
                            <h6 className="mt-6 text-gray-800 2xl:text-[25px] xl:text-[20px] lg:text-[18px] max-w-5xl">
                                {description1}
                            </h6>
                        )}

                        <div className="mt-15">
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block py-5 px-7 bg-[#279C97] hover:bg-[#4BC7C1] font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out"
                            >
                                {buttonText}
                            </a>
                        </div>
                    </div>


                    <div
                        className={`2xl:col-span-4 xl:col-span-4 lg:col-span-4 flex justify-start xl:justify-start 2xl:justify-center ${isRight ? "2xl:order-1" : ""}`}
                    >
                        <img
                            src={imageSrc}
                            alt="Section Visual"
                            className="w-[90%] h-auto sm:w-[60%] lg:w-[80%] xl:w-[60%] 2xl:w-[70%] object-contain"
                        />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdvantageSection;
