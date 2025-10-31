import React, { useState } from "react";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const {
  TITLE,
  IMAGE,
  ALWAYS_VISIBLE_TEXT,
  EXTRA_CONTENT,
  BUTTON_TEXT,
} = CONTENT_CONFIG.ABOUT_US_PAGE.MISSION;

const Mission: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="mission-root">
      <div className="mission-container container-custom">
        <div className="mission-wrapper">
          <div className="mission-image-wrapper">
            <LazyImage src={IMAGE} alt={TITLE} className="mission-image" />
          </div>

          <div className="mission-content">
            <h2 className="mission-heading">{TITLE}</h2>

            <h3 className="mission-text">{ALWAYS_VISIBLE_TEXT}</h3>

            {showMore && (
              <div className="mission-text">
                {EXTRA_CONTENT.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="mission-button"
            >
              {showMore ? BUTTON_TEXT.VIEW_LESS : BUTTON_TEXT.LEARN_MORE}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
