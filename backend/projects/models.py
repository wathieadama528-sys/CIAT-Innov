from django.db import models

class Project(models.Model):
    STATUS_CHOICES = [
        ("draft", "Brouillon"),
        ("pending", "En attente"),
        ("published", "Publié"),
    ]
    LEVEL_CHOICES = [
        ("idea", "Idée"),
        ("design", "Conception"),
        ("prototype", "Prototype"),
        ("test", "Test"),
        ("finished", "Finalisé"),
    ]

    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    problem = models.TextField(blank=True)
    solution = models.TextField(blank=True)
    domain = models.CharField(max_length=100)
    cohort = models.CharField(max_length=50, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="draft")
    progress_level = models.CharField(max_length=20, choices=LEVEL_CHOICES, default="idea")
    team = models.CharField(max_length=255, blank=True)
    image_url = models.URLField(blank=True)
    views = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Interest(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="interests")
    name = models.CharField(max_length=120)
    organization = models.CharField(max_length=150, blank=True)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
