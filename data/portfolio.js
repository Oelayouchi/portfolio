// ============================================================================
// Portfolio content
// ----------------------------------------------------------------------------
// Keep the site's editable content in one place. Components should focus on
// presentation, while this file contains professional experience, projects,
// certifications, education and personal interests.
// ============================================================================

export const experiences = [
  {
    company: 'OCP — Office Chérifien des Phosphates',
    role: 'Projet de fin d’études — Génie électrique',
    period: '2020',
    place: 'Khouribga, Maroc',
    intro:
      'Étude critique de l’unité de filtration TIMEX et proposition d’actions d’amélioration.',
    tasks: [
      'Étude du fonctionnement du filtre TIMEX et des équipements électriques et automatiques.',
      'Analyse des défaillances et hiérarchisation des risques par AMDEC.',
      'Proposition d’actions correctives et amélioration du fonctionnement.',
      'Automatisation et supervision sous TIA Portal et GRAFCET.',
    ],
    stack: ['TIA Portal', 'GRAFCET', 'AMDEC', 'Automatisation', 'Supervision'],
  },
  {
    company: 'ParcelHome',
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
    company: 'Continental Automotive',
    role: 'Ingénieur en sécurité logicielle automobile',
    period: '2023 — 2024',
    place: 'Toulouse, France',
    intro:
      'Analyse Safety d’un calculateur BCM pour Renault/Nissan dans un contexte ISO 26262 et AUTOSAR.',
    tasks: [
      'Audit des livrables Safety et rédaction de Software Safety Analysis (SSA).',
      'Analyse du Technical Safety Concept TSC2 et des niveaux ASIL.',
      'Mise à jour de Software Safety Concepts et analyse des signaux et modes de défaillance liés au TSC3.',
      'Traçabilité TSC ↔ SRS ↔ SWA ↔ SW-SC avec DOORS.',
      'Analyse d’architecture AUTOSAR et revue de code et de dépendances avec Understand.',
    ],
    stack: ['ISO 26262', 'AUTOSAR', 'DOORS', 'Understand', 'IDEAS'],
  },
  {
    company: 'Alstom Transport',
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
];

export const projects = [
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

export const certifications = [
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

export const education = [
  {
    title: 'Master 2 — Ingénierie des Systèmes Temps Réel',
    institution: 'Université Toulouse III — Paul Sabatier',
    period: '2020–2022',
  },
  {
    title: 'Diplôme d’Ingénieur — Génie Électrique / Systèmes Embarqués',
    institution: 'ENSA Khouribga',
    period: '2015–2020',
  },
];

export const interests = [
  'Musculation',
  'Football',
  'Taekwondo',
  'Technologie',
  'Veille Data & IA',
];
