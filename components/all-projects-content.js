'use client';

import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';
import { languages, useLanguage } from './language-context';
import { localizeProject } from './project-translations';

const slugs=['tolerance-aux-fautes','balance-numerique','station-meteo','convoyeur-ascenseur','parking-vhdl','machines-electriques'];
const copy={fr:{title:'TOUS LES PROJETS',intro:'Projets techniques réalisés autour du développement, de l’automatisation, des systèmes embarqués et de l’analyse de données.'},en:{title:'ALL PROJECTS',intro:'Technical projects spanning development, automation, embedded systems and data analysis.'},ar:{title:'جميع المشاريع',intro:'مشاريع تقنية في التطوير والأتمتة والأنظمة المدمجة وتحليل البيانات.'},es:{title:'TODOS LOS PROYECTOS',intro:'Proyectos técnicos de desarrollo, automatización, sistemas embebidos y análisis de datos.'},de:{title:'ALLE PROJEKTE',intro:'Technische Projekte aus Entwicklung, Automatisierung, Embedded Systems und Datenanalyse.'}};
export default function AllProjectsContent(){const{language,setLanguage,t}=useLanguage();const x=copy[language];const localized=projects.map(p=>localizeProject(p,language));return <section className="shell allProjectsShell"><div className="allProjectsHeader"><div><span className="eyebrow">PORTFOLIO</span><h1>{x.title}</h1><p>{x.intro}</p></div><div style={{display:'flex',gap:12,alignItems:'center',flexWrap:'wrap'}}><div className="languageSelector"><span>🌐</span><select aria-label={t('language')} value={language} onChange={e=>setLanguage(e.target.value)}>{languages.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}</select></div><Link className="allProjectsBack" href="/#projects"><span aria-hidden="true">←</span>{t('backPortfolio')}</Link></div></div><div className="projectShowcaseGrid allProjectsGrid">{localized.map((project,index)=><ProjectShowcaseCard key={`${project.title}-${index}`} project={project} slug={slugs[index]||`projet-${index+1}`}/>)}</div></section>}
