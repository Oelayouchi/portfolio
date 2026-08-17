import CompaniesStrip from '../components/companies-strip';
import CertificationsSection from '../components/certifications-section';
import AlternanceBanner from '../components/alternance-banner';
import ThemeController from '../components/theme-controller';
import EducationInterestsSection from '../components/education-interests';
import Navigation from '../components/navigation';
import ProjectsSection from '../components/projects-section';
import ExperienceSection from '../components/experience-section';
import ContactSection from '../components/contact-section';
import HomeHero from '../components/home-hero';
import {
  AboutSection,
  DataSection,
  Footer,
} from '../components/portfolio-sections';

// ============================================================================
// Home page
// ----------------------------------------------------------------------------
// The homepage assembles modular sections. Company logos, certifications,
// education, projects and interests live in dedicated components.
// Deployment marker: 2026-08-17
// ============================================================================

export default function Page() {
  return (
    <main>
      <ThemeController />
      <Navigation />
      <CompaniesStrip />
      <HomeHero />
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
