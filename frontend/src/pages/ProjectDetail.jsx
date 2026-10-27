import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { getProject } from "../services/api";

export default function ProjectDetail() {
  const {id} = useParams();
  const [p, setP] = useState(null);
  useEffect(()=>{ getProject(id).then(setP); }, [id]);
  if (!p) return <main className="section"><p>Chargement...</p></main>;
  const url = window.location.href;
  return <main className="section">
    <Link to="/galerie">← Galerie des projets</Link>
    <div className="detail">
      <div>
        <span className="badge">{p.domain}</span>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <div className="project-image large">🚀</div>
        <h2>Problème</h2><p>{p.problem || "Non renseigné"}</p>
        <h2>Solution</h2><p>{p.solution || "Non renseignée"}</p>
        <h2>Équipe</h2><p>{p.team || "À renseigner"}</p>
      </div>
      <aside className="qr"><h3>QR Code</h3><QRCodeSVG value={url} size={160}/><p>Scannez pour ouvrir cette fiche.</p></aside>
    </div>
  </main>;
}
