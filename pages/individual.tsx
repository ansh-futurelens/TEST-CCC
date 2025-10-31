import Skills from "../components/individual/Skills";
import IndividualHeroSection from "../components/individual/IndividualHeroSection";
import MyQStudio from "../components/individual/MyQStudioApp";
import YourMind from "../components/individual/YourMind";
import MindSkills from "../components/individual/MindSkills";
import WhatNeed from "../components/individual/WhatNeed";
import AdvantageSection from "@/components/individual/AdvantageSection";

const Individual = () => {
  return (
    <div className="antialiased">
      <IndividualHeroSection />
      <Skills />
      <MyQStudio />
      <MindSkills />
      <WhatNeed />
      <AdvantageSection />
      <YourMind />
    </div>
  );
};

export default Individual;
