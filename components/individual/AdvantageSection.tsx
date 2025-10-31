import { CONTENT_CONFIG } from "@/config/contentConfig";
import React, { useState } from "react";
import DownloadForm from "../universities/DownloadForm";

const AdvantageSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const SECTION = CONTENT_CONFIG.UNIVERSITIES_PAGE.EBOOK_SECTION;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="ebook-root">
      <div className="ebook-container container-custom">
        <div className="ebook-grid">
          <div className="ebook-text-section">
            <h2 className="ebook-heading">{SECTION.HEADING}</h2>
            <h6 className="ebook-sub-heading">{SECTION.SUB_HEADING}</h6>
            <div className="ebook-button-wrapper">
              <button
                onClick={handleOpenModal}
                className="ebook-button"
              >
                {SECTION.BUTTON.TEXT}
              </button>
            </div>
          </div>
  
          <div className="ebook-image-section">
            <img
              src="/media/team/EBook.webp"
              alt="Section Visual"
              className="ebook-image"
            />
          </div>
        </div>
      </div>
  
      {isModalOpen && (
        <div className="ebook-modal-overlay">
          <DownloadForm onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
  
};

export default AdvantageSection;
