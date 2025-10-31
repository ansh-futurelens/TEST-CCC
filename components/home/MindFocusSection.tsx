import React, { useEffect, useState } from "react";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const MindFocusSection = () => {
  const [downloadLink, setDownloadLink] = useState<string>("");
  const { HEADING, SUB_HEADING, CARDS, BUTTON_TEXT } = CONTENT_CONFIG.LANDING_PAGE.MIND_FOCUS;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);

  const steps = [
    {
      img: "/media/landing/recognize.webp",
      title: "Recognize your triggers",
      desc: "Learn how your brain works, identify your stress triggers, and become aware of your thoughts.",
    },
    {
      img: "/media/landing/respond.webp",
      title: "Respond, not react",
      desc: "Turn knowledge into action with guided scenarios and simulations. Take what you learn and apply to real-life situations.",
    },
    {
      img: "/media/landing/notice.webp",
      title: "Notice the change",
      desc: "As you learn and apply Q Mind Skills, you will start to notice a change in your thought patterns, emotions, and responses.",
    },
  ];

  return (
    <div className="mind-focus-root">
      <div className="container-custom h-full">
        <div className="mind-focus-heading-wrapper">
          <h2 className="mind-focus-heading-primary">{HEADING}</h2>
          <h6 className="mind-focus-sub-heading">{SUB_HEADING}</h6>
        </div>

        <div className="mind-focus-cards-wrapper">
          <div className="mind-focus-cards-container">
            {CARDS.map((card, i) => (
              <div key={`card-${i}`} className="mind-focus-card">
                <LazyImage src={card.img} alt={card.alt} className="mind-focus-card-img" />
                <h4 className="mind-focus-card-title">{card.title}</h4>
                <h4 className="mind-focus-card-desc">{card.desc}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="mind-focus-steps-wrapper">
          <div className="flex w-full flex-col gap-6">
            <h2 className="mind-focus-heading-primary ml-1">Take control with Q Mind Skills</h2>
            <div className="relative mt-14">
              <div className="bg-gray-line absolute top-0 bottom-0 w-[2px] lg:left-[320px]"></div>

              <div className="absolute -left-[5px] z-10 lg:left-[313px]">
                <div className="absolute -top-[2px] h-4 w-4 rounded-full bg-gray-800 shadow-md"></div>
                <div className="absolute top-[450px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[320px] xl:top-[270px]"></div>
                <div className="absolute top-[880px] h-4 w-4 rounded-full bg-gray-800 shadow-md lg:top-[640px] xl:top-[520px]"></div>
              </div>
              <div className="flex flex-col gap-14">
                {steps.map((step, index) => (
                  <div key={index} className="mind-focus-step">
                    <div className="flex-shrink-0">
                      <LazyImage src={step.img} alt={step.title} className="mind-focus-step-img" />
                    </div>
                    <div className="mind-focus-step-content">
                      <h4 className="mind-focus-step-title">{step.title}</h4>
                      <h5 className="mind-focus-step-desc">{step.desc}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mind-focus-button-wrapper">
          <div className="flex h-auto lg:justify-center">
            <a
              href={downloadLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mind-focus-button"
            >
              {BUTTON_TEXT}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindFocusSection;
