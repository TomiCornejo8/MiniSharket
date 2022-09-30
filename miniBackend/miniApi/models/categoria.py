from django.db import models
from .usuario import Usuario

class Categoria(models.Model):
    categoria = models.CharField(max_length=60)
    minimarket = models.ForeignKey(Usuario,on_delete=models.CASCADE,null=True)
