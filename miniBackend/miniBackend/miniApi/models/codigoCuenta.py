from django.db import models

class CodigoCuenta(models.Model):
    codigo = models.CharField(max_length=255)