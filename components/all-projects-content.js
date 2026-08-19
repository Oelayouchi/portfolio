'use client';

import Link from 'next/link';
import { projects } from '../data/portfolio';
import ProjectShowcaseCard from './project-showcase-card';
import { languages, useLanguage } from './language-context';
import { localizeProject } from './project-translations';

const slugs=['tolerance-aux-fautes','balance-numerique','station-meteo','convoyeur-ascenseur','parking-vhdl','machines-electriques'];
const copy={fr:{title:'TOUS LES PROJETS',intro:'Projets techniques réalisés autour du développement, de l’automatisation, des systèmes embarqués et de l’analyse de données.'},en:{title:'ALL PROJECTS',intro:'Technical projects spanning development, automation, embedded systems and data analysis.'},ar:{title:'جميع المشاريع',intro:'مشاريع تقنية في التطوير والأتمتة والأنظمة المدمجة وتحليل البيانات.'},es:{title:'TODOS LOS PROYECTOS',intro:'Proyectos técnicos de desarrollo, automatización, sistemas embebidos y análisis de datos.'},de:{title:'ALLE PROJEKTE',intro:'Technische Projekte aus Entwicklung, Automatisierung, Embedded Systems und Datenanalyse.'}};

function ThemeIcon({type}){
  if(type==='moon')return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z"/></svg>;
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>;
}

export default function AllProjectsContent(){
  const{language,setLanguage,t}=useLanguage();
  const x=copy[language];
  const localized=projects.map(p=>localizeProject(p,language));
  return <>
    <header className="navBar">
      <nav className="nav shell" aria-label="Portfolio navigation">
        <Link className="brand" href="/" aria-label="Portfolio home">OE<span>.</span></Link>
        <div className="navRight allProjectsNavRight">
          <div className="languageSelector"><span aria-hidden="true">🌐</span><select aria-label={t('language')} value={language} onChange={e=>setLanguage(e.target.value)}>{languages.map(l=><option key={l.code} value={l.code}>{l.label}</option>)}</select></div>
          <Link className="allProjectsBack" href="/#projects" aria-label={t('backPortfolio')}><span className="allProjectsBackArrow" aria-hidden="true">←</span><span className="allProjectsBackText">{t('backPortfolio')}</span></Link>
          <div className="themeToggle" aria-label="Theme"><span><ThemeIcon type="moon"/></span><span><ThemeIcon type="sun"/></span></div>
        </div>
      </nav>
    </header>
    <section className="shell allProjectsShell">
      <div className="allProjectsHeader"><div><span className="eyebrow">PORTFOLIO</span><h1>{x.title}</h1><p>{x.intro}</p></div></div>
      <div className="projectShowcaseGrid allProjectsGrid">{localized.map((project,index)=><ProjectShowcaseCard key={`${project.title}-${index}`} project={project} slug={slugs[index]||`projet-${index+1}`}/>)}</div>
    </section>
  </>;
}
