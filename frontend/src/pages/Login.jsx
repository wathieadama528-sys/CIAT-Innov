import { useNavigate } from "react-router-dom";
export default function Login() {
  const nav = useNavigate();
  function submit(e){ e.preventDefault(); nav("/dashboard"); }
  return <main className="login-wrap"><form className="panel" onSubmit={submit}>
    <h1>Connexion administrateur</h1>
    <p>Accédez à votre espace de gestion</p>
    <label>Adresse e-mail<input type="email" required /></label>
    <label>Mot de passe<input type="password" required /></label>
    <button className="btn" type="submit">Se connecter</button>
    <small>Prototype académique : l’authentification API sécurisée sera branchée ensuite.</small>
  </form></main>;
}
