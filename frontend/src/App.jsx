import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import ProjectDetail from "./pages/ProjectDetail";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectForm from "./pages/ProjectForm";

export default function App() {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galerie" element={<Gallery />} />
      <Route path="/projets/:id" element={<ProjectDetail />} />
      <Route path="/connexion" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ajouter-projet" element={<ProjectForm />} />
    </Routes>
  </>;
}
