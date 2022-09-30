from django.db import models
from .proveedor import Proveedor

class Telefono(models.Model):
    telefono = models.CharField(max_length=60)
    proveedor = models.ForeignKey(Proveedor,on_delete=models.CASCADE)