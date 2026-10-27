import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../services/api";

export default function Gallery() {
  const [projects, setProjects] = useState([]);
  const [q, setQ] = useState("");
  const [domain, setDomain] = useState("");
  const [error, setError] = useState("");

  useEffect(() => { getProjects().then(setProjects).catch(e => setError(e.message)); }, []);
  const domains = [...new Set(projects.map(p => p.domain))];
  const filtered = useMemo(() => projects.filter(p =>
    (!q || p.title.toLowerCase().includes(q.toLowerCase())) &&
    (!domain || p.domain === domain)
  ), [projects, q, domain]);

  return <main className="section">
    <span className="eyebrow">CATALOGUE TECHNOLOGIQUE</span>
    <h1>Galerie des innovations</h1>
    <p>Découvrez tous les projets développés au CIAT.</p>
    <div className="filters">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Rechercher un projet..." />
      <select value={domain} onChange={e=>setDomain(e.target.value)}>
        <option value="">Tous les domaines</option>
        {domains.map(d=><option key={d}>{d}</option>)}
      </select>
    </div>
    {error && <p className="error">{error}. Vérifiez que Django est démarré.</p>}
    <div className="grid">
      {filtered.map(p => <Link to={`/projets/${p.id}`} className="card" key={p.id}>
        <div className="project-image">{p.image_url ? <img src={p.image_url} alt="" /> : "🚀"}</div>
        <span className="badge">{p.domain}</span>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <small>Cohorte {p.cohort || "—"} • {p.status === "published" ? "Publié" : "En attente"}</small>
      </Link>)}
    </div>
  </main>;
}
