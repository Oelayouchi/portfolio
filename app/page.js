/* ========================================================================== */
/* Portfolio — Oussama EL AYOUCHI                                             */
/* Main page                                                                  */
/*                                                                            */
/* This file is intentionally organised into three parts:                     */
/* 1. Portfolio data                                                          */
/* 2. Reusable components                                                     */
/* 3. Page sections                                                           */
/* ========================================================================== */


/* ========================================================================== */
/* 1. PORTFOLIO DATA                                                          */
/* ========================================================================== */

// Professional experiences displayed in the timeline.
const experiences = [
  {
    company: 'ALSTOM',
    role: 'Ingénieur en sécurité ferroviaire',
    period: '2024',
    place: 'Lyon, France',
    intro:
      'Mission Safety sur des activités FPGA SPMC dans un environnement ferroviaire critique conforme à EN 50129:2018.',
    tasks: [
      'Vérification et validation de la traçabilité entre exigences Safety, système et hardware.',
      'Contrôle de la couverture des exigences hardware par les exigences FPGA.',
      'Validation de la traçabilité entre HwPCRSAD et scénarios de test.',
      'Rédaction de rapports de traçabilité et suivi des incohérences avec les équipes techniques.',
    ],
    stack: ['EN 50129:2018', 'FPGA', 'Excel', 'Word'],
  },
  {
    company: 'CONTINENTAL',
    role: 'Ingénieur en sécurité logicielle automobile',
    period: '2023 — 2024',
    place: 'Toulouse, France',
    intro:
      'Analyse Safety d’un calculateur BCM pour Renault/Nissan dans un contexte ISO 26262 et AUTOSAR.',
    tasks: [
      'Audit des livrables Safety et rédaction de Software Safety Analysis (SSA).',
      'Analyse du Technical Safety Concept TSC2 et des niveaux ASIL.',
      'Mise à jour de Software Safety Concepts et analyse des signaux / modes de défaillance liés au TSC3.',
      'Traçabilité TSC ↔ SRS ↔ SWA ↔ SW-SC avec DOORS.',
      'Analyse d’architecture AUTOSAR et revue de code / dépendances avec Understand.',
    ],
    stack: ['ISO 26262', 'AUTOSAR', 'DOORS', 'Understand', 'IDEAS'],
  },
  {
    company: 'PARCELHOME',
    role: 'Développeur électronique & logiciel / R&D',
    period: '2021 — 2023',
    place: 'Mulhouse, France',
    intro:
      'Développement, test et maintenance d’une boîte à colis intelligente connectée.',
    tasks: [
      'Développement embarqué en C/C++ sur ESP32 et STM32.',
      'Création d’un banc de test automatisé Python sur Raspberry Pi avec checklist et rapports de test.',
      'Acquisition et décodage de données avec Protobuf, récupération de logs et tests API.',
      'Développement d’une passerelle Wi-Fi / Bluetooth et d’une interface web de contrôle.',
      'Tests de l’application mobile, diagnostic d’anomalies, maintenance hardware et support terrain.',
      'Centralisation dans Excel des informations d’intervention : utilisateur, adresse, problème, solution et suivi.',
    ],
    stack: [
      'Python',
      'C/C++',
      'Raspberry Pi',
      'ESP32',
      'STM32',
      'BLE',
      'MQTT',
      'Protobuf',
      'API',
    ],
  },
  {
    company: 'OCP',
    role: 'Projet de fin d’études — Génie électrique',
    period: '2020',
    place: 'Khouribga, Maroc',
    intro:
      'Étude critique de l’unité de filtration TIMEX et proposition d’actions d’amélioration.',
    tasks: [
      'Étude du fonctionnement du filtre TIMEX et des équipements électriques / automatiques.',
      'Analyse des défaillances et hiérarchisation des risques par AMDEC.',
      'Proposition d’actions correctives et amélioration du fonctionnement.',
      'Automatisation et supervision sous TIA Portal / Grafcet.',
    ],
    stack: ['TIA Portal', 'GRAFCET', 'AMDEC', 'Automatisation', 'Supervision'],
  },
];

// Technical and academic projects.
const projects = [
  {
    title: 'Balance numérique intelligente',
    type: 'Embedded / IoT',
    description:
      'Balance avec jauge de contrainte, affichage LCD, communication Bluetooth, PCB et boîtier mécanique.',
    stack: ['Eagle', 'SolidWorks', 'Bluetooth', 'LCD', 'Microcontrôleur'],
  },
  {
    title: 'Station météo connectée',
    type: 'Embedded / Data Acquisition',
    description:
      'Mesure température, humidité et vitesse du vent, acquisition temps réel, affichage et communication Bluetooth.',
    stack: ['ATmega328', 'DHT11', 'Proteus', 'Eagle', 'SolidWorks'],
  },
  {
    title: 'Parking intelligent sur FPGA',
    type: 'FPGA / VHDL',
    description:
      'Système de gestion de parking basé sur une machine à états finis avec détection d’entrée et de sortie.',
    stack: ['VHDL', 'FPGA', 'FSM', 'ModelSim'],
  },
  {
    title: 'Commande des machines électriques',
    type: 'MATLAB / Simulink',
    description:
      'Modélisation MAS/MSAP, transformations de Park, commandes scalaire, vectorielle, DTC et onduleurs.',
    stack: ['MATLAB', 'Simulink', 'DTC', 'PWM', 'Park'],
  },
  {
    title: 'Système critique tolérant aux fautes',
    type: 'Master 2',
    description:
      'Conception, architecture, implémentation, simulation et validation par tests d’un système critique tolérant aux fautes.',
    stack: ['Python', 'Architecture', 'Fault Tolerance', 'Tests'],
  },
  {
    title: 'Filtration TIMEX',
    type: 'Industrie / Automation',
    description:
      'Analyse critique, AMDEC, plan d’amélioration, automatisation et supervision d’une unité de filtration industrielle.',
    stack: ['AMDEC', 'TIA Portal', 'GRAFCET', 'Supervision'],
  },
];

// Certifications. Images will be loaded from /public/certifications/.
const certifications = [
  {
    title: 'Power BI — Formation complète 2026',
    meta: '33,5 h · Udemy · Sébastien Daviot',
    image: '/certifications/powerbi.jpg',
    skills:
      'Power BI Desktop · Power Query · DAX · Power BI Service · Data Visualisation',
  },
  {
    title: 'AUTOSAR Architecture — Learn from Scratch with Demo',
    meta: '4,5 h · Udemy · Prakash Kumar',
    image: '/certifications/autosar.jpg',
    skills: 'Classic AUTOSAR · Architecture · Démonstration logicielle',
  },
  {
    title: 'MATLAB / SIMULINK — Zero to Hero',
    meta: '8 h · Udemy',
    image: '/certifications/simulink.jpg',
    skills: 'MATLAB · Simulink · Modélisation · Projets pratiques',
  },
  {
    title: 'ISO 26262 — Functional Safety Mastery',
    meta: '4 h · Udemy · Paul Danci',
    image: '/certifications/iso26262.jpg',
    skills: 'ISO 26262 · Functional Safety · HARA · ASIL · FMEDA',
  },
];

// Personal interests displayed next to education.
const interests = [
  'Musculation',
  'Football',
  'Taekwondo',
  'Technologie',
  'Veille Data & IA',
];


/* ========================================================================== */
/* 2. REUSABLE COMPONENTS                                                     */
/* ========================================================================== */

/**
 * Displays a list of technologies as small visual tags.
 */
function Tags({ items }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

/**
 * Small heading used at the beginning of each section.
 */
function SectionLabel({ children }) {
  return <p className="eyebrow">{children}</p>;
}


/* ========================================================================== */
/* 3. PAGE                                                                    */
/* ========================================================================== */

export default function Page() {
  return (
    <main>
      {/* ------------------------------------------------------------------ */}
      {/* Navigation                                                         */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                               */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Key figures                                                        */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* About                                                              */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Professional experience                                            */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Projects                                                           */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Data transition                                                    */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Certifications                                                     */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Education & interests                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="section shell twoCols">
        <div>
          <SectionLabel>FORMATION</SectionLabel>
          <h2>Diplômes</h2>

          <div className="edu">
            <b>Master 2 — Ingénierie des Systèmes Temps Réel</b>
            <span>Université Toulouse III — Paul Sabatier · 2020–2022</span>
          </div>

          <div className="edu">
            <b>Diplôme d’Ingénieur — Génie Électrique / Systèmes Embarqués</b>
            <span>ENSA Khouribga · 2015–2020</span>
          </div>
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

      {/* ------------------------------------------------------------------ */}
      {/* Contact                                                            */}
      {/* ------------------------------------------------------------------ */}
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

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                             */}
      {/* ------------------------------------------------------------------ */}
      <footer className="shell footer">
        © 2026 Oussama EL AYOUCHI — Portfolio
      </footer>
    </main>
  );
}
