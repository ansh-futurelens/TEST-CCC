import React, { useEffect, useState } from "react";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";


const MindPowerSection = () => {
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
    <div className="relative w-screen select-none bg-gray-bg">
      <div className="relative container-custom py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex flex-col items-center 2xl:items-start justify-between gap-10 2xl:flex-row">
          <div className="flex flex-col 2xl:w-[60%] xl:pt-20 lg:pt-10 pt-10 z-10">
            <h2 className="font-sans !font-bold text-2xl sm:text-2xl text-teal-900 2xl:text-[30px] 3xl:text-[40px] 2xl:text-start lg:text-center">
              Your mind is your most powerful asset.
            </h2>

            <h6 className="mt-8 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center xl:max-w-6xl xl:mx-auto">
              In today's relentlessly demanding environment, a strong, clear
              mind isn't a luxury – it's a necessity.
            </h6>

            <h6 className="mt-4 2xl:text-[22px] xl:text-[20px] lg:text-[18px] text-gray-800 2xl:text-start lg:text-center">
              Get MyQStudio. Build Q Mind Skills - Your distinct competitive
              edge for growth, even in uncertain times.
            </h6>

            <div className="flex flex-col lg:flex-col 2xl:flex-row lg:items-center 2xl:items-start justify-start lg:justify-center 2xl:justify-start items-start xl:mt-16 lg:mt-10 mt-6 gap-6 xl:items-center">
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-teal-900 hover:bg-teal-800 font-medium text-2xl text-white rounded-full transition duration-300 ease-in-out select-none"
              >
                Try for Free
              </a>

              <a
                href="/individual"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-lg md:text-xl 2xl:text-2xl text-gray-800 hover:text-teal-900 border-b border-gray-800 transition duration-300 ease-in-out lg:self-center"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="flex justify-center 2xl:w-[40%] select-none">
            <img
              src="/media/landing/tree.png"
              alt="Mind Power Illustration"
              className="w-[500px] max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindPowerSection;
