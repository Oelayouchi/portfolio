import {
  AboutSection,
  CertificationsSection,
  CompaniesStrip,
  ContactSection,
  DataSection,
  EducationInterestsSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  ProjectsSection,
  StatsSection,
} from '../components/portfolio-sections';

// ============================================================================
// Home page
// ----------------------------------------------------------------------------
// The page is intentionally kept small. Content lives in /data and visual
// sections live in /components, which makes future updates much easier.
// ============================================================================

export default function Page() {
  return (
    <main>
      <Navigation />
      <CompaniesStrip />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <DataSection />
      <CertificationsSection />
      <EducationInterestsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
