import React, { useState } from "react";
import { LazyImage } from "../LazyMedia";
import Form from "./Form";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const UnlockPotentialSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const config = CONTENT_CONFIG.LANDING_PAGE.UNLOCK_POTENTIAL;

  return (
    <div className="mind-power-root">
      <div className="mind-power-container container-custom">
        <div className="mind-power-inner">
          <div className="mind-power-left">
            <h2 className="mind-power-heading">{config.HEADING}</h2>
            <h6 className="mind-power-paragraph-primary">{config.PARAGRAPH_PRIMARY}</h6>
            <h6 className="mind-power-paragraph-secondary">{config.PARAGRAPH_SECONDARY}</h6>

            <div className="mind-power-buttons-wrapper">
              {config.BUTTON_PRIMARY.ACTION === "MODAL_OPEN" ? (
                <button onClick={toggleModal} className="mind-power-button-primary">
                  {config.BUTTON_PRIMARY.TEXT}
                </button>
              ) : (
                <a
                  href={config.BUTTON_PRIMARY.LINK || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mind-power-button-primary"
                >
                  {config.BUTTON_PRIMARY.TEXT}
                </a>
              )}

              <a
                href={config.BUTTON_SECONDARY.LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mind-power-button-secondary"
              >
                {config.BUTTON_SECONDARY.TEXT}
              </a>
            </div>
          </div>

          <div className="mind-power-right">
            <LazyImage src={config.IMAGE.SRC} alt={config.IMAGE.ALT} className="mind-power-image" />
          </div>
        </div>
      </div>

      {isModalOpen && <Form isOpen={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default UnlockPotentialSection;
