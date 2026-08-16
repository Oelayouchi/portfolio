import { education } from '../data/portfolio';
import { SectionLabel } from './ui';

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

const interestCards = [
  { key: 'football', label: 'Football', icon: '⚽' },
  { key: 'taekwondo', label: 'Taekwondo', icon: '🥋' },
  { key: 'musculation', label: 'Musculation', icon: '🏋️' },
  { key: 'aviation', label: 'Voyage', icon: '✈️' },
  { key: 'technologie', label: 'Technologie', icon: '💻' },
];

export default function EducationInterestsSection() {
  return (
    <section className="section shell educationInterestsShowcase">
      <div className="educationShowcaseHeader">
        <SectionLabel>FORMATION</SectionLabel>
        <h2>Diplômes</h2>
      </div>

      <div className="educationCardsGrid">
        {education.map((item, index) => {
          const display = educationDisplay[index];
          return (
            <article className="educationShowcaseCard" key={item.title}>
              <div className="educationLogoPanel">
                <img src={display.logo} alt={`Logo ${display.institution}`} loading="lazy" />
              </div>

              <div className="educationShowcaseContent">
                <span className="educationYearBadge">{display.year}</span>
                <h3>{display.degree}</h3>
                <p className="educationInstitution">{display.institution}</p>

                <div className="educationBullets">
                  {item.sections.flatMap((section) => section.bullets).map((bullet) => (
                    <p key={bullet}><span>•</span>{bullet}</p>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="interestsShowcase">
        <div className="interestsShowcaseHeader">
          <SectionLabel>CENTRES D’INTÉRÊT</SectionLabel>
          <h2>En dehors du travail</h2>
        </div>

        <div className="interestCardsGrid">
          {interestCards.map((interest) => (
            <div className={`interestWrap interest-${interest.key}`} key={interest.key}>
              <article className="interestCard">
                <div className="interestIcon" aria-hidden="true">{interest.icon}</div>
                <strong>{interest.label}</strong>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
