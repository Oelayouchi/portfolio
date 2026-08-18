'use client';

import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';
import { useLanguage } from './language-context';
import { localizeProject } from './project-translations';

const projectSlugs=['tolerance-aux-fautes','balance-numerique','station-meteo','convoyeur-ascenseur','parking-vhdl','machines-electriques'];
const intro={fr:'Une sélection de projets techniques autour du développement, de la donnée, de l’automatisation et des systèmes embarqués.',en:'A selection of technical projects spanning development, data, automation and embedded systems.',ar:'مجموعة من المشاريع التقنية في التطوير والبيانات والأتمتة والأنظمة المدمجة.',es:'Una selección de proyectos técnicos de desarrollo, datos, automatización y sistemas embebidos.',de:'Eine Auswahl technischer Projekte aus Entwicklung, Daten, Automatisierung und Embedded Systems.'};
export default function ProjectsSection(){const{language,t}=useLanguage();const featured=projects.slice(0,3).map(p=>localizeProject(p,language));return <section id="projects" className="section shell projectShowcaseSection"><div className="projectShowcaseHeading"><span className="eyebrow">PORTFOLIO</span><h2>{t('navProjects').toUpperCase()}</h2><p>{intro[language]}</p></div><div className="projectShowcaseGrid">{featured.map((project,index)=><ProjectShowcaseCard key={`${project.title}-${index}`} project={project} slug={projectSlugs[index]}/>)}</div><div className="projectShowcaseAllWrap"><Link className="projectShowcaseAllButton" href="/projects">{t('allProjects')}<span aria-hidden="true">→</span></Link></div></section>}
