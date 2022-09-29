from django.db import models
from .usuario import Usuario

class RegistroFinanciero(models.Model):
    fecha = models.DateField()
    tipo = models.CharField(max_length=100)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)