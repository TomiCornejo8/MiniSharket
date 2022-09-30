from django.db import models
from .usuario import Usuario

class Proveedor(models.Model):
    nombre = models.CharField(max_length=60)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)