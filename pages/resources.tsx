import BlogsList from "@/components/resources/BlogsList";
import ResourcesHeroSection from "../components/resources/ResourcesHeroSection";

const Resources = () => {
  return (
    <div className="antialiased">
      <ResourcesHeroSection />
      <BlogsList />
    </div>
  );
};

export default Resources;
