import StudentsMindSkills from "../components/universities/StudentsMindSkills";
import LearningNovelSection from "../components/universities/LearningNovelSection";
import UniversitiesHeroSection from "../components/universities/UniversitiesHeroSection";
import ValueForUniversitiesSection from "@/components/universities/ValueForUniversitiesSection";
import HumanMindSection from "@/components/universities/HumanMindSection";
import DiscoverPossibilitiesForm from "@/components/universities/DiscoverPossibilitiesForm";

const Universities = () => {
  return (
    <div className="antialiased">
      <UniversitiesHeroSection />
      <StudentsMindSkills />
      <ValueForUniversitiesSection />
      <LearningNovelSection />
      <HumanMindSection />
      <DiscoverPossibilitiesForm />
    </div>
  );
};

export default Universities;
