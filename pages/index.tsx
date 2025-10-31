import MindPowerSection from "../components/common/CommonSection1";
import HeroSection from "../components/home/HeroSection";
import MindEnergySection from "../components/home/MindEnergySection";
import MindFocusSection from "../components/home/MindFocusSection";
import PeoplesSaying from "../components/home/PeoplesSaying";
import UnlockPotentialSection from "../components/home/UnlockPotentialSection";
import CollaborateSection from "../components/home/CollaborateSection";

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />
      <MindEnergySection />
      <MindFocusSection />
      <MindPowerSection />
      <CollaborateSection />
      <UnlockPotentialSection />
      <PeoplesSaying />
    </div>
  );
};

export default Home;
