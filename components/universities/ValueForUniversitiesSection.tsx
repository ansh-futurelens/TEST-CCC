import { CONTENT_CONFIG } from "@/config/contentConfig";
import { LazyImage } from "../LazyMedia";

const ValueForUniversitiesSection = () => {
  const { HEADING, SUB_HEADING, LEFT_CARDS, RIGHT_CARDS } =
    CONTENT_CONFIG.UNIVERSITIES_PAGE.VALUE_OF_UNIVERSITIES;

  return (
    <div className="mind-energy-root">
      <div className="container-custom">
        <div className="mind-energy-heading-wrapper">
          <h2 className="mind-energy-heading-primary">{HEADING}</h2>
          <h6 className="mind-energy-sub-heading">{SUB_HEADING}</h6>
        </div>

        <div className="mind-energy-cards-wrapper">
          <div className="mind-energy-cards-column">
            {LEFT_CARDS.map((card, i) => (
              <div key={`left-card-${i}`} className="mind-energy-card">
                <div className="mind-energy-card-img-wrapper">
                  <LazyImage src={card.img} alt={card.title} className="mind-energy-card-img" />
                </div>
                <div className="mind-energy-card-content">
                  <h4 className="mind-energy-card-title">{card.title}</h4>
                  <h3 className="mind-energy-card-desc">{card.desc}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mind-energy-cards-column">
            {RIGHT_CARDS.map((card, i) => (
              <div key={`right-card-${i}`} className="mind-energy-card">
                <div className="mind-energy-card-img-wrapper">
                  <LazyImage src={card.img} alt={card.title} className="mind-energy-card-img" />
                </div>
                <div className="mind-energy-card-content">
                  <h4 className="mind-energy-card-title">{card.title}</h4>
                  <h3 className="mind-energy-card-desc">{card.desc}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueForUniversitiesSection;
