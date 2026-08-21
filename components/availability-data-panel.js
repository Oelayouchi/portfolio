'use client';

import { useLanguage } from './language-context';

const terminalText={
  fr:{title:'Pipeline Data Engineering',steps:[['Extract','Données collectées'],['Transform','Nettoyage & transformation'],['Load','Chargement SQL'],['Analyse','Prêt pour Power BI']],done:'Pipeline completed successfully'},
  en:{title:'Data Engineering Pipeline',steps:[['Extract','Data collected'],['Transform','Cleaning & transformation'],['Load','SQL loading'],['Analyse','Ready for Power BI']],done:'Pipeline completed successfully'},
  es:{title:'Pipeline Data Engineering',steps:[['Extract','Datos recopilados'],['Transform','Limpieza y transformación'],['Load','Carga SQL'],['Analyse','Listo para Power BI']],done:'Pipeline completed successfully'},
  de:{title:'Data Engineering Pipeline',steps:[['Extract','Daten gesammelt'],['Transform','Bereinigung & Transformation'],['Load','SQL-Laden'],['Analyse','Bereit für Power BI']],done:'Pipeline completed successfully'},
  ar:{title:'Data Engineering Pipeline',steps:[['Extract','تم جمع البيانات'],['Transform','تنظيف وتحويل البيانات'],['Load','تحميل SQL'],['Analyse','جاهز لـ Power BI']],done:'Pipeline completed successfully'}
};

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
      </div>
    </div>
  </div>
}
