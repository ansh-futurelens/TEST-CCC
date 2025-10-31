import CommonSection1 from "../components/common/CommonSection1";
import HeroSection from "../components/home/HeroSection";
import MindEnergySection from "../components/home/MindEnergySection";
import MindFocusSection from "../components/home/MindFocusSection";
import PeoplesSaying from "../components/home/PeoplesSaying";

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />
      <MindEnergySection />
      <MindFocusSection />
      <CommonSection1
        title="Your mind is your most powerful asset."
        description1="In today's relentlessly demanding environment, a strong, clear mind isn't a luxury – it's a necessity."
        description2="Join MyQStudio - the only Mind Skills app that helps you achieve peak mental performance."
        buttonText="Try for Free"
        buttonLink="https://apps.apple.com/in/app/id6621264428"
        learnMoreText="Learn more"
        learnMoreLink="https://apps.apple.com/in/app/id6621264428"
        imageSrc="/media/landing/tree.png"
        isRight={false}
        bgColor="bg-gray-bg"
      />
      <CommonSection1
        title="Collaborate, Innovate, Excel - Together."
        description1="Teams that are mentally fit have higher engagement for a common goal, develop strong interpersonal bonds, create an environment where innovation flourishes, and recover from setbacks faster, together."
        description2=""
        buttonText="Get Started"
        buttonLink="https://apps.apple.com/in/app/id6621264428"
        learnMoreText="Explore more"
        learnMoreLink="https://apps.apple.com/in/app/id6621264428"
        imageSrc="/media/landing/collabrate.png"
        isRight={true}
        bgColor="bg-gray-50"
      />
      <CommonSection1
        title="Unlock the full potential of your organization."
        description1="In today's rapidly evolving business landscape, technical skills alone are no longer sufficient for growth. Organizations need to invest in upskilling employees with Mind Skills to navigate complexities, drive innovation, and adapt to change."
        description2="Find out how Q Studio’s business solutions can help you unlock growth."
        buttonText="Schedule a Demo"
        buttonLink="https://apps.apple.com/in/app/id6621264428"
        learnMoreText="Check out our solutions"
        learnMoreLink="https://apps.apple.com/in/app/id6621264428"
        imageSrc="/media/landing/unlock.png"
        isRight={false}
        bgColor="bg-gray-bg"
      />
      <PeoplesSaying />
    </div>
  );
};

export default Home;
