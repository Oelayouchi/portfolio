const tools = [
  { name: 'SQL', mark: 'SQL' },
  { name: 'Power BI', mark: 'BI' },
  { name: 'Python', mark: 'Py' },
  { name: 'Excel', mark: 'X' },
  { name: 'C/C++', mark: 'C++' },
  { name: 'STM32', mark: 'STM' },
  { name: 'AUTOSAR', mark: 'A' },
  { name: 'DOORS', mark: 'D' },
  { name: 'ISO 26262', mark: 'ISO' },
  { name: 'FPGA', mark: 'FPGA' },
  { name: 'EN 50129', mark: 'EN' },
];

const highlights = [
  { value: '3+', label: "Années d’expérience" },
  { value: '10+', label: 'Projets techniques' },
  { value: '2', label: 'Domaines clés', detail: 'Safety & Data' },
  { value: '4', label: 'Certifications affichées' },
];

const career = [
  {
    href: '#experience-parcelhome',
    period: '2022 – 2023',
    company: 'ParcelHome',
    role: 'Développeur électronique & logiciel',
    stack: 'C/C++ · Python · STM32',
  },
  {
    href: '#experience-continental',
    period: '2023 – 2024',
    company: 'Continental',
    role: 'Ingénieur sécurité logicielle automobile',
    stack: 'AUTOSAR · DOORS · ISO 26262',
  },
  {
    href: '#experience-alstom',
    period: '2024 – 2025',
    company: 'Alstom',
    role: 'Ingénieur sécurité ferroviaire',
    stack: 'FPGA · EN 50129',
  },
  {
    href: '#contact',
    period: '',
    company: 'À la recherche',
    role: 'Nouvelles opportunités Data & systèmes',
    stack: 'Data Analyst · Ingénierie · Alternance / CDI',
    search: true,
  },
];

function HeroIcon({ type }) {
  const common = {
    width: 21,
    height: 21,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  if (type === 'download') return <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
  if (type === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  if (type === 'briefcase') return <svg {...common}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>;
  return null;
}

export default function HomeHero() {
  return (
    <section id="top" className="homeHero">
      <div className="shell homeHeroShell">
        <div className="homeHeroMain">
          <div className="homeIdentityCard">
            <div className="homeIdentityVisual">
              <img src="/profile/favicon.png" alt="Identité visuelle Oussama EL AYOUCHI" />
            </div>
            <div className="homeIdentityCopy">
              <strong>Oussama EL AYOUCHI</strong>
              <span>Ingénieur systèmes embarqués & Safety</span>
            </div>
            <div className="homeAvailability"><i /> Disponible pour de nouvelles opportunités</div>
          </div>

          <div className="homeHeroIntro">
            <div className="homeEyebrow">INGÉNIEUR & DATA EN RECONVERSION</div>
            <h1>Oussama<br/><span>EL AYOUCHI</span></h1>
            <p>
              Ingénieur systèmes embarqués & Safety, actuellement en reconversion vers la <strong>Data Analyst.</strong>
            </p>

            <div className="homeHeroActions">
              <a className="button primary" href="#projects"><HeroIcon type="briefcase"/>Voir mes projets</a>
              <a className="button secondary" href="/documents/CV_Oussama_EL_AYOUCHI.pdf" target="_blank" rel="noreferrer"><HeroIcon type="download"/>Télécharger mon CV</a>
              <a className="homeContactLink" href="#contact"><HeroIcon type="mail"/>Me contacter</a>
            </div>

            <div className="homeStatusRow">
              <div><span>CDI</span><strong>Expériences professionnelles</strong></div>
              <div><span>À LA RECHERCHE</span><strong>Nouveau défi Data & systèmes</strong></div>
            </div>
          </div>

          <div className="homeHighlights" aria-label="Chiffres clés">
            {highlights.map((item) => (
              <div className="homeHighlightCard" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                {item.detail && <small>{item.detail}</small>}
              </div>
            ))}
          </div>
        </div>

        <div className="homeTools" aria-label="Technologies principales">
          {tools.map((tool) => (
            <div className="homeTool" key={tool.name} title={tool.name}>
              <span className="homeToolIcon" aria-hidden="true">{tool.mark}</span>
              <strong>{tool.name}</strong>
            </div>
          ))}
        </div>

        <div className="homeCareer">
          <div className="homeCareerTitle">
            <span>PARCOURS</span>
            <h2>Expériences professionnelles</h2>
          </div>
          <div className="homeCareerLine">
            {career.map((item) => (
              <a className={`homeCareerItem${item.search ? ' homeCareerSearch' : ''}`} href={item.href} key={item.company}>
                <span className="homeCareerDot" />
                {item.period && <small>{item.period}</small>}
                <strong>{item.company}</strong>
                <p>{item.role}</p>
                <em>{item.stack}</em>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
