import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactsSection } from "../components/ContactsSection";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactsSection />
      <ScrollToTop />
    </div>
  );
}
