import CompaniesStrip from '../components/companies-strip';
import CertificationsSection from '../components/certifications-section';
import {
  AboutSection,
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
// The homepage assembles modular sections. Company logos and certifications
// live in dedicated components so their assets can be maintained independently.
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
