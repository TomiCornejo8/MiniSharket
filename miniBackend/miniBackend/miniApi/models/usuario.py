from django.db import models
from .tipoCuenta import TipoCuenta
from .codigoCuenta import CodigoCuenta

class Usuario(models.Model):
    nombre = models.CharField(max_length=55)
    clave = models.CharField(max_length=55)
    icono = models.ImageField(blank='',default="",upload_to='img/')
    codigo = models.ForeignKey(CodigoCuenta,on_delete=models.CASCADE)
    tipo = models.ForeignKey(TipoCuenta,on_delete=models.CASCADE)