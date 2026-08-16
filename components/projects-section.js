import { projects } from '../data/portfolio';
import ProjectMedia from './project-media';
import { Tags } from './ui';

const projectSlugs = [
  'tolerance-aux-fautes',
  'balance-numerique',
  'station-meteo',
  'convoyeur-ascenseur',
  'parking-vhdl',
  'machines-electriques',
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section shell">
      <h2>PROJETS TECHNIQUES RÉALISÉS</h2>

      <div className="grid projects projectsWithMedia">
        {projects.map((project, index) => {
          const slug = projectSlugs[index] || `projet-${index + 1}`;

          return (
            <article className="card projectDetailed projectDetailedMedia" key={project.title}>
              <div className="num">{String(index + 1).padStart(2, '0')}</div>
              <p className="projectPeriod">{project.period}</p>
              <p className="mini">{project.institution}</p>
              <h3>{project.title}</h3>
              <p className="projectType">{project.type}</p>

              <div className="projectBody">
                <div className="projectContent">
                  <h4>Objectif</h4>
                  <p>{project.objective}</p>

                  <h4>Réalisations</h4>
                  <ul>
                    {project.tasks.map((task) => <li key={task}>{task}</li>)}
                  </ul>
                </div>

                <Tags items={project.stack} />
              </div>

              <ProjectMedia slug={slug} title={project.title} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
