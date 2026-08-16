export default function AlternanceBanner() {
  return (
    <aside className="alternanceBanner" aria-label="Recherche d'alternance">
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
