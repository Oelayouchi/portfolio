'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';
import PdfViewer from './pdf-viewer';

const projectVisuals={
  'balance-numerique':[
    '/projects/balance-numerique/images/image-01.png',
    '/projects/balance-numerique/images/image-02.png',
    '/projects/balance-numerique/images/image-03.png',
    '/projects/balance-numerique/images/image-04.png',
    '/projects/balance-numerique/images/image-05.png'
  ],
  'station-meteo':[
    '/projects/station-meteo/images/image-01.png',
    '/projects/station-meteo/images/image-02.png',
    '/projects/station-meteo/images/image-03.png',
    '/projects/station-meteo/images/image-04.png',
    '/projects/station-meteo/images/image-05.png'
  ]
};
const availableReports=new Set(['balance-numerique','station-meteo']);
const techLabels={fr:'Technologies utilisées',en:'Technologies used',ar:'التقنيات المستخدمة',es:'Tecnologías utilizadas',de:'Verwendete Technologien'};
const machinesCompact={
  fr:{title:'Commande des machines électriques',objective:'Modéliser et commander des machines électriques sous MATLAB/Simulink.',tasks:['Modélisation des machines synchrones et asynchrones avec transformation de Park.','Simulation des commandes scalaire, vectorielle et DTC.','Étude des onduleurs et des stratégies de modulation MLI.']},
  en:{title:'Electrical Machines Control',objective:'Model and control electrical machines in MATLAB/Simulink.',tasks:['Model synchronous and induction machines using Park transformation.','Simulate scalar, vector and DTC control strategies.','Study inverters and PWM modulation strategies.']},
  es:{title:'Control de máquinas eléctricas',objective:'Modelar y controlar máquinas eléctricas en MATLAB/Simulink.',tasks:['Modelado de máquinas síncronas y asíncronas con transformación de Park.','Simulación de control escalar, vectorial y DTC.','Estudio de inversores y estrategias PWM.']},
  de:{title:'Regelung elektrischer Maschinen',objective:'Elektrische Maschinen in MATLAB/Simulink modellieren und regeln.',tasks:['Synchrone und asynchrone Maschinen mit Park-Transformation modellieren.','Skalar-, Vektor- und DTC-Regelung simulieren.','Wechselrichter und PWM-Strategien untersuchen.']},
  ar:{title:'التحكم في الآلات الكهربائية',objective:'نمذجة والتحكم في الآلات الكهربائية باستخدام MATLAB/Simulink.',tasks:['نمذجة الآلات المتزامنة وغير المتزامنة باستخدام تحويل Park.','محاكاة التحكم السلمي والمتجهي وDTC.','دراسة العواكس واستراتيجيات PWM.']}
};

export default function ProjectShowcaseCard({project,slug}){
  const{language,t}=useLanguage();
  const[reportOpen,setReportOpen]=useState(false);
  const[mounted,setMounted]=useState(false);
  const[visualIndex,setVisualIndex]=useState(0);
  const visuals=projectVisuals[slug]||[];
  const visual=visuals[visualIndex];
  const report=`/projects/${slug}/report/rapport.pdf`;
  const hasReport=availableReports.has(slug);
  const compact=slug==='machines-electriques'?(machinesCompact[language]||machinesCompact.fr):null;
  const displayTitle=compact?.title||project.title;
  const displayObjective=compact?.objective||project.objective;
  const highlights=(compact?.tasks||project.tasks).slice(0,3);

  useEffect(()=>{setMounted(true);return()=>setMounted(false)},[]);
  useEffect(()=>{
    if(visuals.length<=1)return;
    const timer=setInterval(()=>setVisualIndex(index=>(index+1)%visuals.length),2800);
    return()=>clearInterval(timer);
  },[slug,visuals.length]);
  useEffect(()=>{
    if(!reportOpen)return;
    const prev=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return()=>{document.body.style.overflow=prev};
  },[reportOpen]);

  const modal=reportOpen&&mounted?createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${t('projectReport')} ${displayTitle}`} onClick={()=>setReportOpen(false)}>
      <div className="projectModalContent reportModal" onClick={e=>e.stopPropagation()}>
        <div className="reportModalHeader">
          <div><span>{t('projectReport')}</span><strong>{displayTitle}</strong></div>
          <button className="projectModalClose" type="button" onClick={()=>setReportOpen(false)} aria-label={t('close')}>×</button>
        </div>
        {hasReport?<PdfViewer src={report} title={`${t('projectReport')} ${displayTitle}`}/>:<div className="projectReportUnavailable" aria-hidden="true"/>}
      </div>
    </div>,document.body
  ):null;

  return <>
    <article className="projectShowcaseCard">
      <div className={`projectShowcaseVisual${visual?' hasImage':' isEmpty'}`}>
        {visual?<img key={visual} src={visual} alt={displayTitle} loading="lazy"/>:null}
      </div>
      <div className="projectShowcaseContent">
        <div className="projectShowcaseTags" aria-label={techLabels[language]}>{project.stack.map(item=><span key={item}>{item}</span>)}</div>
        <div className="projectShowcaseTitleRow"><h3>{displayTitle}</h3><button className="projectShowcaseButton" type="button" onClick={()=>setReportOpen(true)}><span className="projectReportPulse" aria-hidden="true"/>{t('viewReport').toUpperCase()}</button></div>
        <p className="projectShowcaseObjective">{displayObjective}</p>
        <ul>{highlights.map((task,i)=><li key={i}>{task}</li>)}</ul>
        <div className="projectShowcaseMeta"><span>{project.period}</span><span>{project.institution}</span></div>
      </div>
    </article>
    {modal}
  </>;
}
