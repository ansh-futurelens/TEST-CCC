import React, { useEffect, useState, useRef } from "react";
import Header from "../common/Header";
import { useCachedImage } from "../useCachedImage";
import { CONTENT_CONFIG } from "@/config/contentConfig";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return <img ref={imgRef} src={isVisible ? src : ""} alt={alt} className={className} />;
};

const AboutUsHeroSection: React.FC = () => {
  const {
    HEADING_PRIMARY,
    PARAGRAPH_LINES,
    IMAGE_SRC,
    IMAGE_ALT,
    BG_IMAGE,
  } = CONTENT_CONFIG.ABOUT_US_PAGE.HERO;
  const bgImage = useCachedImage(BG_IMAGE);

  return (
    <div
      className="hero-root aboutus-hero-root"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#FFC25E"
          activeTextColor="#FFFFFF"
          hoverBgColor="#FFC25E"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#02514B"
          buttonHoverColor="#007c74"
        />

        <div className="hero-content-wrapper aboutus-hero-content">
          <div className="hero-left-section aboutus-left">
            <div className="hero-heading-container">
              <h1 className="hero-heading-primary very-bolder">{HEADING_PRIMARY}</h1>

              <h2 className="hero-paragraph aboutus-subheading">
                {PARAGRAPH_LINES.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
            </div>
          </div>

          <div className="hero-right-section aboutus-right">
            <LazyImage src={IMAGE_SRC} alt={IMAGE_ALT} className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
