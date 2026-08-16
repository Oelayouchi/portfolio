import AlternanceBanner from '../components/alternance-banner';
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
// The homepage assembles modular sections. Company logos, certifications and
// the alternance availability banner live in dedicated components.
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
      <AlternanceBanner />
    </main>
  );
}
