const API = "http://127.0.0.1:8000/api";

export async function getProjects() {
  const r = await fetch(`${API}/projects/`);
  if (!r.ok) throw new Error("Impossible de charger les projets");
  return r.json();
}

export async function getProject(id) {
  const r = await fetch(`${API}/projects/${id}/`);
  if (!r.ok) throw new Error("Projet introuvable");
  return r.json();
}

export async function createProject(data) {
  const r = await fetch(`${API}/projects/`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  if (!r.ok) throw new Error("Enregistrement impossible");
  return r.json();
}

export async function generatePromo(data) {
  const r = await fetch(`${API}/generate-promo/`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });
  if (!r.ok) throw new Error("Génération impossible");
  return r.json();
}
