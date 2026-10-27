import { Link } from "react-router-dom";

export default function Header() {
  return <header className="header">
    <Link className="brand" to="/">💡 <span><b>CIAT Innov</b><small>Galerie numérique des innovations</small></span></Link>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/galerie">Galerie</Link>
      <a href="#about">À propos</a>
      <a href="#contact">Contact</a>
      <Link className="btn" to="/connexion">Connexion</Link>
    </nav>
  </header>;
}
