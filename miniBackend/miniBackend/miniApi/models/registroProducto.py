from django.db import models
from .registroFinanciero import RegistroFinanciero

class RegistroFinanciero(models.Model):
    cantidad = models.IntegerField()
    nombre = models.CharField(max_length=100)
    precio = models.IntegerField()
    registroFinanciero = models.ForeignKey(RegistroFinanciero,on_delete=models.CASCADE)