# Generated by Django 4.0.5 on 2022-10-21 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('miniApi', '0002_alter_usuario_nombre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='categorias',
            field=models.ManyToManyField(null=True, to='miniApi.categoria'),
        ),
    ]