import Actionable from "../components/Organizations/Actionable";
import EveryRole from "../components/Organizations/EveryRole";
import Experience from "../components/Organizations/Experience";
import MentalFitness from "../components/Organizations/MentalFitness";
import MinimalDisruption from "../components/Organizations/MinimalDisruption";
import OrganizartionHeroSection from "../components/Organizations/OrganizartionHeroSection";
import OrganizationYourMind from "../components/Organizations/OrganizationYourMind";
import WellAbove from "../components/Organizations/WellAbove";

const Organization = () => {
    return (
        <div>
            <OrganizartionHeroSection />
            <WellAbove />
            <EveryRole />
            <MinimalDisruption />
            <Actionable />
            <MentalFitness />
            <Experience/>
            <OrganizationYourMind />

        </div>
    );
};

export default Organization;
