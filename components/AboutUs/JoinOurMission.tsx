import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const JoinOurMission: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const content = CONTENT_CONFIG.ABOUT_US_PAGE.JOIN_MISSION;

  return (
    <section className="join-mission-root">
      <div className="join-mission-container container-custom">
        <div className="join-mission-wrapper">
          <div className="join-mission-left">
            <h1 className="join-mission-heading">{content.TITLE}</h1>
            <h2 className="join-mission-sub-heading">{content.SUB_TITLE}</h2>

            <h3 className="join-mission-description">
              {content.DESCRIPTION_1.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <h3 className="join-mission-description">{content.DESCRIPTION_2}</h3>

            <div className="join-mission-button-wrapper">
              <button onClick={toggleModal} className="join-mission-button">
                {content.BUTTON_TEXT}
              </button>
            </div>
          </div>

          <div className="join-mission-right">
            <LazyImage
              src={content.IMAGE}
              alt={content.TITLE}
              className="join-mission-image"
            />
          </div>
        </div>
      </div>

      {isModalOpen && <ContactForm isOpen={isModalOpen} onClose={toggleModal} />}
    </section>
  );
};

export default JoinOurMission;
