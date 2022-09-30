from django.db import models
from .tipoCuenta import TipoCuenta
from .usuario import Usuario

class Usuario(models.Model):
    nombre = models.CharField(max_length=60)
    clave = models.CharField(max_length=60)
    icono = models.ImageField(blank='',default="",upload_to='img/')
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    tipo = models.ForeignKey(TipoCuenta)