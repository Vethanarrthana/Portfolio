import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"
import { RevealWrapper } from "@/components/reveal-wrapper"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RevealWrapper>
        <div className="pt-16">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <CertificationsSection />
          <Footer />
        </div>
      </RevealWrapper>
    </main>
  )
}
