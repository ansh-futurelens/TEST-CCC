import React from "react";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const Skills: React.FC = () => {
  const { TITLE_PRIMARY, TITLE_SECONDARY, SUB_TEXT, CARDS } = CONTENT_CONFIG.INDIVIDUAL_PAGE.SKILLS;

  return (
    <div className="skills-root">
      <section className="skills-section">
        <div className="skills-container">
          <h6 className="skills-title-primary">
            {TITLE_PRIMARY}
            <br />
            <span className="skills-title-secondary">{TITLE_SECONDARY}</span>
          </h6>

          <h6 className="skills-subtext">{SUB_TEXT}</h6>

          <div className="skills-cards-wrapper">
            {CARDS.map((card, index) => (
              <div key={index} className="skills-card">
                <div className="skills-card-inner">
                  <LazyImage
                    src={card.img}
                    alt={card.title}
                    className="skills-card-img"
                  />
                  <div className="skills-card-content">
                    <h6 className="skills-card-title">{card.title}</h6>
                    <h6 className="skills-card-desc">{card.description}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
