from django.db import models
from .tipoCuenta import TipoCuenta

class Usuario(models.Model):
    nombre = models.CharField(max_length=55)
    clave = models.CharField(max_length=55)
    icono = models.ImageField(blank='',default="",upload_to='img/')
    #minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE)
    tipo = models.ForeignKey(TipoCuenta,on_delete=models.CASCADE)