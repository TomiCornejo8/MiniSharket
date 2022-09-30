from django.db import models
from .proveedor import Proveedor

class Email(models.Model):
    email = models.EmailField(max_length = 254)
    proveedor = models.ForeignKey(Proveedor,on_delete=models.CASCADE)