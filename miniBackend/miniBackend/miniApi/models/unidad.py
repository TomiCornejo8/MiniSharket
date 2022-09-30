from django.db import models

class Unidad(models.Model):
    unidad = models.CharField(max_length=60)