from django.db import models

class TipoCuenta(models.Model):
    tipo = models.CharField(max_length=60)