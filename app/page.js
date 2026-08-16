import CompaniesStrip from '../components/companies-strip';
import CertificationsSection from '../components/certifications-section';
import AlternanceBanner from '../components/alternance-banner';
import ThemeController from '../components/theme-controller';
import EducationInterestsSection from '../components/education-interests';
import Navigation from '../components/navigation';
import {
  AboutSection,
  ContactSection,
  DataSection,
  ExperienceSection,
  Footer,
  HeroSection,
  ProjectsSection,
  StatsSection,
} from '../components/portfolio-sections';

// ============================================================================
// Home page
// ----------------------------------------------------------------------------
// The homepage assembles modular sections. Company logos, certifications,
// education and interests live in dedicated components for maintainability.
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
