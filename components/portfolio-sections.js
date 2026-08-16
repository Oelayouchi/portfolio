import {
  certifications,
  education,
  experiences,
  interests,
  projects,
} from '../data/portfolio';
import { SectionLabel, Tags } from './ui';

function Icon({ name, className = '' }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  if (name === 'download') return <svg {...common}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>;
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
  if (name === 'chip') return <svg {...common}><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>;
  if (name === 'shield') return <svg {...common}><path d="M12 3 20 6v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z"/><path d="M12 8v8"/></svg>;
  if (name === 'train') return <svg {...common}><rect x="6" y="3" width="12" height="15" rx="3"/><path d="M8 7h8M9 18l-2 3M15 18l2 3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/></svg>;
  if (name === 'chart') return <svg {...common}><path d="M5 20v-7h3v7M10.5 20V8h3v12M16 20V3h3v17"/></svg>;
  if (name === 'chevron') return <svg {...common}><path d="m9 18 6-6-6-6"/></svg>;
  if (name === 'moon') return <svg {...common}><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z"/></svg>;
  if (name === 'sun') return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
  return null;
}

export function Navigation() {
  return (
    <header className="navBar">
      <nav className="nav shell" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Retour en haut">OE<span>.</span></a>
        <div className="navRight">
          <div className="navlinks">
            <a className="active" href="#about">À propos</a>
            <a href="#experience">Expérience</a>
            <a href="#projects">Projets</a>
            <a href="#data">Data</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="themeToggle" aria-label="Sélecteur de thème visuel">
            <span><Icon name="moon" /></span>
            <span className="themeActive"><Icon name="sun" /></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function HeroSection() {
  const axes = [
    { number: '01', title: 'Systèmes embarqués', detail: 'C / C++ / Python / Hardware', icon: 'chip', tone: 'blue' },
    { number: '02', title: 'Safety automobile', detail: 'ISO 26262 / AUTOSAR', icon: 'shield', tone: 'cyan' },
    { number: '03', title: 'Safety ferroviaire', detail: 'EN 50126/28/29', icon: 'train', tone: 'green' },
    { number: '04', title: 'Data Analytics', detail: 'SQL / Power BI / Python', icon: 'chart', tone: 'purple' },
  ];

  return (
    <section id="top" className="heroSection">
      <div className="hero shell">
        <div className="heroIntro">
          <div className="heroBadge"><span className="heroBadgeDot"/>INGÉNIEUR & DATA EN RECONVERSION</div>
          <h1>Oussama<br/><span>EL AYOUCHI</span></h1>
          <p className="lead">Ingénieur systèmes embarqués & Safety,<br className="desktopBreak"/> actuellement en reconversion vers la <strong>Data Analyst.</strong></p>
          <div className="heroActions">
            <a className="button primary" href="/documents/CV_Oussama_EL_AYOUCHI.pdf" target="_blank" rel="noreferrer"><Icon name="download"/>Télécharger mon CV</a>
            <a className="button secondary" href="#contact"><Icon name="mail"/>Me contacter</a>
          </div>
        </div>

        <aside className="heroCard">
          <h2>Mon parcours en 4 axes</h2>
          <div className="axisList">
            {axes.map((axis) => (
              <div className={`axis axis-${axis.tone}`} key={axis.number}>
                <div className="axisNumber">{axis.number}</div>
                <div className="axisIcon"><Icon name={axis.icon}/></div>
                <div className="axisContent"><h3>{axis.title}</h3><p>{axis.detail}</p></div>
                <div className="axisArrow"><Icon name="chevron"/></div>
              </div>
            ))}
          </div>
        </aside>

        <a className="scrollHint" href="#about"><span className="mouseShape"><i/></span><span>Scroller pour en savoir plus</span><b>↓</b></a>
      </div>
    </section>
  );
}

export function StatsSection() {
  return <section className="stats shell" aria-label="Chiffres clés"><div><b>2</b><span>Diplômes supérieurs</span></div><div><b>3+</b><span>Années d’expérience</span></div><div><b>10+</b><span>Projets techniques</span></div><div><b>4</b><span>Certifications affichées</span></div></section>;
}

export function AboutSection() {
  return <section id="about" className="section shell split"><div><SectionLabel>À PROPOS</SectionLabel><h2>Un parcours technique construit autour des systèmes complexes.</h2></div><div className="copy"><p>Diplômé en génie électrique et systèmes embarqués, puis titulaire d’un Master 2 en Ingénierie des Systèmes Temps Réel, j’ai évolué de la conception embarquée vers la sûreté de fonctionnement automobile et ferroviaire.</p><p>Mes expériences m’ont amené à travailler sur des systèmes connectés, des protocoles de communication, l’automatisation des tests, la traçabilité d’exigences Safety et l’analyse de défaillances. Aujourd’hui, je transforme cette base d’ingénieur en expertise Data avec SQL, Power BI, Python et Excel.</p></div></section>;
}

function getExperienceDisplayName(experience) {
  if (experience.id === 'experience-alstom') return 'ALSTOM';
  if (experience.id === 'experience-continental') return 'CONTINENTAL';
  if (experience.id.startsWith('experience-parcelhome')) return 'ParcelHome';
  if (experience.id === 'experience-ocp') return 'OCP';
  return experience.company;
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section shell">
      <SectionLabel>EXPÉRIENCE</SectionLabel>
      <h2>Des systèmes embarqués aux systèmes critiques.</h2>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="experience experienceRefined" id={experience.id} key={experience.id}>
            <div className="experienceBody">
              <div className="experienceTopRow">
                <div className="experienceIdentity">
                  <div className="experienceLogoInline">
                    <img src={experience.logo} alt={`Logo ${getExperienceDisplayName(experience)}`} loading="lazy" />
                  </div>
                  <div>
                    <h3>{getExperienceDisplayName(experience)}</h3>
                    <p className="experienceDepartment">{experience.department}</p>
                  </div>
                </div>

                <div className="experienceMetaTop">
                  <strong>{experience.period}</strong>
                  <span>{experience.place}</span>
                </div>
              </div>

              <h4>{experience.role}</h4>

              <div className="experienceBlock">
                <h5>Objectifs</h5>
                <ul>
                  {experience.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              </div>

              <div className="experienceBlock">
                <h5>Réalisations</h5>
                <ul>
                  {experience.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>

              <div className="experienceBlock">
                <h5>Environnement technique</h5>
                <Tags items={experience.stack}/>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section shell">
      <SectionLabel>PROJETS D’ÉTUDE</SectionLabel>
      <h2>Projets techniques réalisés.</h2>

      <div className="grid projects">
        {projects.map((project, index) => (
          <article className="card projectDetailed" key={project.title}>
            <div className="num">{String(index + 1).padStart(2, '0')}</div>
            <p className="projectPeriod">{project.period}</p>
            <p className="mini">{project.institution}</p>
            <h3>{project.title}</h3>
            <p className="projectType">{project.type}</p>

            <div className="projectContent">
              <h4>Objectif</h4>
              <p>{project.objective}</p>
              <h4>Réalisations</h4>
              <ul>
                {project.tasks.map((task) => <li key={task}>{task}</li>)}
              </ul>
            </div>

            <Tags items={project.stack}/>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DataSection() {
  return <section id="data" className="section shell dataPanel"><div><SectionLabel>RECONVERSION DATA</SectionLabel><h2>From Embedded Systems to Data Analytics.</h2><p>Ma transition vers la Data s’appuie sur une expérience déjà centrée sur l’acquisition, le décodage, le test et l’analyse de données techniques : capteurs, logs, API, Protobuf, Excel et Python.</p></div><div className="pipeline"><span>Collecte<br/><b>API · Logs · Capteurs</b></span><i>→</i><span>Transformation<br/><b>SQL · Python · Power Query</b></span><i>→</i><span>Analyse<br/><b>KPI · DAX · Excel</b></span><i>→</i><span>Visualisation<br/><b>Power BI</b></span></div></section>;
}

export function CertificationsSection() {
  return <section id="certifications" className="section shell"><SectionLabel>CERTIFICATIONS</SectionLabel><h2>Formation continue & spécialisation.</h2><div className="grid certs">{certifications.map((certification) => <article className="cert" key={certification.title}><img src={certification.image} alt={`Certificat ${certification.title}`} loading="lazy"/><div><h3>{certification.title}</h3><p className="meta">{certification.meta}</p><p>{certification.skills}</p></div></article>)}</div></section>;
}

const educationDisplay = [
  {
    year: '2022',
    degree: 'Master 2 - Ingénierie des Systèmes Temps Réel',
    institution: 'UNIVERSITÉ PAUL SABATIER TOULOUSE III',
    logo: '/schools/universite-paul-sabatier.png',
  },
  {
    year: '2020',
    degree: 'Diplôme Ingénieur - Génie Electrique – Systèmes Embarqués',
    institution: 'ÉCOLE NATIONALE DES SCIENCES APPLIQUÉES, MAROC',
    logo: '/schools/ensa.png',
  },
];

export function EducationInterestsSection() {
  return (
    <section className="section shell twoCols educationInterests">
      <div>
        <SectionLabel>FORMATION</SectionLabel>
        <h2>Diplômes</h2>

        {education.map((item, index) => {
          const display = educationDisplay[index];

          return (
            <article className="edu eduDetailed educationCard" key={item.title}>
              <div className="educationHeader">
                <div className="educationSchoolLogo">
                  <object data={display.logo} type="image/png" aria-label={`Logo ${display.institution}`}>
                    <span>Logo école</span>
                  </object>
                </div>

                <div className="educationYear">{display.year}</div>

                <div className="educationTitleBlock">
                  <p>Diplôme obtenu : <strong>{display.degree}</strong></p>
                  <p><em>Établissement :</em> <strong>{display.institution}</strong></p>
                </div>
              </div>

              {item.sections.map((section, sectionIndex) => (
                <div className="eduSection" key={`${item.title}-${sectionIndex}`}>
                  {section.title && <h4>{section.title}</h4>}
                  <ul>
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              ))}
            </article>
          );
        })}
      </div>

      <div>
        <SectionLabel>CENTRES D’INTÉRÊT</SectionLabel>
        <h2>En dehors du travail</h2>
        <div className="interestList">{interests.map((interest) => <span key={interest}>{interest}</span>)}</div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return <section id="contact" className="section shell contact"><SectionLabel>CONTACT</SectionLabel><h2>Construisons la prochaine étape.</h2><p>Je recherche une alternance en Data Analyse et je reste ouvert aux échanges autour de la Data, du logiciel embarqué et de la sûreté de fonctionnement.</p><div className="heroActions"><a className="button primary" href="mailto:oussama.elayouchi@gmail.com">oelayouchi@gmail.com</a><a className="button" href="https://www.linkedin.com/in/oelayouchi/" target="_blank" rel="noreferrer">LinkedIn</a></div></section>;
}

export function Footer() {
  return <footer className="shell footer">© 2026 Oussama EL AYOUCHI — Portfolio</footer>;
}
