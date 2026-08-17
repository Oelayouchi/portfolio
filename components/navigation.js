'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projects', label: 'Projets' },
  { href: '#data', label: 'Data' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

function ThemeIcon({ type }) {
  if (type === 'moon') {
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8Z" /></svg>;
  }
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}

export default function Navigation() {
  const [active, setActive] = useState('#about');

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const activationLine = 130;
      let current = links[0].href;

      for (const link of links) {
        const section = document.querySelector(link.href);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= activationLine) current = link.href;
      }

      const contact = document.querySelector('#contact');
      if (contact && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
        current = '#contact';
      }

      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <header className="navBar">
      <nav className="nav shell" aria-label="Navigation principale">
        <a className="brand" href="#top" aria-label="Retour en haut">OE<span>.</span></a>
        <div className="navRight">
          <div className="navlinks">
            {links.map((link) => (
              <a
                key={link.href}
                className={active === link.href ? 'active' : ''}
                href={link.href}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="themeToggle" aria-label="Sélecteur de thème visuel">
            <span><ThemeIcon type="moon" /></span>
            <span className="themeActive"><ThemeIcon type="sun" /></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
