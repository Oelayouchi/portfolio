'use client';

import { useState } from 'react';

export default function AlternanceBanner() {
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        className="alternanceMini"
        type="button"
        aria-label="Afficher ma recherche d'alternance"
        title="Je recherche une alternance Data Analyst"
        onClick={() => setMinimized(false)}
      >
        <span className="alternanceMiniDot" />
      </button>
    );
  }

  return (
    <aside className="alternanceBanner" aria-label="Recherche d'alternance">
      <button
        className="alternanceMinimize"
        type="button"
        aria-label="Réduire la fenêtre"
        title="Réduire"
        onClick={() => setMinimized(true)}
      >
        −
      </button>

      <div className="alternancePulse" aria-hidden="true">
        <span />
      </div>

      <div className="alternanceContent">
        <span className="alternanceEyebrow">OPPORTUNITÉ RECHERCHÉE</span>
        <strong>Alternance Data Analyst</strong>
        <p>Disponible pour échanger avec les entreprises à la recherche d’un profil ingénieur en reconversion vers la Data.</p>
      </div>

      <a className="alternanceCta" href="#contact">
        Me contacter
        <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
