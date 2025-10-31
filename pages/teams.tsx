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
      <AdvantageSection
        title="The Mind Skills Advantage"
        description1="Unlock your mind's full potential and gain a competitive edge in navigating tomorrow’s challenging environment. Find out how Mind Skills can transform your professional trajectory!"

        buttonText="Download PDF"
        buttonLink="https://apps.apple.com/in/app/id6621264428"

        imageSrc="/media/team/EBook.png"
        isRight={true}
        bgColor="bg-[#F0F0F0]" />
      <TeamTalent />
      <TeamYourMind />
    </div>

  );
};

export default Teams;
