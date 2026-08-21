'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';
import PdfViewer from './pdf-viewer';

const REPORTS={'experience-ocp':'/internships/ocp/report/rapport.pdf','experience-parcelhome-stage':'/internships/parcelhome/report/rapport.pdf'};
const reportLabels={fr:'Rapport',en:'Report',ar:'تقرير',es:'Informe',de:'Bericht'};

export default function ExperienceReport({experienceId,title}){
  const{language,t}=useLanguage();
  const[open,setOpen]=useState(false);
  const report=REPORTS[experienceId];
  if(!report)return null;

  const modal=open&&typeof document!=='undefined'?createPortal(
    <div className="projectModal" role="dialog" aria-modal="true" aria-label={`${t('internshipReport')} ${title}`} onClick={()=>setOpen(false)}>
      <div className="projectModalContent reportModal" onClick={e=>e.stopPropagation()}>
        <div className="reportModalHeader">
          <div><span>{t('internshipReport')}</span><strong>{title}</strong></div>
          <button className="projectModalClose" type="button" onClick={()=>setOpen(false)} aria-label={t('close')}>×</button>
        </div>
        <PdfViewer src={report} title={`${t('internshipReport')} ${title}`}/>
      </div>
    </div>,
    document.body
  ):null;

  return <>
    <button className="projectReportButton experienceReportButton" type="button" onClick={()=>setOpen(true)}><span aria-hidden="true">↗</span>{reportLabels[language]||reportLabels.fr}</button>
    {modal}
  </>;
}
