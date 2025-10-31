import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ScreenData {
  header: string;
  content: React.ReactNode;
}
type ScreenKey = 1 | 2 | 3 | 4 | 5 | 6;
type ScreenMap = Record<ScreenKey, ScreenData>;

interface Feature {
  id: ScreenKey;
  title: string;
  detail: string;
}

const MOCK_SCREENS: ScreenMap = {
  1: {
    header: "Pathways",
    content: (
      <img
        src="/media/individuals/frame1.png"
        alt="Pathways Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  2: {
    header: "Quick Relief",
    content: (
      <img
        src="/media/individuals/frame2.png"
        alt="Quick Relief Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  3: {
    header: "Mindset Power",
    content: (
      <img
        src="/media/individuals/frame3.png"
        alt="Mindset Power Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  4: {
    header: "Journal",
    content: (
      <img
        src="/media/individuals/frame4.png"
        alt="Journal Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  5: {
    header: "Challenge",
    content: (
      <img
        src="/media/individuals/frame5.png"
        alt="Challenge Screen"
        className="w-full h-full object-contain"
      />
    ),
  },
  6: {
    header: "Growth",
    content: (
      <img
        src="/media/individuals/frame6.png"
        alt="Growth Screen"
        className="w-full h-full object-contain"
      />
    ),
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

const DynamicPhoneMockup: React.FC<DynamicPhoneMockupProps> = ({
  activeScreenId,
}) => {
  return (
    <div className="flex justify-center items-center relative w-full h-full lg:h-[700px] xl:h-[800px]">
      <div className="relative w-64 h-[550px] md:w-80 md:h-[680px] lg:w-[320px] lg:h-[690px] xl:w-[380px] xl:h-[700px] overflow-hidden flex items-center justify-center">
        {Object.entries(MOCK_SCREENS).map(([id, screen]) => {
          const isActive = Number(id) === activeScreenId;

          const springProps = useSpring({
            opacity: isActive ? 1 : 0,
            scale: isActive ? 1 : 0.995,
            config: { mass: 1, tension: 120, friction: 20 },
          });

          return (
            <animated.div
              key={id}
              style={{
                ...springProps,
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              {screen.content}
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

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const containerClasses = "";

  const activeFeature = UPDATED_FEATURES.find(
    (feature) => feature.id === activeFeatureId
  );

  return (
    <div className="min-h-screen w-screen h-full bg-[#F9F9F9] font-inter text-gray-800 select-none py-16 sm:py-20 px-4 sm:px-8 md:px-10 lg:px-20">
      <section className="h-full">
        <div className={containerClasses}>
          <div className="flex flex-col xl:items-center justify-center xl:px-8 xl:text-center ">
            <h2 className="!font-bold sm:font-normal xl:text-[50px] lg:text-[28px] lg:text-xl sm:text-2xl md:text-xl !leading-[100%] !tracking-wide text-teal-900">
              The MyQStudio App
              <br />
              <span className="block mt-3">
                A personal development platform for real change.
              </span>
            </h2>
            <h6 className="font-light lg:font-normal xl:text-[26px] lg:text-[18px] text-[#535353] xl:text-center xl:max-w-6xl xl:mx-auto mt-8">
              Bite-sized learning that fits perfectly anywhere, anytime. Simple
              techniques so intuitive you'll wonder why you didn't try them
              sooner.
            </h6>
            <div className="flex lg:justify-center h-auto pt-10 ">
              <a
                href="https://apps.apple.com/in/app/id6621264428"
                target="_blank"
                rel="noopener noreferrer"
                className="!py-6 !px-9 bg-red-700 hover:bg-[var(--color-red-hover)] font-medium text-2xl antialiased text-white rounded-full transition duration-300 ease-in-out select-none"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={` ${containerClasses}`}>
        <div className="container-custom flex flex-col xl:grid xl:grid-cols-2 xl:gap-50 items-start">
          <div className="order-1 xl:order-2 xl:mt-0 pt-8 xl:pt-0 flex justify-center w-full">
            <DynamicPhoneMockup activeScreenId={activeFeatureId} />
          </div>

          <div className="order-2 xl:order-1 xl:pt-20">
            {isMobileView ? (
              activeFeature && (
                <div className="flex flex-col items-center text-center px-4 mt-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BDBDBD1A]">
                      <span className="font-bold text-teal-900 text-2xl">
                        {activeFeature.id}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-teal-900">
                      {activeFeature.title}
                    </h3>
                  </div>
                  <h4 className="font-normal text-base text-gray-800 mb-8 max-w-md">
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
                      className="flex flex-col gap-2 md:flex-row md:gap-4 cursor-pointer group"
                      onMouseEnter={() => setActiveFeatureId(feature.id)}
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#BDBDBD1A]">
                        <span className="font-bold text-teal-900 text-2xl">
                          {feature.id}
                        </span>
                      </div>
                      <div className="max-w-5xl">
                        <h3
                          className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold transition-all duration-300 ease-in-out ${
                            isActive ? "text-teal-900 mb-2" : "text-teal-800"
                          }`}
                        >
                          {feature.title}
                        </h3>
                        <h4
                          className={`font-normal transition-[max-height,opacity,margin-top] duration-500 ease-in-out overflow-hidden ${
                            isActive
                              ? "text-xl lg:text-2xl text-gray-800 max-h-40 mt-5 mb-5 opacity-100"
                              : "text-base text-gray-600 max-h-0 mt-0 opacity-0"
                          }`}
                        >
                          {feature.detail}
                        </h4>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {isMobileView && (
          <div className="flex justify-center space-x-2 mt-4 mb-8 xl:hidden">
            {UPDATED_FEATURES.map((feature) => (
              <span
                key={feature.id}
                className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
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
