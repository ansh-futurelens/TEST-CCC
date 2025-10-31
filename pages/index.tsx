import HeroSection from "../components/home/HeroSection";
import MindEnergySection from "../components/home/MindEnergySection";
import MindFocusSection from "../components/home/MindFocusSection";
import PeoplesSaying from "../components/home/PeoplesSaying";
import UnlockPotentialSection from "../components/home/UnlockPotentialSection";
import MindPowerSection from "../components/home/MindPowerSection";
import Excellence from "../components/home/Excellence";

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />
      <MindEnergySection />
      <MindFocusSection />
      <MindPowerSection />
      <Excellence />
      <UnlockPotentialSection />
      <PeoplesSaying />
    </div>
  );
};

export default Home;
