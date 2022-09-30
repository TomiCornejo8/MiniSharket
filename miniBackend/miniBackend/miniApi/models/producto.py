from django.db import models

from miniBackend.miniApi.models.categoria import Categoria
from .unidad import Unidad
from .usuario import Usuario

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    stock = models.FloatField()
    precio = models.PositiveIntegerField()
    nVentas = models.PositiveBigIntegerField()
    img = models.ImageField(blank='',default="",upload_to='img/')
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    unidad = models.ForeignKey(Unidad)
    categorias = models.ManyToManyField(Categoria)

