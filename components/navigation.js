'use client';

import { useEffect, useRef, useState } from 'react';
import { languages, useLanguage } from './language-context';

function ThemeIcon({ type }) {
  if (type === 'moon') return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" /></svg>;
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}

const mobileScrollSelectors = [
  '.homeTools',
  '.companiesGrid',
  '.educationCardsGrid',
  '#certifications .certs',
  '.awardsGrid',
  '.projectShowcaseGrid',
  '#experience .timeline',
  '.interestCardsGrid',
  '.dataPipeline',
  '.homeCareerLine',
];

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const links = [['#about', 'navAbout'], ['#experience', 'navExperience'], ['#projects', 'navProjects'], ['#awards', 'navAwards'], ['#data', 'navData'], ['#certifications', 'navCerts'], ['#education', 'navEducation'], ['#contact', 'navContact']];
  const [active, setActive] = useState('#about');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      let current = links[0][0];
      for (const [href] of links) {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= 130) current = href;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = '#contact';
      setActive(current);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => {
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
    };
  }, [language]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnOutsidePress = (event) => {
      const target = event.target;
      if (menuButtonRef.current?.contains(target) || mobileMenuRef.current?.contains(target)) return;
      setMenuOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => document.removeEventListener('pointerdown', closeOnOutsidePress);
  }, [menuOpen]);

  useEffect(() => {
    const cleanups = [];

    const attachIndicator = (scroller) => {
      if (!scroller || scroller.dataset.mobileScrollIndicator === 'ready') return;
      scroller.dataset.mobileScrollIndicator = 'ready';

      const track = document.createElement('div');
      const thumb = document.createElement('div');
      track.className = 'mobileScrollIndicator';
      thumb.className = 'mobileScrollIndicatorThumb';
      track.setAttribute('aria-hidden', 'true');
      track.appendChild(thumb);
      scroller.insertAdjacentElement('afterend', track);

      const updateIndicator = () => {
        const clientWidth = scroller.clientWidth;
        const scrollWidth = scroller.scrollWidth;
        const maxScroll = Math.max(scrollWidth - clientWidth, 0);
        const hasOverflow = maxScroll > 2;
        track.classList.toggle('visible', hasOverflow);
        if (!hasOverflow || clientWidth <= 0) return;

        const trackWidth = track.clientWidth;
        const thumbWidth = Math.max(44, Math.min(trackWidth, trackWidth * (clientWidth / scrollWidth)));
        const maxThumbLeft = Math.max(trackWidth - thumbWidth, 0);
        const thumbLeft = maxScroll ? (scroller.scrollLeft / maxScroll) * maxThumbLeft : 0;
        thumb.style.width = `${thumbWidth}px`;
        thumb.style.transform = `translateX(${thumbLeft}px)`;
      };

      const scrollFromTrack = (event) => {
        if (event.target === thumb) return;
        const rect = track.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width));
        scroller.scrollTo({ left: ratio * (scroller.scrollWidth - scroller.clientWidth), behavior: 'smooth' });
      };

      let dragging = false;
      let dragStartX = 0;
      let startScrollLeft = 0;
      const onThumbPointerDown = (event) => {
        dragging = true;
        dragStartX = event.clientX;
        startScrollLeft = scroller.scrollLeft;
        thumb.setPointerCapture?.(event.pointerId);
        event.preventDefault();
      };
      const onThumbPointerMove = (event) => {
        if (!dragging) return;
        const trackWidth = track.clientWidth;
        const thumbWidth = thumb.getBoundingClientRect().width;
        const movable = Math.max(trackWidth - thumbWidth, 1);
        const maxScroll = Math.max(scroller.scrollWidth - scroller.clientWidth, 0);
        scroller.scrollLeft = startScrollLeft + ((event.clientX - dragStartX) / movable) * maxScroll;
      };
      const stopDragging = () => { dragging = false; };

      scroller.addEventListener('scroll', updateIndicator, { passive: true });
      track.addEventListener('pointerdown', scrollFromTrack);
      thumb.addEventListener('pointerdown', onThumbPointerDown);
      thumb.addEventListener('pointermove', onThumbPointerMove);
      thumb.addEventListener('pointerup', stopDragging);
      thumb.addEventListener('pointercancel', stopDragging);

      const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(updateIndicator) : null;
      observer?.observe(scroller);
      observer?.observe(track);

      requestAnimationFrame(updateIndicator);
      const delayedUpdate = setTimeout(updateIndicator, 500);

      cleanups.push(() => {
        clearTimeout(delayedUpdate);
        observer?.disconnect();
        scroller.removeEventListener('scroll', updateIndicator);
        track.removeEventListener('pointerdown', scrollFromTrack);
        thumb.removeEventListener('pointerdown', onThumbPointerDown);
        thumb.removeEventListener('pointermove', onThumbPointerMove);
        thumb.removeEventListener('pointerup', stopDragging);
        thumb.removeEventListener('pointercancel', stopDragging);
        delete scroller.dataset.mobileScrollIndicator;
        track.remove();
      });
    };

    const attachAll = () => {
      if (!window.matchMedia('(max-width: 760px)').matches) return;
      mobileScrollSelectors.forEach((selector) => document.querySelectorAll(selector).forEach(attachIndicator));
    };

    attachAll();
    const delayedAttach = setTimeout(attachAll, 250);
    window.addEventListener('resize', attachAll);

    return () => {
      clearTimeout(delayedAttach);
      window.removeEventListener('resize', attachAll);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return <header className="navBar"><nav className="nav shell" aria-label="Navigation"><a className="brand" href="#top">OE<span>.</span></a><div className="navRight"><div className="navlinks">{links.map(([href, key]) => <a key={href} className={active === href ? 'active' : ''} href={href} onClick={() => { setActive(href); setMenuOpen(false); }}>{t(key)}</a>)}</div><div className="languageSelector"><span aria-hidden="true">🌐</span><select aria-label={t('language')} value={language} onChange={(event) => setLanguage(event.target.value)}>{languages.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}</select></div><div className="themeToggle" aria-label="Theme"><span><ThemeIcon type="moon" /></span><span className="themeActive"><ThemeIcon type="sun" /></span></div><button ref={menuButtonRef} className={`mobileMenuButton ${menuOpen ? 'open' : ''}`} type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><span /><span /><span /></button></div></nav><div ref={mobileMenuRef} className={`mobileMenu ${menuOpen ? 'open' : ''}`}><div className="mobileMenuInner shell">{links.map(([href, key]) => <a key={href} className={active === href ? 'active' : ''} href={href} onClick={() => { setActive(href); setMenuOpen(false); }}>{t(key)}</a>)}</div></div></header>;
}
