'use client';

import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from './language-context';

const REPORTS={'experience-ocp':'/internships/ocp/report/rapport.pdf','experience-parcelhome-stage':'/internships/parcelhome/report/rapport.pdf'};

export default function ExperienceReport({experienceId,title}){
  const{t}=useLanguage();
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
        <iframe className="projectReportFrame" src={`${report}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`} title={`${t('internshipReport')} ${title}`}/>
      </div>
    </div>,
    document.body
  ):null;

  return <>
    <button className="projectReportButton experienceReportButton" type="button" onClick={()=>setOpen(true)}><span aria-hidden="true">◉</span>{t('viewReport')}</button>
    {modal}
  </>;
}
