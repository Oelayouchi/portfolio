'use client';

import { useLanguage } from './language-context';

const terminalText={
  fr:{title:'Pipeline Data Engineering',steps:[['Extract','Données collectées'],['Transform','Nettoyage & transformation'],['Load','Chargement SQL'],['Analyse','Prêt pour Power BI']],done:'Pipeline completed successfully'},
  en:{title:'Data Engineering Pipeline',steps:[['Extract','Data collected'],['Transform','Cleaning & transformation'],['Load','SQL loading'],['Analyse','Ready for Power BI']],done:'Pipeline completed successfully'},
  es:{title:'Pipeline Data Engineering',steps:[['Extract','Datos recopilados'],['Transform','Limpieza y transformación'],['Load','Carga SQL'],['Analyse','Listo para Power BI']],done:'Pipeline completed successfully'},
  de:{title:'Data Engineering Pipeline',steps:[['Extract','Daten gesammelt'],['Transform','Bereinigung & Transformation'],['Load','SQL-Laden'],['Analyse','Bereit für Power BI']],done:'Pipeline completed successfully'},
  ar:{title:'Data Engineering Pipeline',steps:[['Extract','تم جمع البيانات'],['Transform','تنظيف وتحويل البيانات'],['Load','تحميل SQL'],['Analyse','جاهز لـ Power BI']],done:'Pipeline completed successfully'}
};

function DatabaseIcon(){return <svg className="availabilityTerminalDb" viewBox="0 0 180 180" aria-hidden="true"><ellipse cx="90" cy="38" rx="48" ry="18"/><path d="M42 38v30c0 10 21 18 48 18s48-8 48-18V38"/><path d="M42 68v30c0 10 21 18 48 18s48-8 48-18V68"/><path d="M42 98v30c0 10 21 18 48 18s48-8 48-18V98"/><ellipse cx="90" cy="128" rx="48" ry="18"/><circle cx="146" cy="50" r="3"/><circle cx="30" cy="80" r="3"/><circle cx="151" cy="110" r="3"/><circle cx="28" cy="132" r="3"/></svg>}

export default function AvailabilityDataPanel(){
  const{language,t}=useLanguage();
  const copy=terminalText[language]||terminalText.fr;
  return <div className="availabilityV2Wrap">
    <a className="availabilityV2Banner" href="#contact">
      <span className="availabilityV2Search" aria-hidden="true"><svg viewBox="0 0 32 32"><circle cx="13" cy="13" r="8"/><path d="m19 19 8 8"/></svg></span>
      <strong>{t('available')}</strong>
      <span className="availabilityV2Arrow">›</span>
    </a>
    <div className="availabilityTerminal" aria-label={copy.title}>
      <div className="availabilityTerminalBar"><span/><span/><span/></div>
      <div className="availabilityTerminalBody">
        <div className="availabilityTerminalCode">
          <div className="availabilityTerminalTitle"><span>&gt;&gt;&gt;</span> {copy.title}</div>
          {copy.steps.map(([name,desc])=><div className="availabilityTerminalLine" key={name}><span className="availabilityTerminalPrompt">›</span><strong>{name}</strong><span className="availabilityTerminalColon">:</span><em>{desc}</em></div>)}
          <div className="availabilityTerminalDone">{copy.done} <b>✓</b></div>
        </div>
        <div className="availabilityTerminalVisual"><DatabaseIcon/></div>
      </div>
    </div>
  </div>
}
