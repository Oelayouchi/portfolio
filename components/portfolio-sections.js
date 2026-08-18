'use client';

import { useLanguage } from './language-context';

export function AboutSection(){const{t}=useLanguage();return <section id="about" className="section shell split"><div><span className="eyebrow">{t('about')}</span><h2>{t('aboutTitle')}</h2></div><div className="copy"><p>{t('aboutP1')}</p><p>{t('aboutP2')}</p></div></section>}
export function Footer(){const{t}=useLanguage();return <footer className="footer shell"><span>© 2026 Oussama EL AYOUCHI</span><span>{t('portfolioData')}</span></footer>}
