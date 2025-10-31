import React, { useState } from "react";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const {
  TITLE,
  IMAGE,
  HEADING,
  ALWAYS_VISIBLE_TEXT,
  EXTRA_CONTENT,
  BUTTON_TEXT,
} = CONTENT_CONFIG.ABOUT_US_PAGE.VALUES;

const Values: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="values-root">
      <div className="values-container container-custom">
        <div className="values-wrapper">
          <div className="values-image-wrapper">
            <LazyImage src={IMAGE} alt={TITLE} className="values-image" />
          </div>

          <div className="values-content">
            <h2 className="values-heading">{TITLE}</h2>

            <h1 className="values-subheading">{HEADING}</h1>

            <h3 className="values-text">{ALWAYS_VISIBLE_TEXT}</h3>

            {showMore && (
              <div className="values-text">
                {EXTRA_CONTENT.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="values-button"
            >
              {showMore ? BUTTON_TEXT.VIEW_LESS : BUTTON_TEXT.LEARN_MORE}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
