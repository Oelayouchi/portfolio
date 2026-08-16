// ============================================================================
// Professional companies strip
// ----------------------------------------------------------------------------
// Each company logo links directly to its detailed experience section.
// Display order kept as requested: OCP → ParcelHome → Continental → Alstom.
// ============================================================================

const companies = [
  {
    name: 'Office Chérifien des Phosphates',
    logo: '/companies/ocp.png',
    alt: 'Logo OCP — Office Chérifien des Phosphates',
    href: '#experience-ocp',
  },
  {
    name: 'ParcelHome',
    logo: '/companies/parcelhom.png',
    alt: 'Logo ParcelHome',
    href: '#experience-parcelhome',
  },
  {
    name: 'Continental Automotive',
    logo: '/companies/continental.png',
    alt: 'Logo Continental Automotive',
    href: '#experience-continental',
  },
  {
    name: 'Alstom Transport',
    logo: '/companies/alstom.png',
    alt: 'Logo Alstom Transport',
    href: '#experience-alstom',
  },
];

export default function CompaniesStrip() {
  return (
    <section className="companiesBar" aria-label="Expériences professionnelles">
      <div className="companiesShell shell">
        <div className="companiesHeading">
          <span />
          <p>EXPÉRIENCES PROFESSIONNELLES</p>
          <span />
        </div>

        <div className="companiesGrid">
          {companies.map((company) => (
            <a
              className="companyItem companyLink"
              href={company.href}
              key={company.name}
              aria-label={`Voir mon expérience chez ${company.name}`}
            >
              <div className="companyLogoWrap">
                <img
                  className="companyLogo"
                  src={company.logo}
                  alt={company.alt}
                  loading="eager"
                />
              </div>

              <p>{company.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
