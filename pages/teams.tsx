import AdvantageSection from "../components/common/AdvantageSection";
import MindSkillsSection from "../components/teams/MindSkillsSection";
import Qstudio from "../components/teams/Qstudio";
import TeamsHeroSection from "../components/teams/TeamsHeroSection";
import TeamTalent from "../components/teams/TeamTalents";
import TeamYourMind from "../components/teams/TeamYourMind";

const Teams = () => {
  return (
    <div className="antialiased">
      <TeamsHeroSection />
      <MindSkillsSection />
      <Qstudio />
      <AdvantageSection/>
      <TeamTalent />
      <TeamYourMind />
    </div>
  );
};

export default Teams;
