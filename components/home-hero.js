const tools = [
  { name: 'SQL', icon: 'database', tone: 'sql' },
  { name: 'Power BI', icon: 'bars', tone: 'powerbi' },
  { name: 'Python', icon: 'python', tone: 'python' },
  { name: 'Excel', icon: 'excel', tone: 'excel' },
  { name: 'C/C++', icon: 'code', tone: 'cpp' },
  { name: 'STM32', icon: 'chip', tone: 'stm32' },
  { name: 'AUTOSAR', icon: 'auto', tone: 'autosar' },
  { name: 'DOORS', icon: 'doors', tone: 'doors' },
  { name: 'ISO 26262', icon: 'shield', tone: 'iso' },
  { name: 'FPGA', icon: 'fpga', tone: 'fpga' },
  { name: 'EN 50129', icon: 'train', tone: 'en' },
];

const highlights = [
  { value: '3+', label: "Années d’expérience" },
  { value: '10+', label: 'Projets techniques' },
  { value: '4', label: 'Prix & distinctions', detail: 'Robotique & innovation' },
  { value: '2', label: 'Domaines clés', detail: 'Safety & Data' },
  { value: '4', label: 'Certifications affichées' },
];

const career = [
  {
    type: 'search',
    href: '#contact',
    company: 'À la recherche',
    role: 'Nouvelles opportunités Data & systèmes',
    stack: 'Data Analyst · Ingénierie · Alternance / CDI',
  },
  {
    href: '#experience-alstom',
    logo: '/companies/alstom.png',
    period: '2024 – 2025',
    company: 'Alstom',
    role: 'Ingénieur sécurité ferroviaire',
    stack: 'FPGA · EN 50129',
  },
  {
    href: '#experience-continental',
    logo: '/companies/continental.png',
    period: '2023 – 2024',
    company: 'Continental',
    role: 'Ingénieur sécurité logicielle automobile',
    stack: 'AUTOSAR · DOORS · ISO 26262',
  },
  {
    href: '#experience-parcelhome',
    logo: '/companies/parcelhom.png',
    period: '2022 – 2023',
    company: 'ParcelHome',
    role: 'Développeur électronique & logiciel',
    stack: 'C/C++ · Python · STM32',
  },
  {
    type: 'stages',
    company: 'Stages',
    stages: [
      { href: '#experience-parcelhome-stage', logo: '/companies/parcelhom.png', name: 'ParcelHome', period: '2021 – 2022' },
      { href: '#experience-ocp', logo: '/companies/ocp.png', name: 'OCP', period: '2020' },
      { href: '#experience-ocp-2019', logo: '/companies/ocp.png', name: 'OCP', period: '2019' },
      { href: '#experience-onda-2018', logo: '/companies/onda.png', name: 'ONDA', period: '2018' },
    ],
  },
];

function HeroIcon({ type }) {
  const common = { width: 21, height: 21, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' };
  if (type === 'download') return <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
  if (type === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  return null;
}

function ToolLogo({ icon }) {
  const common = { viewBox: '0 0 32 32', width: 30, height: 30, 'aria-hidden': 'true' };
  if (icon === 'database') return <svg {...common}><ellipse cx="16" cy="7" rx="10" ry="4"/><path d="M6 7v7c0 2.2 4.5 4 10 4s10-1.8 10-4V7M6 14v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7"/></svg>;
  if (icon === 'bars') return <svg {...common} fill="currentColor"><rect x="5" y="17" width="4" height="10" rx="1"/><rect x="11" y="12" width="4" height="15" rx="1"/><rect x="17" y="7" width="4" height="20" rx="1"/><rect x="23" y="3" width="4" height="24" rx="1"/></svg>;
  if (icon === 'python') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 15V9c0-4 3-6 8-6h4c3 0 5 2 5 5v5H14c-4 0-6 2-6 6v2"/><circle cx="19" cy="7" r="1" fill="currentColor"/><path d="M24 17v6c0 4-3 6-8 6h-4c-3 0-5-2-5-5v-5h11c4 0 6-2 6-6v-2"/><circle cx="13" cy="25" r="1" fill="currentColor"/></svg>;
  if (icon === 'excel') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="4" width="18" height="24" rx="2"/><path d="M14 4v24M8 11h18M8 18h18M3 9l8 14M11 9 3 23"/></svg>;
  if (icon === 'code') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 7-7 9 7 9M20 7l7 9-7 9M18 4l-4 24"/></svg>;
  if (icon === 'chip') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="16" height="16" rx="2"/><rect x="12" y="12" width="8" height="8"/><path d="M12 2v6M20 2v6M12 24v6M20 24v6M2 12h6M2 20h6M24 12h6M24 20h6"/></svg>;
  if (icon === 'auto') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="16" cy="16" r="11"/><path d="M9 20h14l-2-7H11l-2 7ZM12 20v3M20 20v3"/></svg>;
  if (icon === 'doors') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="4" width="18" height="24" rx="2"/><path d="M13 4v24M18 16h3"/></svg>;
  if (icon === 'shield') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 3 27 7v8c0 7-4.7 11.8-11 14C9.7 26.8 5 22 5 15V7l11-4Z"/><path d="m11 16 3 3 7-8"/></svg>;
  if (icon === 'fpga') return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="7" width="18" height="18" rx="2"/><path d="M11 12h10M11 16h5M11 20h10M3 11h4M3 16h4M3 21h4M25 11h4M25 16h4M25 21h4"/></svg>;
  return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="7" y="3" width="18" height="23" rx="4"/><path d="M10 10h12M11 26l-3 4M21 26l3 4"/><circle cx="12" cy="20" r="1"/><circle cx="20" cy="20" r="1"/></svg>;
}

function SearchLogo() {
  return <span className="homeSearchLogo" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8"/></svg></span>;
}

export default function HomeHero() {
  return (
    <section id="top" className="homeHero">
      <div className="shell homeHeroShell">
        <div className="homeHeroMain">
          <div className="homeIdentityCard">
            <div className="homeIdentityVisual"><img src="/profile/favicon.png" alt="Identité visuelle Oussama EL AYOUCHI" /></div>
            <div className="homeIdentityCopy">
              <strong>Oussama EL AYOUCHI</strong>
              <span>Ingénieur systèmes embarqués & Safety</span>
              <p>Ingénieur polyvalent, j’ai évolué du développement électronique et logiciel vers la sûreté de fonctionnement automobile et ferroviaire. Aujourd’hui, je complète ce parcours par une spécialisation en Data Analyse.</p>
            </div>
            <div className="homeAvailability"><i /> Disponible pour de nouvelles opportunités</div>
          </div>

          <div className="homeHeroIntro">
            <div className="homeEyebrow">INGÉNIEUR & DATA EN RECONVERSION</div>
            <h1>Oussama<br/><span>EL AYOUCHI</span></h1>
            <p>Ingénieur systèmes embarqués & Safety, actuellement en reconversion vers la <strong>Data Analyst.</strong></p>
            <div className="homeHeroActions">
              <a className="button primary" href="#contact"><HeroIcon type="mail"/>Me contacter</a>
              <a className="button secondary" href="/documents/CV_Oussama_EL_AYOUCHI.pdf" target="_blank" rel="noreferrer"><HeroIcon type="download"/>Télécharger mon CV</a>
            </div>
            <div className="homeStatusRow">
              <div><span>CDI</span><strong>Expériences professionnelles</strong></div>
              <div><span>À LA RECHERCHE</span><strong>Nouveau défi Data & systèmes</strong></div>
            </div>
          </div>

          <div className="homeHighlights" aria-label="Chiffres clés">
            {highlights.map((item) => <div className="homeHighlightCard" key={item.label}><strong>{item.value}</strong><span>{item.label}</span>{item.detail && <small>{item.detail}</small>}</div>)}
          </div>
        </div>

        <div className="homeTools" aria-label="Technologies principales">
          {tools.map((tool) => <div className={`homeTool homeTool-${tool.tone}`} key={tool.name} title={tool.name}><span className="homeToolLogo"><ToolLogo icon={tool.icon}/></span><strong>{tool.name}</strong></div>)}
        </div>

        <div className="homeCareer">
          <div className="homeCareerTitle"><span>PARCOURS</span><h2>Expériences professionnelles</h2></div>
          <div className="homeCareerLine">
            {career.map((item) => {
              if (item.type === 'stages') {
                return <div className="homeCareerItem homeCareerStages" key="stages"><span className="homeCareerDot"/><strong>Stages</strong><div className="homeStageList">{item.stages.map((stage) => <a href={stage.href} key={`${stage.name}-${stage.period}`}><img src={stage.logo} alt=""/><span><b>{stage.name}</b><small>{stage.period}</small></span></a>)}</div></div>;
              }
              return <a className={`homeCareerItem${item.type === 'search' ? ' homeCareerSearch' : ''}`} href={item.href} key={item.company}><span className="homeCareerDot"/><span className="homeCareerLogo">{item.type === 'search' ? <SearchLogo/> : <img src={item.logo} alt={`Logo ${item.company}`}/>}</span>{item.period && <small>{item.period}</small>}<strong>{item.company}</strong><p>{item.role}</p><em>{item.stack}</em></a>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
