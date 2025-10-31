import React, { useState } from "react";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const {
  TITLE,
  IMAGE,
  ALWAYS_VISIBLE_TEXT,
  EXTRA_CONTENT,
  BUTTON_TEXT,
} = CONTENT_CONFIG.ABOUT_US_PAGE.APPROACH;

const Approach: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="approach-root">
      <div className="approach-container container-custom">
        <div className="approach-wrapper">
          <div className="approach-image-wrapper">
            <LazyImage src={IMAGE} alt={TITLE} className="approach-image" />
          </div>

          <div className="approach-content">
            <h2 className="approach-heading">{TITLE}</h2>

            <h3 className="approach-text">{ALWAYS_VISIBLE_TEXT}</h3>

            {showMore && (
              <div className="approach-text">
                {EXTRA_CONTENT.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="approach-button"
            >
              {showMore ? BUTTON_TEXT.VIEW_LESS : BUTTON_TEXT.LEARN_MORE}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
