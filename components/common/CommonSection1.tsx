import React from "react";

interface CommonSectionProps {
  title: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonLink?: string;
  learnMoreText?: string;
  learnMoreLink?: string;
  imageSrc: string;
  isRight?: boolean;
  bgColor?: string;
  bgImage?: string;
}

const CommonSection1: React.FC<CommonSectionProps> = ({
  title,
  description1,
  description2,
  buttonText = "Try for Free",
  buttonLink = "#",
  learnMoreText = "Learn more",
  learnMoreLink = "#",
  imageSrc,
  isRight = false,
  bgColor = "bg-gray-bg",
  bgImage,
}) => {
  return (
    <div
      className={`relative w-screen select-none  ${bgColor}`}
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
          className={`flex flex-col items-center 2xl:items-start justify-between gap-10 ${
            isRight ? "2xl:flex-row-reverse" : "2xl:flex-row"
          }`}
        >
          <div className="flex flex-col 2xl:w-[60%] xl:pt-20 lg:pt-10 pt-10 z-10">
            <h2 className="font-sans !font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] 2xl:text-start lg:text-center">
              {title}
            </h2>

            {description1 && (
              <h6 className="mt-8 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto">
                {description1}
              </h6>
            )}

            {description2 && (
              <h6 className="mt-4 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center ">
                {description2}
              </h6>
            )}

            <div className="flex flex-col lg:flex-col 2xl:flex-row lg:items-center 2xl:items-start justify-start lg:justify-center 2xl:justify-start items-start xl:mt-16 lg:mt-10 mt-6 gap-6 xl:items-center">
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-teal-900 hover:bg-teal-800 font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out select-none"
              >
                {buttonText}
              </a>

              <a
                href={learnMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lg md:text-xl 2xl:text-2xl text-gray-800 hover:text-teal-900 border-b border-gray-800 transition duration-300 ease-in-out lg:self-center"
              >
                {learnMoreText}
              </a>
            </div>
          </div>

          <div className="flex justify-center 2xl:w-[40%] select-none">
            <img
              src={imageSrc}
              alt="Section Visual"
              className="w-[500px] max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSection1;
