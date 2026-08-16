// ============================================================================
// Professional companies strip
// ----------------------------------------------------------------------------
// Uses the official PNG assets stored in /public/companies.
// Display order requested: OCP → ParcelHome → Continental → Alstom.
// ============================================================================

const companies = [
  {
    name: 'Office Chérifien des Phosphates',
    logo: '/companies/ocp.png',
    alt: 'Logo OCP — Office Chérifien des Phosphates',
  },
  {
    name: 'ParcelHome',
    logo: '/companies/parcelhom.png',
    alt: 'Logo ParcelHome',
  },
  {
    name: 'Continental Automotive',
    logo: '/companies/continental.png',
    alt: 'Logo Continental Automotive',
  },
  {
    name: 'Alstom Transport',
    logo: '/companies/alstom.png',
    alt: 'Logo Alstom Transport',
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
            <article className="companyItem" key={company.name}>
              <div className="companyLogoWrap">
                <img
                  className="companyLogo"
                  src={company.logo}
                  alt={company.alt}
                  loading="eager"
                />
              </div>

              <p>{company.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
