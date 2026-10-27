# CIAT Innov — Galerie numérique des innovations

Projet académique réalisé dans le cadre de l'évaluation pratique d'IA générative.

## Membres du groupe
- AYOU DIOUF
- ADAMA WATHIE
- MARIEME SEYE

## Fonctionnalités
- Galerie publique des innovations
- Recherche et filtres
- Fiche détaillée d'un projet
- Authentification administrateur
- Ajout / modification / suppression / publication des projets
- Tableau de bord et statistiques
- QR Code par projet
- Manifestation d'intérêt
- Génération assistée par IA d'une présentation promotionnelle

## Architecture
- Frontend : React + Vite
- Backend : Django + Django REST Framework
- Base de données locale de démarrage : SQLite (PostgreSQL peut être configuré ensuite)

## Démarrage du backend (Windows PowerShell)

```powershell
cd backend
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

API : http://127.0.0.1:8000/api/projects/

## Démarrage du frontend

Ouvrir un deuxième terminal :

```powershell
cd frontend
npm install
npm run dev
```

Frontend : http://localhost:5173

## Remarque IA
Le bouton IA est présent dans le formulaire. Une route backend de démonstration génère une proposition locale à partir des données saisies. Une API IA réelle pourra être branchée ensuite sans exposer la clé dans le frontend.
