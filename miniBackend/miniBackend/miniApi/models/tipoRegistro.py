from django.db import models

class TipoRegistro(models.Model):
    tipo = models.CharField(max_length=60)