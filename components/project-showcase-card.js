'use client';

import { useState } from 'react';

const projectVisuals = {
  'balance-numerique': '/projects/balance-numerique/images/image-01.png',
  'station-meteo': '/projects/station-meteo/images/image-01.png',
};

export default function ProjectShowcaseCard({ project, slug }) {
  const [reportOpen, setReportOpen] = useState(false);
  const visual = projectVisuals[slug];
  const report = `/projects/${slug}/report/rapport.pdf`;
  const highlights = project.tasks.slice(0, 3);

  return (
    <article className="projectShowcaseCard">
      <div className={`projectShowcaseVisual${visual ? ' hasImage' : ' isEmpty'}`}>
        {visual ? (
          <img src={visual} alt={`Aperçu du projet ${project.title}`} loading="lazy" />
        ) : null}
      </div>

      <div className="projectShowcaseContent">
        <div className="projectShowcaseTags" aria-label="Technologies utilisées">
          {project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}
        </div>

        <div className="projectShowcaseTitleRow">
          <h3>{project.title}</h3>
          <button className="projectShowcaseButton" type="button" onClick={() => setReportOpen(true)}>
            <span aria-hidden="true">◉</span>
            VOIR LE RAPPORT
          </button>
        </div>

        <p className="projectShowcaseObjective">{project.objective}</p>

        <ul>
          {highlights.map((task) => <li key={task}>{task}</li>)}
        </ul>

        <div className="projectShowcaseMeta">
          <span>{project.period}</span>
          <span>{project.institution}</span>
        </div>
      </div>

      {reportOpen && (
        <div
          className="projectModal"
          role="dialog"
          aria-modal="true"
          aria-label={`Rapport du projet ${project.title}`}
          onClick={() => setReportOpen(false)}
        >
          <div className="projectModalContent reportModal" onClick={(event) => event.stopPropagation()}>
            <div className="reportModalHeader">
              <div>
                <span>RAPPORT DU PROJET</span>
                <strong>{project.title}</strong>
              </div>
              <button className="projectModalClose" type="button" onClick={() => setReportOpen(false)} aria-label="Fermer">×</button>
            </div>
            <iframe
              className="projectReportFrame"
              src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
              title={`Rapport ${project.title}`}
            />
            <p className="reportReadOnlyNote">Lecture intégrée au portfolio. Les contrôles de téléchargement sont masqués dans la visionneuse.</p>
          </div>
        </div>
      )}
    </article>
  );
}
