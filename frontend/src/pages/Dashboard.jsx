import { Link } from "react-router-dom";
export default function Dashboard() {
  return <main className="section">
    <div className="dashboard-head"><div><h1>Bonjour, Administrateur</h1><p>Voici un aperçu de l’activité de la plateforme.</p></div>
    <Link className="btn" to="/ajouter-projet">+ Ajouter un projet</Link></div>
    <div className="stats">
      <div><strong>25</strong><span>Projets totaux</span></div>
      <div><strong>18</strong><span>Projets publiés</span></div>
      <div><strong>5</strong><span>En attente</span></div>
      <div><strong>1 248</strong><span>Consultations</span></div>
    </div>
    <div className="panel"><h2>Indicateurs</h2><p>Les graphiques et statistiques avancés seront connectés aux données réelles dans l’étape Data.</p></div>
  </main>;
}
