from django.core.management.base import BaseCommand
from projects.models import Project

DATA = [
    ("EcoSolar", "Énergie", "2024", "Solution solaire pour les zones rurales"),
    ("AgriSmart", "Agriculture", "2023", "Suivi intelligent des cultures"),
    ("CleanCity", "Environnement", "2024", "Gestion intelligente des déchets"),
    ("EduTech", "Éducation", "2023", "Plateforme d’apprentissage"),
    ("HealthAI", "Santé", "2024", "Diagnostic assisté par intelligence artificielle"),
    ("AgroDrone", "Agriculture", "2024", "Surveillance des cultures par drone"),
]

class Command(BaseCommand):
    help = "Ajoute des projets de démonstration"

    def handle(self, *args, **kwargs):
        for title, domain, cohort, desc in DATA:
            Project.objects.get_or_create(
                title=title,
                defaults={
                    "domain": domain,
                    "cohort": cohort,
                    "description": desc,
                    "problem": "Problème à préciser lors de la démonstration.",
                    "solution": desc,
                    "status": "published",
                    "progress_level": "prototype",
                    "team": "Équipe CIAT",
                },
            )
        self.stdout.write(self.style.SUCCESS("Projets de démonstration ajoutés."))
