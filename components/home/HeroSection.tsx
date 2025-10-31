import { useEffect, useState } from "react";
import Header from "../common/Header";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { CONTENT_CONFIG } from "@/config/contentConfig";
import { useCachedImage } from "../useCachedImage";

const HeroSection = () => {
  const [downloadLink, setDownloadLink] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const bgImage = useCachedImage("/media/bgs/landing_bg.webp");

  const {
    HEADING_PRIMARY,
    HEADING_SECONDARY,
    SUB_HEADING,
    PARAGRAPH_PRIMARY,
    PARAGRAPH_SECONDARY,
    BUTTON_TEXT,
  } = CONTENT_CONFIG.LANDING_PAGE.HERO;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else if (userAgent.includes("Win")) setDownloadLink(DOWNLOAD_LINKS.windows);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);

  useEffect(() => {
    const changeText = () => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SUB_HEADING.length);
        setFade(true);
      }, 1200);
    };

    const interval = setInterval(changeText, 6000);
    return () => clearInterval(interval);
  }, [SUB_HEADING.length]);



  return (
    <div
      className="hero-root"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease-in-out",
      }}
    >
      {" "}
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

        <div className="hero-content-wrapper">
          <div className="hero-left-section">
            <div className="hero-heading-container">
              <h1 className="hero-heading-primary very-bolder">
                {HEADING_PRIMARY} <br /> {HEADING_SECONDARY}
              </h1>

              <div
                style={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <h2
                  className={`hero-sub-heading font-bold transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    position: "absolute",
                    width: "100%",
                  }}
                >
                  {SUB_HEADING[currentIndex].title}
                </h2>
              </div>

              <h2 className="hero-paragraph">
                {PARAGRAPH_PRIMARY}
                <br />
                {PARAGRAPH_SECONDARY}
              </h2>
            </div>

            <div className="hero-button-wrapper">
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button"
              >
                {BUTTON_TEXT}
              </a>
            </div>
          </div>

          <div className="hero-right-section">
            <img
              src="/media/landing/landing_girl.webp"
              alt="Landing Girl"
              title="Landing Girl"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
