// ============================================================================
// Portfolio content
// ----------------------------------------------------------------------------
// Editable content only: experiences, projects, certifications, education and
// personal interests. Client references are intentionally not displayed.
// ============================================================================

export const experiences = [
  {
    id: 'experience-alstom',
    company: 'ALSTOM',
    companyFull: 'Alstom Transport',
    logo: '/companies/alstom.png',
    department: 'Département Safety',
    role: 'Ingénieur en sécurité ferroviaire',
    period: 'Juillet 2024 – Octobre 2024',
    place: 'Lyon, France',
    objectives: [
      "Travailler au sein de l'équipe de sécurité d'Alstom, une multinationale française spécialisée dans le secteur des transports ferroviaires.",
      'Développement et traçabilité des activités FPGA SPMC pour améliorer la sécurité dans les systèmes ferroviaires.',
      'Travail en binôme avec un ingénieur senior, avec validation et accompagnement sur les livrables selon la méthodologie EN50129:2018.',
    ],
    tasks: [
      "Vérification et validation de la traçabilité entre les exigences de safety (HwSA, SyHA), système (SyAD) et hardware (HwPCRSAD) conformément à la norme EN50129:2018, et s'assurer que les exigences FPGA couvrent bien les exigences hardware.",
      'Validation de la traçabilité entre les exigences hardware (HwPCRSAD) et les scénarios de test.',
      'Rédaction de rapports de traçabilité pour assurer la conformité aux exigences.',
      'Collaboration avec les différentes équipes tout au long des phases du projet.',
    ],
    stack: ['Microsoft Word', 'Excel', 'FPGA', 'EN50129:2018'],
  },
  {
    id: 'experience-continental',
    company: 'CONTINENTAL',
    companyFull: 'Continental Automotive',
    logo: '/companies/continental.png',
    department: 'Département Safety',
    role: 'Ingénieur en sécurité logicielle automobile',
    period: 'Août 2023 – Juillet 2024',
    place: 'Toulouse, France',
    objectives: [
      "Travailler au sein de l'équipe de sécurité de Continental, une entreprise leader dans le secteur automobile, avec une spécialisation dans les logiciels pour véhicules.",
      "Assurer la fiabilité d'une carte électronique BCM utilisée dans les véhicules Renault/Nissan, en respectant la norme ISO 26262 pour la sécurité dans l'industrie automobile.",
      "Collaboration au sein d’une équipe de 15 ingénieurs sur site, en interaction avec les équipes en Inde et en Serbie, travaillant en parallèle sur l’analyse de sûreté de chaque composant puis de plus de 33 fonctionnalités du calculateur BCM (Body Control Module).",
    ],
    tasks: [
      'Audit des livrables de sécurité pour différentes fonctions du véhicule, conformément à la norme ISO 26262.',
      'Élaboration de rapports de Software Safety Analysis (SSA) pour plusieurs fonctionnalités du BCM.',
      'Analyse des exigences de sûreté de fonctionnement dans le Technical Safety Concept 2 (TSC2).',
      'Mise à jour du Software Safety Concepts (SW-SC) pour différentes fonctionnalités du BCM.',
      'Réalisation de schémas fonctionnels basés sur l’analyse du TSC2 et des différents niveaux d’ASIL pour chaque Objectif de Sécurité (Safety Goal), en accord avec AUTOSAR.',
      'Analyse détaillée de chaque signal et de leurs modes de défaillance dans la fonction, en relation avec le TSC3.',
      'Établissement de liens entre le TSC2 et les composants de la fonction via le logiciel DOORS.',
      'Garantie de la traçabilité entre TSC, Software Requirement Specification (SRS), Software Architecture (SWA) et Software Safety Concepts (SW-SC).',
    ],
    stack: ['AUTOSAR', 'Understand', 'IDEAS', 'DOORS', 'Microsoft Word', 'Excel', 'ISO 26262'],
  },
  {
    id: 'experience-parcelhome',
    company: 'PARCELHOME',
    companyFull: 'ParcelHome',
    logo: '/companies/parcelhom.png',
    department: 'Département R&D',
    role: 'Développeur électronique et logiciel',
    period: 'Mars 2022 – Juillet 2023',
    place: 'Mulhouse, France',
    objectives: [
      "Au sein de ParcelHome, une start-up irlandaise dans le secteur des télécommunications, j'ai contribué au développement et à l'amélioration de leur boîte à colis intelligente.",
      "Mon rôle en recherche et développement impliquait la conception et les tests de solutions logicielles et électroniques, notamment pour optimiser la gestion des livraisons de colis en l'absence des destinataires, en utilisant des technologies avancées comme le Bluetooth Low Energy, les capteurs intégrés, et l'énergie solaire.",
      'Travail en collaboration avec des freelances et en interaction régulière avec le responsable technique, avec des réunions de suivi et de validation des développements réalisés.',
    ],
    tasks: [
      'Conception et développement des programmes et applications informatiques.',
      'Conception d’un banc de test automatisé en Python/Raspberry Pi pour valider les fonctionnalités.',
      'Mise en place d’une checklist complète équivalente à un catalogue d’essais.',
      'Élaboration et rédaction des spécifications techniques.',
      'Réalisation des tests techniques et fonctionnels des logiciels et applications.',
      'Analyse des problèmes techniques, fonctionnels et proposition de corrections.',
      'Interface régulière avec les responsables et l’équipe projet afin de présenter les résultats et de suivre la mise en œuvre des corrections.',
      'Traitement des mails pour identifier les problèmes et besoins, suivi de la satisfaction client lors des interventions chez les utilisateurs à domicile.',
      'Élaboration d’un fichier Excel pour centraliser les informations liées aux interventions : données utilisateurs, adresses, problèmes rencontrés et solutions apportées.',
      'Réparation des boîtes, remplacement de cartes électroniques, mise à jour logicielle, changement de panneaux solaires et de batteries, ou remplacement complet de l’équipement si nécessaire.',
      'Rédaction sur place de rapports d’intervention décrivant les problèmes trouvés, les actions réalisées et le retour des utilisateurs.',
      'Collaboration avec les équipes de développement mobile : explication du fonctionnement de la boîte et de la construction des trames de données nécessaires à la communication.',
      'Réalisation de tests de l’application mobile pour vérifier la bonne communication avec la boîte.',
      'Rédaction de rapports de tests destinés aux développeurs pour améliorer le fonctionnement et la fiabilité de l’application.',
    ],
    stack: ['C/C++', 'Python', 'Linux', 'Visual Studio Code', 'Eddystone', 'Protobuf', 'MQTT', 'ESP32 Wi-Fi BLE', 'Arduino', 'Raspberry Pi', 'STM32', 'BLE'],
  },
  {
    id: 'experience-parcelhome-stage',
    company: 'PARCELHOME',
    companyFull: 'ParcelHome',
    logo: '/companies/parcelhom.png',
    department: 'Stage de fin d’études – R&D',
    role: 'Ingénieur stagiaire',
    period: 'Septembre 2021 – Mars 2022',
    place: 'Mulhouse, France',
    objectives: [
      "Réalisation d'un banc de test et identification d'une solution hardware capable de contrôler en ligne l'équipement de l'entreprise.",
    ],
    tasks: [
      'Sujet 1 — Réalisation d’un banc de test : analyse des spécifications techniques et cahier des charges.',
      'Création d’une interface graphique capable d’interagir avec la boîte à colis intelligente via BLE (Bluetooth Low Energy), développée en Python sur Raspberry Pi.',
      'Génération automatique d’une check-list capable de tester toutes les fonctions de la boîte et rédaction d’un rapport de test.',
      'Acquisition des données de la boîte et décryptage en utilisant Protobuf.',
      'Récupération des logs de la boîte et envoi au serveur de l’entreprise.',
      'Test des services de l’API et de la communication avec la boîte.',
      'Sujet 2 — Identification d’une solution hardware capable de contrôler en ligne l’équipement de l’entreprise.',
      'Réalisation d’un prototype de passerelle Wi-Fi / Bluetooth et établissement de la connexion Bluetooth avec la boîte intelligente.',
      'Création d’une page web contenant toutes les commandes de la boîte intelligente.',
      'Configuration des paramètres Wi-Fi de la passerelle via Bluetooth à l’aide d’une application mobile.',
    ],
    stack: ['Visual Studio Code', 'Linux', 'C++', 'ESP32', 'Arduino', 'BLE', 'HTML', 'JavaScript', 'Raspberry Pi', 'STM32', 'Python', 'Eddystone'],
  },
  {
    id: 'experience-ocp',
    company: 'OCP',
    companyFull: 'Office Chérifien des Phosphates',
    logo: '/companies/ocp.png',
    department: 'Stage de fin d’études – Génie Électrique',
    role: 'Ingénieur stagiaire',
    period: 'Février 2020 – Juillet 2020',
    place: 'Khouribga, Maroc',
    objectives: [
      'Étudier et analyser le système de filtration TIMEX utilisé dans l’unité Slurry Pipeline.',
      'Identifier les modes de défaillance et proposer des solutions d’amélioration basées sur l’automatisation et la supervision.',
    ],
    tasks: [
      'Étude critique du système de filtration TIMEX : analyse des défaillances et modes critiques.',
      'Application de la méthode AMDEC pour identifier et hiérarchiser les risques.',
      'Proposition et mise en œuvre de solutions d’automatisation et de supervision sous TIA Portal et Grafcet.',
      'Développement d’une application de supervision illustrant les options de travail améliorées du filtre.',
    ],
    stack: ['TIA Portal', 'Grafcet', 'Automate Siemens S7-200', 'SolidWorks', 'AMDEC', 'Supervision industrielle'],
  },
];

export const projects = [
  {
    title: 'Tolérance aux fautes',
    period: '2020 – 2022',
    institution: 'Université Paul Sabatier — Toulouse, France',
    type: 'Groupe de 4 · Projet académique encadré · Temps partiel',
    objective: 'Développer un système critique tolérant aux fautes.',
    tasks: [
      'Mise en place de serveurs primaire/redondant avec mécanisme de reprise.',
      'Développement d’un Failure Detector et d’un watchdog en Python.',
      'Gestion de la communication et de la synchronisation entre serveurs.',
      'Validation des scénarios de tolérance aux fautes par tests.',
    ],
    stack: ['Python', 'UML'],
  },
  {
    title: 'Balance numérique',
    period: '2015 – 2020',
    institution: 'École Nationale des Sciences Appliquées — Khouribga, Maroc',
    type: 'Travail individuel · Projet académique encadré · Temps partiel',
    objective: 'Concevoir une balance numérique communicante via Bluetooth avec affichage LCD.',
    tasks: [
      'Conception mécanique du boîtier sous SolidWorks et impression par découpe laser.',
      'Conception du circuit imprimé sous Eagle, perçage, soudure et intégration des composants.',
      'Programmation du microcontrôleur avec librairies HX711, LiquidCrystal et SoftwareSerial.',
      'Mise en place de la communication Bluetooth entre la balance et le téléphone portable.',
      'Calibration de la jauge de contrainte et affichage des mesures en temps réel.',
    ],
    stack: ['ATmega (Arduino)', 'Eagle', 'SolidWorks', 'Bluetooth'],
  },
  {
    title: 'Station météo',
    period: '2015 – 2020',
    institution: 'École Nationale des Sciences Appliquées — Khouribga, Maroc',
    type: 'Travail individuel · Projet académique encadré · Temps partiel',
    objective: 'Développer une station météo connectée mesurant vent, température et humidité.',
    tasks: [
      'Choix et intégration des capteurs : DHT11 pour température/humidité et anémomètre pour vitesse du vent.',
      'Programmation sur microcontrôleur ATMEGA328 (Arduino).',
      'Simulation et vérification du schéma électronique sous Proteus.',
      'Conception du PCB avec Eagle et fabrication sur plaque de cuivre.',
      'Conception mécanique de l’assemblage sous SolidWorks.',
      'Développement d’une interface mobile avec communication Bluetooth et affichage LCD.',
    ],
    stack: ['Arduino', 'ATmega328', 'Bluetooth', 'DHT11', 'Proteus', 'Eagle', 'SolidWorks'],
  },
  {
    title: 'Convoyeur & Ascenseur',
    period: '2015 – 2020',
    institution: 'École Nationale des Sciences Appliquées — Khouribga, Maroc',
    type: 'Groupe de 4 · Projet académique encadré · Temps partiel',
    objective: 'Étudier et simuler des systèmes automatisés : convoyeur et ascenseur.',
    tasks: [
      'Conception des Grafcet avec Automgen pour modéliser le fonctionnement des systèmes.',
      'Programmation Ladder sur TwidoSuite pour contrôler les automates programmables.',
      'Simulation complète du cycle convoyeur et ascenseur.',
    ],
    stack: ['Automgen', 'TwidoSuite', 'GRAFCET', 'Ladder'],
  },
  {
    title: 'Parking en VHDL',
    period: '2015 – 2020',
    institution: 'École Nationale des Sciences Appliquées — Khouribga, Maroc',
    type: 'Binôme · Projet académique encadré · Temps partiel',
    objective: 'Concevoir un système de gestion de parking basé sur machine à états finis.',
    tasks: [
      'Développement en VHDL du système avec capteurs d’entrée/sortie véhicules.',
      'Simulation et validation du comportement via machine à états finis.',
      'Implémentation sur FPGA Altera DeoNano (Cyclone IV).',
    ],
    stack: ['VHDL', 'FPGA Altera', 'ModelSim'],
  },
  {
    title: 'Commande et Modélisation des Machines Électriques',
    period: '2015 – 2020',
    institution: 'École Nationale des Sciences Appliquées — Khouribga, Maroc',
    type: 'Binôme · Projet académique encadré · Temps partiel',
    objective: 'Étudier, modéliser et commander différentes machines électriques asynchrones et synchrones ainsi que leurs systèmes d’onduleurs.',
    tasks: [
      'Machine synchrone à aimants permanents (MSAP) : modélisation dans repère abc et dq, transformation de Park, commande vectorielle, simulation et validation sous Matlab/Simulink.',
      'Machine asynchrone (MAS) : modélisation mathématique triphasée et transformation de Park, commandes scalaire (V/f constant) et vectorielle, simulation numérique et comparaison des performances.',
      'Onduleurs monophasés et triphasés : étude et simulation des commandes symétriques/décalées, 120°/180°, modulation MLI sinusoïdale et vectorielle sous Matlab/Simulink.',
      'Commande directe de couple (DTC) : implémentation d’une commande DTC sur MAS avec estimateurs de flux et de couple, validation par simulation.',
    ],
    stack: ['Matlab', 'Simulink'],
  },
];

export const certifications = [
  {
    title: 'Power BI — Formation complète 2026',
    meta: '33,5 h · Udemy · Sébastien Daviot',
    image: '/certifications/power-bi.png',
    skills: 'Power BI Desktop · Power Query · DAX · Power BI Service · Data Visualisation',
  },
  {
    title: 'AUTOSAR Architecture — Learn from Scratch with Demo',
    meta: '4,5 h · Udemy · Prakash Kumar',
    image: '/certifications/autosar.png',
    skills: 'Classic AUTOSAR · Architecture · Démonstration logicielle',
  },
  {
    title: 'MATLAB / SIMULINK — Zero to Hero',
    meta: '8 h · Udemy',
    image: '/certifications/matlab-simulink.png',
    skills: 'MATLAB · Simulink · Modélisation · Projets pratiques',
  },
  {
    title: 'ISO 26262 — Functional Safety Mastery',
    meta: '4 h · Udemy · Paul Danci',
    image: '/certifications/iso-26262.png',
    skills: 'ISO 26262 · Functional Safety · HARA · ASIL · FMEDA',
  },
];

export const education = [
  {
    title: 'Master 2 (M2), Systems Engineering',
    institution: 'Université Toulouse III — Paul Sabatier',
    period: '2020 – 2022',
    sections: [
      {
        title: '',
        bullets: [
          'Fiabilité des systèmes : Sûreté de fonctionnement, Vérification, Validation, Test logiciel et Tolérance aux fautes.',
          "Systèmes temps réel : Conception des systèmes temps réel (Analyse d'ordonnançabilité, sensibilité).",
          "Systèmes d'exploitation temps réel : TrampolineRTOS, Norme OSEK/VDX, Linux Temps réel (RTAI).",
          'Réseaux temps réel (CAN, FIP, Ethernet embarqué ...).',
          'Conception Orientée objet : C++, Java, Python.',
          'Conception et modélisation des systèmes contrôle-commande, commande linéaire avancée, modélisation et mise en œuvre des commandes temps réel.',
          "Ingénierie systèmes et gestion d'entreprise.",
        ],
      },
    ],
  },
  {
    title: "Diplôme d'ingénieur, Ingénierie électrique - systèmes embarqués et commandes numériques",
    institution: 'École Nationale des Sciences Appliquées de Khouribga',
    period: '2015 – 2020',
    sections: [
      {
        title: 'Système embarqué matériel et Systèmes programmables sur puce',
        bullets: [
          'Conception des systèmes numériques avec PLDs et FPGA.',
          'Architecture des Processeurs, Nios II, Conception numérique VHDL, VHDL-AMS.',
        ],
      },
      {
        title: 'Informatique industrielle',
        bullets: [
          'Interfaçage des capteurs.',
          'Programmation des Microcontrôleurs : PIC, STM32, C embarqué.',
          'Réseau de capteurs sans fil.',
        ],
      },
      {
        title: 'Machines électriques et électronique de puissance',
        bullets: [
          'Électronique de puissance.',
          'Machines à courant continu.',
          'Convertisseurs statiques.',
        ],
      },
    ],
  },
];

export const interests = ['Musculation', 'Football', 'Taekwondo', 'Technologie', 'Veille Data & IA'];
