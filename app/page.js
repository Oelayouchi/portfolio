import CompaniesStrip from '../components/companies-strip';
import CertificationsSection from '../components/certifications-section';
import AlternanceBanner from '../components/alternance-banner';
import ThemeController from '../components/theme-controller';
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
      <ThemeController />
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
