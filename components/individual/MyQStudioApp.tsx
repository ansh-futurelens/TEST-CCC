import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";
import { motion } from "framer-motion";

type ScreenKey = 1 | 2 | 3 | 4 | 5 | 6;
interface Feature {
  id: ScreenKey;
  title: string;
  detail: string;
}

const MOCK_SCREENS = {
  1: {
    header: "Pathways",
    src: "/media/individuals/phone1.webp",
    alt: "Pathways Screen",
  },
  2: {
    header: "Quick Relief",
    src: "/media/individuals/phone2.webp",
    alt: "Quick Relief Screen",
  },
  3: {
    header: "Mindset Power",
    src: "/media/individuals/phone3.webp",
    alt: "Mindset Power Screen",
  },
  4: {
    header: "Journal",
    src: "/media/individuals/phone4.webp",
    alt: "Journal Screen",
  },
  5: {
    header: "Challenge",
    src: "/media/individuals/phone5.webp",
    alt: "Challenge Screen",
  },
  6: {
    header: "Growth",
    src: "/media/individuals/phone6.webp",
    alt: "Growth Screen",
  },
};
const UPDATED_FEATURES: Feature[] = [
  {
    id: 1,
    title: "Customized plans for growth",
    detail:
      "Get a personalized plan to focus on what is important to you. Take the MindFrame quiz and jump-start your growth.",
  },
  {
    id: 2,
    title: "Instant strategies for high-stress moments",
    detail:
      "Access short exercises to regain balance and focus when it matters the most, when you need it the most.",
  },
  {
    id: 3,
    title: "Concise lessons for fast learning",
    detail:
      "Master essential Mind Skills with short, science-backed lessons and practices that fit easily into your day to deliver immediate impact.",
  },
  {
    id: 4,
    title: "Guided journaling for reflection",
    detail:
      "Reflect on your thoughts and progress with prompted journals available in both written and audio formats.",
  },
  {
    id: 5,
    title: "Monthly Challenges to level up",
    detail:
      "Transform habits and build new skills through structured monthly challenges that push your cognitive boundaries.",
  },
  {
    id: 6,
    title: "Progress tracking",
    detail:
      "Track your progress and results with growth charts, stay motivated with streaks and habit trackers, tap into personalized insights, celebrate badges and milestones.",
  },
];

interface DynamicPhoneMockupProps {
  activeScreenId: ScreenKey;
}

const DynamicPhoneMockup: React.FC<DynamicPhoneMockupProps> = ({ activeScreenId }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center lg:h-[700px] xl:h-[800px]">
      <div className="relative flex h-[550px] w-64 items-center justify-center overflow-hidden md:h-[680px] md:w-80 lg:h-[690px] lg:w-[320px] xl:h-[700px] xl:w-[380px]">
        <img
          src="/media/individuals/frame-phone.webp"
          alt="Phone Frame"
          className="pointer-events-none absolute z-[3] h-[400px] w-[200px] select-none md:h-[650px] md:w-[320px] lg:h-[690px] lg:w-[320px] xl:h-[650px] xl:w-80 2xl:h-[690px] 2xl:w-[320px]"
        />

        {Object.entries(MOCK_SCREENS).map(([id, screen]) => {
          const isActive = Number(id) === activeScreenId;

          const springProps = useSpring({
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.995,
            config: {
              mass: 1.3,
              tension: 50,
              friction: 30,
              clamp: false,
            },
          });

          return (
            <animated.div
              key={id}
              style={{
                ...springProps,

                zIndex: 2,
              }}
              className="absolute md:top-[16px]"
            >
              <LazyImage
                src={screen.src}
                alt={screen.alt}
                className="h-[400px] w-[200px] object-contain md:h-[650px] md:w-[320px] lg:h-[667px] lg:w-[310px] xl:h-[650px] xl:w-80 2xl:h-[667px] 2xl:w-[310px]"
              />
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

const MyQStudio: React.FC = () => {
  const [activeFeatureId, setActiveFeatureId] = useState<ScreenKey>(1);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [downloadLink, setDownloadLink] = useState<string>("");
  const { TITLE_PRIMARY, TITLE_SECONDARY, DESCRIPTION, BUTTON_TEXT } =
    CONTENT_CONFIG.INDIVIDUAL_PAGE.MYQSTUDIO_SECTION;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else if (userAgent.includes("Win")) setDownloadLink(DOWNLOAD_LINKS.windows);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerClasses = "";

  const activeFeature = UPDATED_FEATURES.find((feature) => feature.id === activeFeatureId);

  return (
    <div className="font-inter h-full min-h-screen w-screen bg-[#F9F9F9] px-4 py-16 text-gray-800 select-none sm:px-8 sm:py-20 md:px-10 lg:px-20">
      <section className="h-full">
        <div className={containerClasses}>
          <div className="flex flex-col justify-center xl:items-center xl:px-8 xl:text-center">
            <h2 className="!leading-[100%] !font-bold !tracking-wide text-teal-900 sm:text-2xl sm:font-normal md:text-xl lg:text-xl lg:text-[28px] xl:text-[40px]">
              {TITLE_PRIMARY}
              <br />
              <span className="mt-3 block">{TITLE_SECONDARY}</span>
            </h2>
            <h6 className="mt-4 font-light text-[#535353] lg:text-[18px] lg:font-normal xl:mx-auto xl:max-w-6xl xl:text-center xl:text-[26px]">
              {DESCRIPTION}
            </h6>
            <div className="flex h-auto pt-8 pb-10 lg:justify-center">
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-red-700 !px-9 !py-6 text-2xl font-medium text-white antialiased transition duration-300 ease-in-out select-none hover:bg-[var(--color-red-hover)]"
              >
                {BUTTON_TEXT}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={` ${containerClasses}`}>
        <div className="container-custom flex flex-col items-start xl:grid xl:grid-cols-2 xl:gap-50">
          <div className="order-1 flex w-full justify-center pt-8 xl:order-2 xl:mt-0 xl:pt-0">
            <DynamicPhoneMockup activeScreenId={activeFeatureId} />
          </div>

          <div className="order-2 xl:order-1 xl:pt-20">
            {isMobileView ? (
              activeFeature && (
                <div className="mt-8 flex flex-col items-center px-4 text-center">
                  <div className="mb-4 flex items-center justify-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#BDBDBD1A]">
                      <span className="flex h-10 w-auto items-center justify-center rounded-full px-3">
                        {activeFeature.id}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-teal-900 sm:text-2xl">
                      {activeFeature.title}
                    </h3>
                  </div>
                  <h4 className="mb-8 max-w-md text-base font-normal text-gray-800">
                    {activeFeature.detail}
                  </h4>
                </div>
              )
            ) : (
              <ul className="space-y-10">
                {UPDATED_FEATURES.map((feature) => {
                  const isActive = feature.id === activeFeatureId;

                  return (
                    <li
                      key={feature.id}
                      className="group flex cursor-pointer flex-col gap-2 md:flex-row md:gap-4"
                      onMouseEnter={() => setActiveFeatureId(feature.id)}
                    >
                      <div className="flex h-11 w-auto items-center justify-center rounded-full bg-[#F3F3F3] px-4">
                        <span className="text-2xl font-semibold text-gray-800">{feature.id}</span>
                      </div>

                      <div className="relative max-w-5xl">
                        <h3 className="text-[28px] font-semibold text-teal-900 sm:text-[18px] md:text-[22px] lg:text-[28px]  ">
                          {feature.title}
                        </h3>

                        <motion.div
                          key={feature.id}
                          initial={{ height: 0 }}
                          animate={{ height: isActive ? "auto" : 0 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 mb-5 text-xl font-normal tracking-wide text-gray-800 lg:text-[22px]">
                            {feature.detail}
                          </div>
                        </motion.div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {isMobileView && (
          <div className="mt-4 mb-8 flex justify-center space-x-2 xl:hidden">
            {UPDATED_FEATURES.map((feature) => (
              <span
                key={feature.id}
                className={`block h-3 w-3 cursor-pointer rounded-full transition-colors duration-300 ${
                  feature.id === activeFeatureId ? "bg-teal-900" : "bg-gray-400"
                }`}
                onClick={() => setActiveFeatureId(feature.id)}
              ></span>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyQStudio;
