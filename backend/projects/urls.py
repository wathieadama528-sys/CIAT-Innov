from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, InterestViewSet, generate_promo

router = DefaultRouter()
router.register("projects", ProjectViewSet)
router.register("interests", InterestViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("generate-promo/", generate_promo),
]
