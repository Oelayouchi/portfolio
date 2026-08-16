const experience = [
  {
    company: 'ALSTOM',
    role: 'Ingénieur en sécurité ferroviaire',
    period: '2024',
    place: 'Lyon, France',
    intro: 'Mission Safety sur des activités FPGA SPMC dans un environnement ferroviaire critique conforme à EN 50129:2018.',
    tasks: [
      'Vérification et validation de la traçabilité entre exigences Safety, système et hardware.',
      'Contrôle de la couverture des exigences hardware par les exigences FPGA.',
      'Validation de la traçabilité entre HwPCRSAD et scénarios de test.',
      'Rédaction de rapports de traçabilité et suivi des incohérences avec les équipes techniques.'
    ],
    stack: ['EN 50129:2018', 'FPGA', 'Excel', 'Word']
  },
  {
    company: 'CONTINENTAL',
    role: 'Ingénieur en sécurité logicielle automobile',
    period: '2023 — 2024',
    place: 'Toulouse, France',
    intro: 'Analyse Safety d’un calculateur BCM pour Renault/Nissan dans un contexte ISO 26262 et AUTOSAR.',
    tasks: [
      'Audit des livrables Safety et rédaction de Software Safety Analysis (SSA).',
      'Analyse du Technical Safety Concept TSC2 et des niveaux ASIL.',
      'Mise à jour de Software Safety Concepts et analyse des signaux / modes de défaillance liés au TSC3.',
      'Traçabilité TSC ↔ SRS ↔ SWA ↔ SW-SC avec DOORS.',
      'Analyse d’architecture AUTOSAR et revue de code / dépendances avec Understand.'
    ],
    stack: ['ISO 26262', 'AUTOSAR', 'DOORS', 'Understand', 'IDEAS']
  },
  {
    company: 'PARCELHOME',
    role: 'Développeur électronique & logiciel / R&D',
    period: '2021 — 2023',
    place: 'Mulhouse, France',
    intro: 'Développement, test et maintenance d’une boîte à colis intelligente connectée.',
    tasks: [
      'Développement embarqué en C/C++ sur ESP32 et STM32.',
      'Création d’un banc de test automatisé Python sur Raspberry Pi avec checklist et rapports de test.',
      'Acquisition et décodage de données avec Protobuf, récupération de logs et tests API.',
      'Développement d’une passerelle Wi‑Fi / Bluetooth et d’une interface web de contrôle.',
      'Tests de l’application mobile, diagnostic d’anomalies, maintenance hardware et support terrain.',
      'Centralisation dans Excel des informations d’intervention : utilisateur, adresse, problème, solution et suivi.'
    ],
    stack: ['Python', 'C/C++', 'Raspberry Pi', 'ESP32', 'STM32', 'BLE', 'MQTT', 'Protobuf', 'API']
  },
  {
    company: 'OCP',
    role: 'Projet de fin d’études — Génie électrique',
    period: '2020',
    place: 'Khouribga, Maroc',
    intro: 'Étude critique de l’unité de filtration TIMEX et proposition d’actions d’amélioration.',
    tasks: [
      'Étude du fonctionnement du filtre TIMEX et des équipements électriques / automatiques.',
      'Analyse des défaillances et hiérarchisation des risques par AMDEC.',
      'Proposition d’actions correctives et amélioration du fonctionnement.',
      'Automatisation et supervision sous TIA Portal / Grafcet.'
    ],
    stack: ['TIA Portal', 'GRAFCET', 'AMDEC', 'Automatisation', 'Supervision']
  }
];

const projects = [
  { title: 'Balance numérique intelligente', type: 'Embedded / IoT', desc: 'Balance avec jauge de contrainte, affichage LCD, communication Bluetooth, PCB et boîtier mécanique.', stack: ['Eagle', 'SolidWorks', 'Bluetooth', 'LCD', 'Microcontrôleur'] },
  { title: 'Station météo connectée', type: 'Embedded / Data Acquisition', desc: 'Mesure température, humidité et vitesse du vent, acquisition temps réel, affichage et communication Bluetooth.', stack: ['ATmega328', 'DHT11', 'Proteus', 'Eagle', 'SolidWorks'] },
  { title: 'Parking intelligent sur FPGA', type: 'FPGA / VHDL', desc: 'Système de gestion de parking basé sur une machine à états finis avec détection d’entrée et de sortie.', stack: ['VHDL', 'FPGA', 'FSM', 'ModelSim'] },
  { title: 'Commande des machines électriques', type: 'Matlab / Simulink', desc: 'Modélisation MAS/MSAP, transformations de Park, commandes scalaire, vectorielle, DTC et onduleurs.', stack: ['MATLAB', 'Simulink', 'DTC', 'PWM', 'Park'] },
  { title: 'Système critique tolérant aux fautes', type: 'Master 2', desc: 'Conception, architecture, implémentation, simulation et validation par tests d’un système critique tolérant aux fautes.', stack: ['Python', 'Architecture', 'Fault Tolerance', 'Tests'] },
  { title: 'Filtration TIMEX', type: 'Industrie / Automation', desc: 'Analyse critique, AMDEC, plan d’amélioration, automatisation et supervision d’une unité de filtration industrielle.', stack: ['AMDEC', 'TIA Portal', 'GRAFCET', 'Supervision'] }
];

const certs = [
  { title: 'Power BI — Formation complète 2026', meta: '33,5 h · Udemy · Sébastien Daviot', img: '/certifications/powerbi.jpg', skills: 'Power BI Desktop · Power Query · DAX · Power BI Service · Data Visualisation' },
  { title: 'AUTOSAR Architecture — Learn from Scratch with Demo', meta: '4,5 h · Udemy · Prakash Kumar', img: '/certifications/autosar.jpg', skills: 'Classic AUTOSAR · Architecture · Démonstration logicielle' },
  { title: 'MATLAB / SIMULINK — Zero to Hero', meta: '8 h · Udemy', img: '/certifications/simulink.jpg', skills: 'MATLAB · Simulink · Modélisation · Projets pratiques' },
  { title: 'ISO 26262 — Functional Safety Mastery', meta: '4 h · Udemy · Paul Danci', img: '/certifications/iso26262.jpg', skills: 'ISO 26262 · Functional Safety · HARA · ASIL · FMEDA' }
];

const interests = ['Musculation', 'Football', 'Taekwondo', 'Technologie', 'Veille Data & IA'];

function Tags({ items }) {
  return <div className="tags">{items.map((x) => <span key={x}>{x}</span>)}</div>;
}

export default function Page() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top">OE.</a>
        <div className="navlinks">
          <a href="#about">À propos</a><a href="#experience">Expérience</a><a href="#projects">Projets</a><a href="#data">Data</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div>
          <p className="eyebrow">INGÉNIERIE · SAFETY · DATA</p>
          <h1>Oussama<br/><span>EL AYOUCHI</span></h1>
          <p className="lead">Ingénieur systèmes embarqués & Safety, actuellement en reconversion vers la Data Analyse.</p>
          <div className="heroActions">
            <a className="button primary" href="#projects">Explorer mes projets</a>
            <a className="button" href="/documents/CV_Oussama_EL_AYOUCHI.pdf" target="_blank">Voir mon CV</a>
          </div>
          <div className="quick"><span>Lyon</span><span>Mobile France</span><span>Disponible pour alternance Data</span></div>
        </div>
        <aside className="heroCard">
          <p className="mini">MON PARCOURS EN 4 AXES</p>
          <div className="axis"><b>01</b><span>Systèmes embarqués</span></div>
          <div className="axis"><b>02</b><span>Safety automobile</span></div>
          <div className="axis"><b>03</b><span>Safety ferroviaire</span></div>
          <div className="axis active"><b>04</b><span>Data Analytics</span></div>
        </aside>
      </section>

      <section className="stats shell">
        <div><b>2</b><span>Diplômes supérieurs</span></div><div><b>3+</b><span>Années d’expérience</span></div><div><b>10+</b><span>Projets techniques</span></div><div><b>4</b><span>Certifications affichées</span></div>
      </section>

      <section id="about" className="section shell split">
        <div><p className="eyebrow">À PROPOS</p><h2>Un parcours technique construit autour des systèmes complexes.</h2></div>
        <div className="copy"><p>Diplômé en génie électrique et systèmes embarqués, puis titulaire d’un Master 2 en Ingénierie des Systèmes Temps Réel, j’ai évolué de la conception embarquée vers la sûreté de fonctionnement automobile et ferroviaire.</p><p>Mes expériences m’ont amené à travailler sur des systèmes connectés, des protocoles de communication, l’automatisation des tests, la traçabilité d’exigences Safety et l’analyse de défaillances. Aujourd’hui, je transforme cette base d’ingénieur en expertise Data avec SQL, Power BI, Python et Excel.</p></div>
      </section>

      <section id="experience" className="section shell">
        <p className="eyebrow">EXPÉRIENCE</p><h2>Des systèmes embarqués aux systèmes critiques.</h2>
        <div className="timeline">{experience.map((e) => <article className="experience" key={e.company}><div className="date">{e.period}</div><div><div className="expHead"><h3>{e.company}</h3><span>{e.place}</span></div><h4>{e.role}</h4><p>{e.intro}</p><ul>{e.tasks.map(t => <li key={t}>{t}</li>)}</ul><Tags items={e.stack}/></div></article>)}</div>
      </section>

      <section id="projects" className="section shell">
        <p className="eyebrow">PROJECTS LAB</p><h2>Projets techniques sélectionnés.</h2>
        <div className="grid projects">{projects.map((p, i) => <article className="card" key={p.title}><div className="num">0{i+1}</div><p className="mini">{p.type}</p><h3>{p.title}</h3><p>{p.desc}</p><Tags items={p.stack}/><button className="fakeLink">Détails & code — prochaine itération</button></article>)}</div>
      </section>

      <section id="data" className="section shell dataPanel">
        <div><p className="eyebrow">RECONVERSION DATA</p><h2>From Embedded Systems to Data Analytics.</h2><p>Ma transition vers la Data s’appuie sur une expérience déjà centrée sur l’acquisition, le décodage, le test et l’analyse de données techniques : capteurs, logs, API, Protobuf, Excel et Python.</p></div>
        <div className="pipeline"><span>Collecte<br/><b>API · Logs · Capteurs</b></span><i>→</i><span>Transformation<br/><b>SQL · Python · Power Query</b></span><i>→</i><span>Analyse<br/><b>KPI · DAX · Excel</b></span><i>→</i><span>Visualisation<br/><b>Power BI</b></span></div>
      </section>

      <section id="certifications" className="section shell">
        <p className="eyebrow">CERTIFICATIONS</p><h2>Formation continue & spécialisation.</h2>
        <div className="grid certs">{certs.map(c => <article className="cert" key={c.title}><img src={c.img} alt={c.title}/><div><h3>{c.title}</h3><p className="meta">{c.meta}</p><p>{c.skills}</p></div></article>)}</div>
      </section>

      <section className="section shell twoCols">
        <div><p className="eyebrow">FORMATION</p><h2>Diplômes</h2><div className="edu"><b>Master 2 — Ingénierie des Systèmes Temps Réel</b><span>Université Toulouse III — Paul Sabatier · 2020–2022</span></div><div className="edu"><b>Diplôme d’Ingénieur — Génie Électrique / Systèmes Embarqués</b><span>ENSA Khouribga · 2015–2020</span></div></div>
        <div><p className="eyebrow">CENTRES D’INTÉRÊT</p><h2>En dehors du travail</h2><div className="interestList">{interests.map(x => <span key={x}>{x}</span>)}</div></div>
      </section>

      <section id="contact" className="section shell contact">
        <p className="eyebrow">CONTACT</p><h2>Construisons la prochaine étape.</h2><p>Je recherche une alternance en Data Analyse et je reste ouvert aux échanges autour de la Data, du logiciel embarqué et de la sûreté de fonctionnement.</p>
        <div className="heroActions"><a className="button primary" href="mailto:oussama.elayouchi@gmail.com">oussama.elayouchi@gmail.com</a><a className="button" href="https://www.linkedin.com/in/oelayouchi/" target="_blank">LinkedIn</a></div>
      </section>
      <footer className="shell footer">© 2026 Oussama EL AYOUCHI — Portfolio V1</footer>
    </main>
  );
}
