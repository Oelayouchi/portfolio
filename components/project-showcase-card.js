const projectVisuals = {
  'balance-numerique': '/projects/balance-numerique/images/image-01.png',
  'station-meteo': '/projects/station-meteo/images/image-01.png',
};

export default function ProjectShowcaseCard({ project, slug }) {
  const visual = projectVisuals[slug];
  const report = `/projects/${slug}/report/rapport.pdf`;
  const highlights = project.tasks.slice(0, 3);

  return (
    <article className="projectShowcaseCard">
      <div className={`projectShowcaseVisual${visual ? ' hasImage' : ''}`}>
        {visual ? (
          <img src={visual} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
        ) : (
          <div className="projectShowcaseFallback" aria-hidden="true">
            <span>{project.stack.slice(0, 3).join(' · ')}</span>
            <strong>{project.title}</strong>
          </div>
        )}
      </div>

      <div className="projectShowcaseContent">
        <div className="projectShowcaseTags" aria-label="Technologies utilisées">
          {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>

        <h3>{project.title}</h3>
        <p className="projectShowcaseObjective">{project.objective}</p>

        <ul>
          {highlights.map((task) => <li key={task}>{task}</li>)}
        </ul>

        <div className="projectShowcaseMeta">
          <span>{project.period}</span>
          <span>{project.institution}</span>
        </div>

        <a className="projectShowcaseButton" href={report} target="_blank" rel="noreferrer">
          VOIR LE RAPPORT
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
