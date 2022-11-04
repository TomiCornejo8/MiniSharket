from django.db import models

class Img(models.Model):
    img = models.ImageField(upload_to='img/')