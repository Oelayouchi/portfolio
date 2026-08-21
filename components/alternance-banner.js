'use client';

import { useState } from 'react';
import { useLanguage } from './language-context';

const alternanceCopy={
  fr:{title:'Alternance Data Engineer',text:'Disponible dès octobre 2026 pour une alternance en Data Engineering.'},
  en:{title:'Data Engineer Apprenticeship',text:'Available from October 2026 for a Data Engineering apprenticeship.'},
  ar:{title:'تدريب Data Engineer',text:'متاح ابتداءً من أكتوبر 2026 لتدريب بالتناوب في Data Engineering.'},
  es:{title:'Alternancia Data Engineer',text:'Disponible desde octubre de 2026 para una alternancia en Data Engineering.'},
  de:{title:'Data-Engineer-Alternance',text:'Ab Oktober 2026 für eine Alternance im Bereich Data Engineering verfügbar.'},
};

export default function AlternanceBanner(){const{t,language}=useLanguage();const[minimized,setMinimized]=useState(false);const copy=alternanceCopy[language]||alternanceCopy.fr;if(minimized)return <button className="alternanceMini" type="button" aria-label={copy.title} title={copy.title} onClick={()=>setMinimized(false)}><span className="alternanceMiniDot"/></button>;return <aside className="alternanceBanner" aria-label={copy.title}><button className="alternanceMinimize" type="button" aria-label={t('close')} title={t('close')} onClick={()=>setMinimized(true)}>−</button><div className="alternancePulse" aria-hidden="true"><span/></div><div className="alternanceContent"><span className="alternanceEyebrow">{t('opportunity')}</span><strong>{copy.title}</strong><p>{copy.text}</p></div><a className="alternanceCta" href="#contact">{t('contactMe')}<span aria-hidden="true">↗</span></a></aside>}
