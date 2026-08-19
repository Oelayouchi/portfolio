'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';
import PdfViewer from './pdf-viewer';

const projectVisuals={'balance-numerique':'/projects/balance-numerique/images/image-01.png','station-meteo':'/projects/station-meteo/images/image-01.png'};
const availableReports=new Set(['balance-numerique','station-meteo']);
const techLabels={fr:'Technologies utilisées',en:'Technologies used',ar:'التقنيات المستخدمة',es:'Tecnologías utilizadas',de:'Verwendete Technologien'};

export default function ProjectShowcaseCard({project,slug}){
  const{language,t}=useLanguage();
  const[reportOpen,setReportOpen]=useState(false);
  const[mounted,setMounted]=useState(false);
  const visual=projectVisuals[slug];
  const report=`/projects/${slug}/report/rapport.pdf`;
  const hasReport=availableReports.has(slug);
  const highlights=project.tasks.slice(0,3);

  useEffect(()=>{setMounted(true);return()=>setMounted(false)},[]);
  useEffect(()=>{
    if(!reportOpen)return;
    const prev=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=prev};
  },[reportOpen]);

  const modal=reportOpen&&mounted?createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${t('projectReport')} ${project.title}`} onClick={()=>setReportOpen(false)}>
      <div className="projectModalContent reportModal" onClick={e=>e.stopPropagation()}>
        <div className="reportModalHeader">
          <div><span>{t('projectReport')}</span><strong>{project.title}</strong></div>
          <button className="projectModalClose" type="button" onClick={()=>setReportOpen(false)} aria-label={t('close')}>×</button>
        </div>
        {hasReport?<PdfViewer src={report} title={`${t('projectReport')} ${project.title}`}/>:<div className="projectReportUnavailable" aria-hidden="true"/>}
      </div>
    </div>,document.body
  ):null;

  return <>
    <article className="projectShowcaseCard">
      <div className={`projectShowcaseVisual${visual?' hasImage':' isEmpty'}`}>{visual?<img src={visual} alt={project.title} loading="lazy"/>:null}</div>
      <div className="projectShowcaseContent">
        <div className="projectShowcaseTags" aria-label={techLabels[language]}>{project.stack.slice(0,4).map(item=><span key={item}>{item}</span>)}</div>
        <div className="projectShowcaseTitleRow"><h3>{project.title}</h3><button className="projectShowcaseButton" type="button" onClick={()=>setReportOpen(true)}><span className="projectReportPulse" aria-hidden="true"/>{t('viewReport').toUpperCase()}</button></div>
        <p className="projectShowcaseObjective">{project.objective}</p>
        <ul>{highlights.map((task,i)=><li key={i}>{task}</li>)}</ul>
        <div className="projectShowcaseMeta"><span>{project.period}</span><span>{project.institution}</span></div>
      </div>
    </article>
    {modal}
  </>;
}
