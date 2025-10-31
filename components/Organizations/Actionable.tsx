import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { CONTENT_CONFIG } from "@/config/contentConfig";
import { motion } from "framer-motion";

interface ScreenData {
  header: string;
  content: React.ReactNode;
}
type ScreenKey = 1 | 2 | 3 | 4;
type ScreenMap = Record<ScreenKey, ScreenData>;

interface Feature {
  id: ScreenKey;
  title: string;
  detail: string;
}
const LazyImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const target = document.getElementById(src);
    if (target) observer.observe(target);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div id={src} className={`relative ${className}`}>
      {visible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
};
const MOCK_SCREENS: ScreenMap = {
  1: {
    header: "Pathways",
    content: (
      <img
        src="media\organizations\dashboard1.webp"
        alt="Pathways Screen"
        className="h-full w-full object-contain"
      />
    ),
  },
  2: {
    header: "Quick Relief",
    content: (
      <img
        src="media\organizations\dashboard2.webp"
        alt="Quick Relief Screen"
        className="h-full w-full object-contain"
      />
    ),
  },
  3: {
    header: "Mindset Power",
    content: (
      <img
        src="media\organizations\dashboard3.webp"
        alt="Mindset Power Screen"
        className="h-full w-full object-contain"
      />
    ),
  },
  4: {
    header: "Journal",
    content: (
      <img
        src="media\organizations\dashboard4.webp"
        alt="Journal Screen"
        className="h-full w-full object-contain"
      />
    ),
  },
};


interface DynamicPhoneMockupProps {
  activeScreenId: any;
}

const DynamicPhoneMockup: React.FC<DynamicPhoneMockupProps> = ({ activeScreenId }) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="relative flex h-[380px] w-72 items-center justify-center overflow-hidden md:h-[200px] lg:h-[200px] lg:w-[200px] lg:w-[320px] xl:mt-[-98px] xl:h-[600px] xl:w-[400px] 2xl:h-[600px] 2xl:w-[500px]">
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

const Actionable = () => {
  const [activeFeatureId, setActiveFeatureId] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobileView(window.innerWidth < 1280);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const DATA = CONTENT_CONFIG.ORGANIZATION_PAGE.ACTIONABLE;
  const activeFeature = DATA.FEATURES.find((f) => f.id === activeFeatureId);

  return (
    <div className="actionable-root">
     
      <section className="actionable-hero-section">
        <div className="actionable-heading-wrapper">
          <h2 className="actionable-heading-primary">
            {DATA.HERO.HEADING.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </section>

      
      <section className="actionable-features-section">
        <div className="container-custom actionable-container">
         
          <div className="actionable-mockup-wrapper">
            <DynamicPhoneMockup activeScreenId={activeFeatureId} />
          </div>

         
          <div className="actionable-features-wrapper">
            {isMobileView ? (
              activeFeature && (
                <div className="actionable-feature-mobile">
                  <div className="actionable-feature-mobile-header">
                    <div className="flex h-10 w-auto items-center justify-center rounded-full bg-[#F3F3F3] px-4">
                      <span className="text-2xl font-bold text-teal-900">{activeFeature.id}</span>
                    </div>
                    <h4 className="actionable-feature-mobile-title">
                      {activeFeature.title}
                    </h4>
                  </div>
                  <h4 className="actionable-feature-mobile-desc">
                    {activeFeature.detail}
                  </h4>
                </div>
              )
            ) : (
              <ul className="actionable-feature-list">
                {DATA.FEATURES.map((feature) => {
                  const isActive = feature.id === activeFeatureId;
                  return (
                    <li
                      key={feature.id}
                      className="actionable-feature-item group"
                      onMouseEnter={() => setActiveFeatureId(feature.id)}
                    >
                      <div className="actionable-feature-number">
                        <span>{feature.id}</span>
                      </div>
                      <div className="actionable-feature-content">
                        <h3
                          className="text-[20px] font-semibold transition-colors duration-300 sm:text-[18px] md:text-[20px] lg:text-[23px] text-teal-900"
                        >
                          {feature.title}
                        </h3>
                        <motion.div
                          key={feature.id}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: isActive ? "auto" : 0,
                            opacity: isActive ? 1 : 0,
                          }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="actionable-feature-detail">
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

        
        <div className="actionable-dots-wrapper">
          {DATA.FEATURES.map((feature) => (
            <span
              key={feature.id}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors duration-300 ${feature.id === activeFeatureId ? "bg-teal-900" : "bg-gray-400"
                }`}
              onClick={() => setActiveFeatureId(feature.id)}
            ></span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Actionable;
