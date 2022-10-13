from email.policy import default
from django.db import models
from .tipoCuenta import TipoCuenta

class Usuario(models.Model):
    nombre = models.CharField(max_length=60,unique = True)
    clave = models.TextField()
    icono = models.ImageField(blank='',default="",upload_to='img/')
    codigo = models.CharField(max_length=60)
    minimarket = models.ForeignKey("self",on_delete=models.CASCADE,blank = True, default = "")
    tipo = models.ForeignKey(TipoCuenta,on_delete=models.DO_NOTHING)