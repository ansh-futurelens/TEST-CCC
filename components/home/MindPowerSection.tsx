import React, { useEffect, useState } from "react";
import { DOWNLOAD_LINKS } from "../constants/downloadLinks";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const MindPowerSection = () => {
  const [downloadLink, setDownloadLink] = useState<string>("");

  const config = CONTENT_CONFIG.LANDING_PAGE.MIND_POWER;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;
      if (userAgent.includes("Mac")) setDownloadLink(DOWNLOAD_LINKS.macos);
      else setDownloadLink(DOWNLOAD_LINKS.windows);
    }
  }, []);

  return (
    <div className="mind-power-root">
      <div className="mind-power-container container-custom">
        <div className="mind-power-inner">
          <div className="mind-power-left">
            <h2 className="mind-power-heading">{config.HEADING}</h2>
            <h6 className="mind-power-paragraph-primary">{config.PARAGRAPH_PRIMARY}</h6>
            <h6 className="mind-power-paragraph-secondary">{config.PARAGRAPH_SECONDARY}</h6>

            <div className="mind-power-buttons-wrapper">
              <a
                href={downloadLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="mind-power-button-primary"
              >
                {config.BUTTON_TEXT_PRIMARY}
              </a>

              <a
                href={config.BUTTON_SECONDARY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mind-power-button-secondary"
              >
                {config.BUTTON_TEXT_SECONDARY}
              </a>
            </div>
          </div>

          <div className="mind-power-right">
            <LazyImage src={config.IMAGE_SRC} alt={config.IMAGE_ALT} className="mind-power-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindPowerSection;
