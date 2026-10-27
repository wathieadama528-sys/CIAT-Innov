from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Project, Interest
from .serializers import ProjectSerializer, InterestSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by("-created_at")
    serializer_class = ProjectSerializer

class InterestViewSet(viewsets.ModelViewSet):
    queryset = Interest.objects.all().order_by("-created_at")
    serializer_class = InterestSerializer

@api_view(["POST"])
def generate_promo(request):
    title = request.data.get("title", "Ce projet")
    domain = request.data.get("domain", "innovation")
    problem = request.data.get("problem", "")
    solution = request.data.get("solution", "")
    text = (
        f"{title} est une innovation dans le domaine {domain}. "
        f"Le projet répond au problème suivant : {problem or 'un besoin identifié par les porteurs de projet'}. "
        f"La solution proposée est : {solution or 'une approche innovante à développer et valider'}. "
        "Cette présentation est une proposition générée automatiquement et doit être vérifiée avant publication."
    )
    return Response({"text": text})
