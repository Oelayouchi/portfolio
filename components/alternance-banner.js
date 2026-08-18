'use client';

import { useState } from 'react';
import { useLanguage } from './language-context';

export default function AlternanceBanner(){const{t}=useLanguage();const[minimized,setMinimized]=useState(false);if(minimized)return <button className="alternanceMini" type="button" aria-label={t('altTitle')} title={t('altTitle')} onClick={()=>setMinimized(false)}><span className="alternanceMiniDot"/></button>;return <aside className="alternanceBanner" aria-label={t('altTitle')}><button className="alternanceMinimize" type="button" aria-label={t('close')} title={t('close')} onClick={()=>setMinimized(true)}>−</button><div className="alternancePulse" aria-hidden="true"><span/></div><div className="alternanceContent"><span className="alternanceEyebrow">{t('opportunity')}</span><strong>{t('altTitle')}</strong><p>{t('altText')}</p></div><a className="alternanceCta" href="#contact">{t('contactMe')}<span aria-hidden="true">↗</span></a></aside>}
