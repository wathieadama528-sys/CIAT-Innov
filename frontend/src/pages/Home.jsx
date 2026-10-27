import { Link } from "react-router-dom";

export default function Home() {
  return <main>
    <section className="hero">
      <div>
        <span className="eyebrow">CENTRE D’INNOVATION • ISEP AMADOU TRAWARÉ</span>
        <h1>Valorisons les innovations du CIAT</h1>
        <p>Découvrez les projets, prototypes et solutions innovantes développés par les talents du CIAT.</p>
        <div className="actions">
          <Link className="btn" to="/galerie">Découvrir les projets</Link>
          <a className="btn secondary" href="#about">À propos du CIAT</a>
        </div>
      </div>
    </section>
    <section className="stats">
      <div><strong>25</strong><span>Projets publiés</span></div>
      <div><strong>8</strong><span>Domaines d’innovation</span></div>
      <div><strong>15+</strong><span>Équipes impliquées</span></div>
    </section>
    <section className="section" id="about">
      <h2>CIAT Innov</h2>
      <p>Une galerie numérique pour présenter les projets, équipes, prototypes et résultats issus du CIAT.</p>
    </section>
  </main>;
}
