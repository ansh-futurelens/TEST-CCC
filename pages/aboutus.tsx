import AboutUsHeroSection from "../components/AboutUs/AboutUsHeroSection";
import Approach from "../components/AboutUs/Approach";
import JoinOurMission from "../components/AboutUs/JoinOurMission";
import Mission from "../components/AboutUs/Mission";
import OurTeam from "../components/AboutUs/OurTeam";
import Values from "../components/AboutUs/Values";

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
