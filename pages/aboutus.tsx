import AboutUsHeroSection from "@/components/aboutus/AboutUsHeroSection";
import Approach from "../components/aboutus/Approach";
import JoinOurMission from "../components/aboutus/JoinOurMission";
import Mission from "../components/aboutus/Mission";
import OurTeam from "../components/aboutus/OurTeam";
import Values from "../components/aboutus/Values";

const AboutUs = () => {
  return (
    <div>
      <AboutUsHeroSection />
      <Mission />
      <Values />
      <Approach />
      <OurTeam />
      <JoinOurMission />
    </div>
  );
};

export default AboutUs;
