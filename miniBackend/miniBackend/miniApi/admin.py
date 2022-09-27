from django.contrib import admin
from .models.categoria import Categoria
from .models.codigoCuenta import CodigoCuenta
from .models.producto import Producto
from .models.tipoCuenta import TipoCuenta
from .models.unidad import Unidad
from .models.usuario import Usuario

# Register your models here.
admin.site.register(Categoria)
admin.site.register(CodigoCuenta)
admin.site.register(Producto)
admin.site.register(TipoCuenta)
admin.site.register(Unidad)
admin.site.register(Usuario)