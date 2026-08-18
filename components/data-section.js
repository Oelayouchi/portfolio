'use client';

import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

function DataIcon({ type }) {
  const common={viewBox:'0 0 48 48',fill:'none',stroke:'currentColor',strokeWidth:2.2,strokeLinecap:'round',strokeLinejoin:'round','aria-hidden':'true'};
  if(type==='collect')return <svg {...common}><path d="M15 33H12a8 8 0 0 1-1-15.9A13 13 0 0 1 36 18a7.5 7.5 0 0 1 0 15H33"/><path d="M24 18v18"/><path d="m18 30 6 6 6-6"/></svg>;
  if(type==='prepare')return <svg {...common}><ellipse cx="19" cy="12" rx="10" ry="4"/><path d="M9 12v9c0 2.2 4.5 4 10 4 2.1 0 4-.3 5.6-.8M9 21v9c0 2.2 4.5 4 10 4"/><circle cx="33" cy="31" r="7"/></svg>;
  if(type==='analyse')return <svg {...common}><path d="M8 36V24h6v12M18 36V16h6v20M28 36V10h6v16"/><circle cx="35" cy="33" r="6"/><path d="m39.5 37.5 5 5"/></svg>;
  return <svg {...common}><path d="M8 38V26h6v12M19 38V20h6v18M30 38V13h6v25"/><path d="m9 18 8-6 7 3 12-8M31 7h5v5"/></svg>;
}

export default function DataSection(){
  const{t}=useLanguage();
  const steps=[
    {number:'01',type:'collect',tone:'collect',title:t('collect'),tools:<>API · Logs · Capteurs<br/>Excel</>},
    {number:'02',type:'prepare',tone:'prepare',title:t('prepare'),tools:<>SQL · Python<br/>Power Query</>},
    {number:'03',type:'analyse',tone:'analyse',title:t('analyse'),tools:<>KPI · DAX · Excel</>},
    {number:'04',type:'visualise',tone:'visualise',title:t('visualise'),tools:<>Power BI</>},
  ];
  return <section id="data" className="section shell dataPanel"><div className="dataPanelHeader"><SectionLabel>{t('dataLabel')}</SectionLabel><h2>{t('dataTitle')}</h2></div><div className="dataPanelBody"><div className="dataPanelCopy"><p>{t('dataCopy')}</p></div><div className="dataFlow"><div className="dataFlowSteps">{steps.map((step,index)=><div key={step.number} style={{display:'contents'}}><div className={`dataFlowStep ${step.tone}`}><div className="dataFlowIcon"><DataIcon type={step.type}/></div><span className="dataFlowNumber">{step.number}</span><h3>{step.title}</h3><p>{step.tools}</p></div>{index<steps.length-1&&<div className="dataFlowArrow" aria-hidden="true">→</div>}</div>)}</div><div className="dataFlowCaption">◉ {t('dataCaption')}</div></div></div></section>
}
