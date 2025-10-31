import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { LazyImage } from "../LazyMedia";
import { CONTENT_CONFIG } from "@/config/contentConfig";

const { TITLE, SECTIONS } = CONTENT_CONFIG.ABOUT_US_PAGE.TEAM;

const OurTeam: React.FC = () => {
  const [openSections, setOpenSections] = useState<string[]>(["leadership"]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <section className="our-team-root">
      <div className="our-team-container container-custom">
        <h2 className="our-team-heading">{TITLE}</h2>

        <div className="our-team-sections-wrapper">
          {SECTIONS.map((section) => (
            <div key={section.id} className="our-team-section">
              <div
                className="our-team-section-header"
                onClick={() => toggleSection(section.id)}
              >
                <div className="our-team-section-header-title">
                  <div className="our-team-section-dot" />
                  <h3 className="our-team-section-heading">{section.title}</h3>
                </div>
                <GoChevronDown
                  className={`our-team-chevron ${
                    openSections.includes(section.id)
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </div>

              <div
                className={`our-team-members-wrapper ${
                  openSections.includes(section.id) ? "open" : "closed"
                }`}
              >
                <div className="our-team-grid">
                  {section.members.map((member, i) => (
                    <div key={i} className="our-team-card">
                      <div className="our-team-card-header">
                        <LazyImage
                          src={member.image}
                          alt={member.name}
                          className="our-team-image"
                        />
                        <div className="our-team-card-info">
                          <h4 className="our-team-name">{member.name}</h4>
                          <h4 className="our-team-role">{member.role}</h4>
                        </div>
                      </div>
                      <h3 className="our-team-description">
                        {member.description}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
