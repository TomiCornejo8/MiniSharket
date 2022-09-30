from django.contrib import admin
from .models.categoria import Categoria
from .models.email import Email
from .models.producto import Producto
from .models.proveedor import Proveedor
from .models.registroFinanciero import RegistroFinanciero
from .models.registroProducto import RegistroProducto
from .models.telefono import Telefono
from .models.tipoRegistro import TipoRegistro
from .models.tipoCuenta import TipoCuenta
from .models.unidad import Unidad
from .models.usuario import Usuario

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Email)
admin.site.register(Proveedor)
admin.site.register(RegistroFinanciero)
admin.site.register(RegistroProducto)
admin.site.register(Telefono)
admin.site.register(Producto)
admin.site.register(TipoRegistro)
admin.site.register(TipoCuenta)
admin.site.register(Unidad)
admin.site.register(Usuario)