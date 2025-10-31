import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { CONTENT_CONFIG } from "@/config/contentConfig";
import { useCachedImage } from "../useCachedImage";

const IndividualHeroSection = () => {
  const [downloadLink, setDownloadLink] = useState<string>("");
  const content = CONTENT_CONFIG.INDIVIDUAL_PAGE.HERO;
  const bgImage = useCachedImage(content.BG_IMAGE);

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
      className="hero-root"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#c57260"
          activeTextColor="#FFFFFF"
          hoverBgColor="#c57260"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#02514B"
          buttonHoverColor="#007c74"
        />

        <div className="hero-content-wrapper">
          <div className="hero-left-section">
            <div className="hero-heading-container">
              <h1 className="hero-heading-primary very-bolder">
                {content.HEADING_PRIMARY} <br /> {content.HEADING_SECONDARY}
              </h1>

              <h2 className="hero-paragraph">{content.SUB_HEADING}</h2>
            </div>

            <div className="hero-button-wrapper">
              <a href={downloadLink || "#"} className="hero-button text-red-700">
                {content.BUTTON_TEXT}
              </a>
            </div>
          </div>

          <div className="hero-right-section">
            <img src={content.IMAGE_SRC} alt={content.IMAGE_ALT} className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualHeroSection;
