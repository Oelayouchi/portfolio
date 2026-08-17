import { SectionLabel } from './ui';

function DataIcon({ type }) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  if (type === 'collect') {
    return (
      <svg {...common}>
        <path d="M15 33H12a8 8 0 0 1-1-15.9A13 13 0 0 1 36 18a7.5 7.5 0 0 1 0 15H33" />
        <path d="M24 18v18" />
        <path d="m18 30 6 6 6-6" />
      </svg>
    );
  }

  if (type === 'prepare') {
    return (
      <svg {...common}>
        <ellipse cx="19" cy="12" rx="10" ry="4" />
        <path d="M9 12v9c0 2.2 4.5 4 10 4 2.1 0 4-.3 5.6-.8" />
        <path d="M9 21v9c0 2.2 4.5 4 10 4 1.3 0 2.5-.1 3.6-.3" />
        <circle cx="33" cy="31" r="7" />
        <path d="M33 20v4M33 38v4M22 31h4M40 31h4M25.2 23.2l2.8 2.8M38 36l2.8 2.8M40.8 23.2 38 26M28 36l-2.8 2.8" />
      </svg>
    );
  }

  if (type === 'analyse') {
    return (
      <svg {...common}>
        <path d="M8 36V24h6v12M18 36V16h6v20M28 36V10h6v16" />
        <circle cx="35" cy="33" r="6" />
        <path d="m39.5 37.5 5 5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M8 38V26h6v12M19 38V20h6v18M30 38V13h6v25" />
      <path d="m9 18 8-6 7 3 12-8" />
      <path d="M31 7h5v5" />
    </svg>
  );
}

const steps = [
  { number: '01', type: 'collect', tone: 'collect', title: 'Collecte', tools: <>API · Logs · Capteurs<br />Excel</> },
  { number: '02', type: 'prepare', tone: 'prepare', title: 'Préparation', tools: <>SQL · Python<br />Power Query</> },
  { number: '03', type: 'analyse', tone: 'analyse', title: 'Analyse', tools: <>KPI · DAX · Excel</> },
  { number: '04', type: 'visualise', tone: 'visualise', title: 'Visualisation', tools: <>Power BI</> },
];

export default function DataSection() {
  return (
    <section id="data" className="section shell dataPanel">
      <div>
        <SectionLabel>RECONVERSION VERS LA DATA</SectionLabel>
        <h2>De l’ingénierie des systèmes à l’analyse de données.</h2>
        <p>
          Mon parcours d’ingénieur m’a appris à collecter, structurer et analyser des données techniques pour comprendre des systèmes complexes et résoudre des problèmes concrets. Aujourd’hui, je mets cette expérience au service de la Data Analyse en développant mes compétences en SQL, Power BI, Python, Excel et Power Query.
        </p>
      </div>

      <div className="dataFlow" aria-label="Processus d’analyse de données">
        <div className="dataFlowSteps">
          {steps.map((step, index) => (
            <div key={step.number} style={{ display: 'contents' }}>
              <div className={`dataFlowStep ${step.tone}`}>
                <div className="dataFlowIcon"><DataIcon type={step.type} /></div>
                <span className="dataFlowNumber">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.tools}</p>
              </div>
              {index < steps.length - 1 && <div className="dataFlowArrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
        <div className="dataFlowCaption">◉ Transformer les données en informations fiables pour aider à la prise de décision.</div>
      </div>
    </section>
  );
}
