import React, { useEffect, useState } from "react";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";

const MindFocusSection = () => {
  const [downloadLink, setDownloadLink] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else if (userAgent.includes("Win")) setDownloadLink(DOWNLOAD_LINKS.windows);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);
  return (
    <div className=" h-full w-screen bg-gray-50 select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <div className="container-custom h-full ">
        <div className="flex flex-col lg:items-center justify-center 2xl:px-20 3xl:px-50 lg:text-center">
          <h2 className="font-sans !font-bold text-2xl sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-teal-900 mx-auto lg:max-w-lg xl:max-w-7xl 2xl:text-[30px] 3xl:text-[40px]">
            Manage stress, find balance, and perform at your best - with a
            clear, focused mind.
          </h2>
          <h6 className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] text-gray-800 xl:text-center xl:max-w-6xl xl:mx-auto mt-4 xl:font-medium !lg:font-normal">
            Techniques and strategies to regulate the state of your mind so you
            can think, feel, do - better.
          </h6>
        </div>

        <div className="py-10 w-full flex justify-center">
          <div className="flex flex-col xl:flex-row justify-between items-start w-full max-w-7xl gap-6">
            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/landing/thinkBetter.png"
                alt="Think better."
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Think better.
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Think clearly, and process information
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/landing/feelBetter.png"
                alt="Feel better."
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Feel better.
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Get in tune with your emotions to understand and manage them.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 w-full">
              <img
                src="/media/landing/doBetter.png"
                alt="Do better."
                className="w-44 sm:w-48 md:w-52 lg:w-54 h-44 sm:h-48 md:h-52 lg:h-54 object-contain mb-4 select-none"
              />
              <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-red-700">
                Do better.
              </h4>
              <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[26px] !max-w-sm !mx-auto">
                Make conscious, deliberate, and informed decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-5 2xl:pt-10  w-full   ">
          <div className="flex flex-col   w-full  gap-6">
            <h2 className="font-sans !font-bold text-2xl  sm:font-normal sm:text-2xl !sm:leading-8 !sm:tracking-wider text-gray-800  2xl:text-[30px] 3xl:text-[40px] ">
              Take control with Q Mind Skills
            </h2>
            <div className="relative mt-10">
              <div className="absolute lg:left-[320px] top-0 bottom-0 w-[2px] bg-gray-line"></div>

              <div className="absolute lg:left-[313px] -left-[5px] z-10">
                <div className="absolute -top-[2px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[270px]  lg:top-[320px] top-[450px]  w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
                <div className="absolute  xl:top-[520px]   lg:top-[640px] top-[880px] w-4 h-4 bg-gray-800 rounded-full shadow-md"></div>
              </div>
              <div className="flex flex-col gap-14">
                {[
                  {
                    img: "/media/landing/recognize.png",
                    title: "Recognize your triggers",
                    desc: "Learn how your brain works, identify your stress triggers, and become aware of your thoughts.",
                  },
                  {
                    img: "/media/landing/respond.png",
                    title: "Respond, not react",
                    desc: "Turn knowledge into action with guided scenarios and simulations. Take what you learn and apply to real-life situations.",
                  },
                  {
                    img: "/media/landing/notice.png",
                    title: "Notice the change",
                    desc: "As you learn and apply Q Mind Skills, you will start to notice a change in your thought patterns, emotions, and responses.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col lg:flex-row ml-[40px] lg:ml-0 items-start gap-8 relative"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl lg:w-64 w-full h-48 object-cover"
                      />
                    </div>

                    <div className="flex flex-col lg:ml-[100px] mt-2">
                      <h4 className="text-[26px] sm:text-[28px] md:text-[30px] font-bold text-teal-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-800 mt-2 font-normal !text-[22px] sm:!text-[18px] md:!text-[24px] ">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" 2xl:pt-10  w-full   ">
          <div className="flex lg:justify-center h-auto pt-14 pb-12">
            <a
              href={downloadLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="!py-4 !px-7 bg-teal-900 hover:bg-teal-button-hover font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
            >
              Try for Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindFocusSection;
