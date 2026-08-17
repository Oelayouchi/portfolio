import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';

const projectSlugs = [
  'tolerance-aux-fautes',
  'balance-numerique',
  'station-meteo',
  'convoyeur-ascenseur',
  'parking-vhdl',
  'machines-electriques',
];

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="section shell projectShowcaseSection">
      <div className="projectShowcaseHeading">
        <span className="eyebrow">PORTFOLIO</span>
        <h2>PROJETS</h2>
        <p>
          Une sélection de projets techniques autour du développement, de la donnée,
          de l&apos;automatisation et des systèmes embarqués.
        </p>
      </div>

      <div className="projectShowcaseGrid">
        {featuredProjects.map((project, index) => (
          <ProjectShowcaseCard
            key={project.title}
            project={project}
            slug={projectSlugs[index]}
          />
        ))}
      </div>

      <div className="projectShowcaseAllWrap">
        <Link className="projectShowcaseAllButton" href="/projects">
          VOIR TOUS LES PROJETS
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
