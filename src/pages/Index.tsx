import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import PortfolioGrid from "../components/PortfolioGrid";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsSection />
      <EducationSection />
      <PortfolioGrid />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default Index;