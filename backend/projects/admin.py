from django.contrib import admin
from .models import Project, Interest

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "domain", "cohort", "status", "progress_level", "views")
    list_filter = ("domain", "status", "progress_level")
    search_fields = ("title", "description", "problem", "solution")

@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    list_display = ("name", "organization", "project", "email", "created_at")
