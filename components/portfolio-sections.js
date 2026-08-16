import {
  certifications,
  education,
  experiences,
  interests,
  projects,
} from '../data/portfolio';
import { SectionLabel, Tags } from './ui';

// ============================================================================
// Main navigation
// ============================================================================
export function Navigation() {
  return (
    <nav className="nav shell" aria-label="Navigation principale">
      <a className="brand" href="#top" aria-label="Retour en haut">
        OE.
      </a>

      <div className="navlinks">
        <a href="#about">À propos</a>
        <a href="#experience">Expérience</a>
        <a href="#projects">Projets</a>
        <a href="#data">Data</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

// ============================================================================
// Hero
// ============================================================================
export function HeroSection() {
  return (
    <section id="top" className="hero shell">
      <div>
        <SectionLabel>INGÉNIERIE · SAFETY · DATA</SectionLabel>

        <h1>
          Oussama
          <br />
          <span>EL AYOUCHI</span>
        </h1>

        <p className="lead">
          Ingénieur systèmes embarqués & Safety, actuellement en reconversion
          vers la Data Analyse.
        </p>

        <div className="heroActions">
          <a className="button primary" href="#projects">
            Explorer mes projets
          </a>

          <a
            className="button"
            href="/documents/CV_Oussama_EL_AYOUCHI.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Voir mon CV
          </a>
        </div>

        <div className="quick">
          <span>Lyon</span>
          <span>Mobile France</span>
          <span>Disponible pour alternance Data</span>
        </div>
      </div>

      <aside className="heroCard">
        <p className="mini">MON PARCOURS EN 4 AXES</p>

        <div className="axis">
          <b>01</b>
          <span>Systèmes embarqués</span>
        </div>
        <div className="axis">
          <b>02</b>
          <span>Safety automobile</span>
        </div>
        <div className="axis">
          <b>03</b>
          <span>Safety ferroviaire</span>
        </div>
        <div className="axis active">
          <b>04</b>
          <span>Data Analytics</span>
        </div>
      </aside>
    </section>
  );
}

// ============================================================================
// Key figures
// ============================================================================
export function StatsSection() {
  return (
    <section className="stats shell" aria-label="Chiffres clés">
      <div>
        <b>2</b>
        <span>Diplômes supérieurs</span>
      </div>
      <div>
        <b>3+</b>
        <span>Années d’expérience</span>
      </div>
      <div>
        <b>10+</b>
        <span>Projets techniques</span>
      </div>
      <div>
        <b>4</b>
        <span>Certifications affichées</span>
      </div>
    </section>
  );
}

// ============================================================================
// About
// ============================================================================
export function AboutSection() {
  return (
    <section id="about" className="section shell split">
      <div>
        <SectionLabel>À PROPOS</SectionLabel>
        <h2>Un parcours technique construit autour des systèmes complexes.</h2>
      </div>

      <div className="copy">
        <p>
          Diplômé en génie électrique et systèmes embarqués, puis titulaire
          d’un Master 2 en Ingénierie des Systèmes Temps Réel, j’ai évolué de
          la conception embarquée vers la sûreté de fonctionnement automobile
          et ferroviaire.
        </p>

        <p>
          Mes expériences m’ont amené à travailler sur des systèmes connectés,
          des protocoles de communication, l’automatisation des tests, la
          traçabilité d’exigences Safety et l’analyse de défaillances.
          Aujourd’hui, je transforme cette base d’ingénieur en expertise Data
          avec SQL, Power BI, Python et Excel.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// Professional experience
// ============================================================================
export function ExperienceSection() {
  return (
    <section id="experience" className="section shell">
      <SectionLabel>EXPÉRIENCE</SectionLabel>
      <h2>Des systèmes embarqués aux systèmes critiques.</h2>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="experience" key={experience.company}>
            <div className="date">{experience.period}</div>

            <div>
              <div className="expHead">
                <h3>{experience.company}</h3>
                <span>{experience.place}</span>
              </div>

              <h4>{experience.role}</h4>
              <p>{experience.intro}</p>

              <ul>
                {experience.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>

              <Tags items={experience.stack} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// Projects
// ============================================================================
export function ProjectsSection() {
  return (
    <section id="projects" className="section shell">
      <SectionLabel>PROJECTS LAB</SectionLabel>
      <h2>Projets techniques sélectionnés.</h2>

      <div className="grid projects">
        {projects.map((project, index) => (
          <article className="card" key={project.title}>
            <div className="num">{String(index + 1).padStart(2, '0')}</div>
            <p className="mini">{project.type}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <Tags items={project.stack} />

            <button className="fakeLink" type="button">
              Détails & code — prochaine itération
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// Data transition
// ============================================================================
export function DataSection() {
  return (
    <section id="data" className="section shell dataPanel">
      <div>
        <SectionLabel>RECONVERSION DATA</SectionLabel>
        <h2>From Embedded Systems to Data Analytics.</h2>

        <p>
          Ma transition vers la Data s’appuie sur une expérience déjà centrée
          sur l’acquisition, le décodage, le test et l’analyse de données
          techniques : capteurs, logs, API, Protobuf, Excel et Python.
        </p>
      </div>

      <div className="pipeline">
        <span>
          Collecte
          <br />
          <b>API · Logs · Capteurs</b>
        </span>
        <i aria-hidden="true">→</i>
        <span>
          Transformation
          <br />
          <b>SQL · Python · Power Query</b>
        </span>
        <i aria-hidden="true">→</i>
        <span>
          Analyse
          <br />
          <b>KPI · DAX · Excel</b>
        </span>
        <i aria-hidden="true">→</i>
        <span>
          Visualisation
          <br />
          <b>Power BI</b>
        </span>
      </div>
    </section>
  );
}

// ============================================================================
// Certifications
// ============================================================================
export function CertificationsSection() {
  return (
    <section id="certifications" className="section shell">
      <SectionLabel>CERTIFICATIONS</SectionLabel>
      <h2>Formation continue & spécialisation.</h2>

      <div className="grid certs">
        {certifications.map((certification) => (
          <article className="cert" key={certification.title}>
            <img
              src={certification.image}
              alt={`Certificat ${certification.title}`}
              loading="lazy"
            />

            <div>
              <h3>{certification.title}</h3>
              <p className="meta">{certification.meta}</p>
              <p>{certification.skills}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// Education & interests
// ============================================================================
export function EducationInterestsSection() {
  return (
    <section className="section shell twoCols">
      <div>
        <SectionLabel>FORMATION</SectionLabel>
        <h2>Diplômes</h2>

        {education.map((item) => (
          <div className="edu" key={item.title}>
            <b>{item.title}</b>
            <span>
              {item.institution} · {item.period}
            </span>
          </div>
        ))}
      </div>

      <div>
        <SectionLabel>CENTRES D’INTÉRÊT</SectionLabel>
        <h2>En dehors du travail</h2>

        <div className="interestList">
          {interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Contact
// ============================================================================
export function ContactSection() {
  return (
    <section id="contact" className="section shell contact">
      <SectionLabel>CONTACT</SectionLabel>
      <h2>Construisons la prochaine étape.</h2>

      <p>
        Je recherche une alternance en Data Analyse et je reste ouvert aux
        échanges autour de la Data, du logiciel embarqué et de la sûreté de
        fonctionnement.
      </p>

      <div className="heroActions">
        <a
          className="button primary"
          href="mailto:oussama.elayouchi@gmail.com"
        >
          oelayouchi@gmail.com
        </a>

        <a
          className="button"
          href="https://www.linkedin.com/in/oelayouchi/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

// ============================================================================
// Footer
// ============================================================================
export function Footer() {
  return (
    <footer className="shell footer">
      © 2026 Oussama EL AYOUCHI — Portfolio
    </footer>
  );
}
