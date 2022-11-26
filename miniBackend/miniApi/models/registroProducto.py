from django.db import models
from .unidad import Unidad
from .registroFinanciero import RegistroFinanciero

class RegistroProducto(models.Model):
    cantidad = models.IntegerField()
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    unidad = models.ForeignKey(Unidad,on_delete=models.CASCADE)
    registroFinanciero = models.ForeignKey(RegistroFinanciero,on_delete=models.CASCADE)