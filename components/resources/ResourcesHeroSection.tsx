import Header from "../common/Header";
import { CONTENT_CONFIG } from "@/config/contentConfig";
import { useCachedImage } from "../useCachedImage";

const ResourcesHeroSection = () => {
  const bgImage = useCachedImage("/media/bgs/resources_bg.webp");
  const { HEADING_PRIMARY, HEADING_SECONDARY } = CONTENT_CONFIG.RESOURCES_PAGE.HERO;

  return (
    <div
      className="hero-root"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease-in-out",
      }}
    >
      <div className="container-custom">
        <Header
          bgColor=""
          textColor="#FFFFFF"
          activeBgColor="#02514B"
          activeTextColor="#FFFFFF"
          hoverBgColor="#30706b"
          hoverTextColor="#FFFFFF"
          buttonBgColor="#b8543d"
          buttonHoverColor="#e5684c"
        />

        <div className="hero-content-wrapper">
          <div className="hero-left-section">
            <div className="hero-heading-container">
              <h1 className="hero-heading-primary very-bolder">
                {HEADING_PRIMARY} <br /> {HEADING_SECONDARY}
              </h1>
            </div>
          </div>

          <div className="hero-right-section">
            <img
              src="/media/resources/resources_header.webp"
              alt="Landing Girl"
              title="Landing Girl"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeroSection;
