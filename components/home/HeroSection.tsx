import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";

const HeroSection = () => {
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
    <div
      className="min-h-screen h-full w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/media/bgs/landing_bg.webp')" }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#02514B"
          activeTextColor="#FFFFFF"
          hoverBgColor="#30706b"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#b8543d"
          buttonHoverColor="#e5684c"
        />
        <div
          className="
            pt-20 lg:pt-24 xl:pt-32
            flex flex-col xl:flex-row
            h-auto xl:h-[80vh]
            items-start
            gap-8 xl:gap-16
            pb-16
          "
        >
          <div
            className="
              w-full xl:w-[68%]
              h-auto
              text-left
            "
          >
            <div
              className="
                pt-15
                h-auto
                max-w-full
                select-none
              "
            >
              <h1
                className="
                  !font-sans !font-bold !text-white
                  text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
                  leading-snug sm:leading-tight lg:leading-tight
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Excel in a world of <br />
                constant change
              </h1>
              <h2
                className="
                  font-sans font-bold sm:font-normal
                  text-lg sm:text-xl lg:text-2xl xl:text-3xl
                  leading-normal tracking-normal
                  text-yellow-600 !mt-6
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Transform limitations into possibilities
              </h2>
              <h2
                className="
                  font-medium sm:font-seminormal
                  text-base sm:text-lg lg:text-xl xl:text-2xl
                  leading-normal tracking-normal
                  text-white !mt-8
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Get MyQstudio - the only Mind Skills app for peak performance.
                <br />
                Think, Feel, Do - Better
              </h2>
            </div>

            <div className="pt-14 pb-12 flex justify-start">
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-7 bg-white text-teal-900 font-medium text-xl rounded-full transition duration-300 ease-in-out hover:bg-gray-200"
              >
                Try for Free
              </a>
            </div>
          </div>

          <div
            className="
    w-full xl:w-[30%]
    h-auto
    flex justify-start items-start
    xl:mt-0
  "
          >
            <img
              src="/media/landing/landing_girl.png"
              alt="Landing Girl"
              className="
      w-full h-auto object-contain
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-full 2xl:max-w-full
      mt-6  // Added slight bottom padding by moving image down
    "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
