import Actionable from "../components/organizations/Actionable";
import EveryRole from "../components/organizations/EveryRole";
import Experience from "../components/organizations/Experience";
import MentalFitness from "../components/organizations/MentalFitness";
import MinimalDisruption from "../components/organizations/MinimalDisruption";
import OrganizartionHeroSection from "../components/organizations/OrganizartionHeroSection";
import OrganizationYourMind from "../components/organizations/OrganizationYourMind";
import WellAbove from "../components/organizations/WellAbove";

const Organization = () => {
  return (
    <div className="antialiased">
      <OrganizartionHeroSection />
      <WellAbove />
      <EveryRole />
      <MinimalDisruption />
      <Actionable />
      <MentalFitness />
      <Experience />
      <OrganizationYourMind />
    </div>
  );
};

export default Organization;
