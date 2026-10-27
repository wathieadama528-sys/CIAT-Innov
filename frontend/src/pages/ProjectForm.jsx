import { useState } from "react";
import { createProject, generatePromo } from "../services/api";
import { useNavigate } from "react-router-dom";

const initial = {title:"", domain:"", cohort:"2026", status:"draft", progress_level:"idea", problem:"", solution:"", description:"", team:""};

export default function ProjectForm() {
  const [form, setForm] = useState(initial);
  const [msg, setMsg] = useState("");
  const nav = useNavigate();
  const change = e => setForm({...form, [e.target.name]: e.target.value});

  async function ai() {
    try {
      const r = await generatePromo(form);
      setForm({...form, description:r.text});
      setMsg("Suggestion générée. Vérifiez-la avant publication.");
    } catch(e) { setMsg(e.message); }
  }
  async function save(e) {
    e.preventDefault();
    try { await createProject(form); nav("/galerie"); }
    catch(e) { setMsg(e.message); }
  }

  return <main className="section"><form className="panel form" onSubmit={save}>
    <h1>Ajouter un projet</h1>
    <label>Titre du projet<input name="title" value={form.title} onChange={change} required /></label>
    <div className="two">
      <label>Domaine<input name="domain" value={form.domain} onChange={change} required /></label>
      <label>Cohorte<input name="cohort" value={form.cohort} onChange={change} /></label>
    </div>
    <div className="two">
      <label>Statut<select name="status" value={form.status} onChange={change}><option value="draft">Brouillon</option><option value="pending">En attente</option><option value="published">Publié</option></select></label>
      <label>Avancement<select name="progress_level" value={form.progress_level} onChange={change}><option value="idea">Idée</option><option value="design">Conception</option><option value="prototype">Prototype</option><option value="test">Test</option><option value="finished">Finalisé</option></select></label>
    </div>
    <label>Problème<textarea name="problem" value={form.problem} onChange={change}/></label>
    <label>Solution<textarea name="solution" value={form.solution} onChange={change}/></label>
    <label>Équipe<input name="team" value={form.team} onChange={change}/></label>
    <label>Présentation<textarea rows="7" name="description" value={form.description} onChange={change}/></label>
    <div className="actions"><button type="button" className="btn ai" onClick={ai}>✨ Générer une présentation avec l’IA</button><button className="btn">Enregistrer</button></div>
    {msg && <p>{msg}</p>}
  </form></main>;
}
