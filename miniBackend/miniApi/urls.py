from django.urls import path
from .views.registroProductoView import registroProducto_api_view, registroProducto_detail_api_view, registroProducto_registroFinanciero_api_view
from .views.registroFinancieroView import registroFinanciero_api_view, registroFinanciero_detail_api_view, registroFinanciero_minimarket_api_view
from .views.emailView import email_api_view, email_detail_api_view, email_proveedor_api_view
from .views.telefonoView import telefono_api_view, telefono_detail_api_view, telefono_proveedor_api_view
from .views.proveedorView import proveedor_api_view, proveedor_detail_api_view, proveedor_minimarket_api_view
from .views.categoriaView import categoria_api_view, categoria_detail_api_view, categoria_minimarket_api_view
from .views.productoView import producto_api_view, producto_detail_api_view, producto_minimarket_api_view, producto_proveedor_api_view
from .views.usuarioView import usuario_api_view, usuario_check_api_view, usuario_codigo_api_view, usuario_detail_api_view, usuario_vendedor_api_view
from .views.unidadView import unidad_api_view, unidad_detail_api_view
from .views.tipoRegistroView import tipoRegistro_api_view, tipoRegistro_detail_api_view
from .views.tipoCuentaView import tipoCuenta_api_view, tipoCuenta_detail_api_view

urlpatterns = [
    path('usuario/',usuario_api_view),
    path('usuario/<str:nombre>/<str:clave>',usuario_detail_api_view),
    path('usuario/verificar/<str:nombre>/<str:codigo>',usuario_codigo_api_view),
    path('usuario/<str:nombre>',usuario_check_api_view),
    path('usuario/vendedores/XD/BD/<int:minimarket>',usuario_vendedor_api_view),

    path('tipocuenta/',tipoCuenta_api_view),
    path('tipocuenta/<int:id>',tipoCuenta_detail_api_view),

    path('producto/',producto_api_view),
    path('producto/<int:id>',producto_detail_api_view),
    path('producto/minimarket/<int:minimarket>',producto_minimarket_api_view),
    path('producto/proveedor/<int:proveedor>',producto_proveedor_api_view),

    path('unidad/',unidad_api_view),
    path('unidad/<int:id>',unidad_detail_api_view),

    path('categoria/',categoria_api_view),
    path('categoria/<int:id>',categoria_detail_api_view),
    path('categoria/minimarket/<int:minimarket>',categoria_minimarket_api_view),

    path('proveedor/',proveedor_api_view),
    path('proveedor/<int:id>',proveedor_detail_api_view),
    path('proveedor/minimarket/<int:minimarket>',proveedor_minimarket_api_view),

    path('email/',email_api_view),
    path('email/<int:id>',email_detail_api_view),
    path('email/proveedor/<int:proveedor>',email_proveedor_api_view),

    path('telefono/',telefono_api_view),
    path('telefono/<int:id>',telefono_detail_api_view),
    path('telefono/proveedor/<int:proveedor>',telefono_proveedor_api_view),

    path('registroFinanciero/',registroFinanciero_api_view),
    path('registroFinanciero/<int:id>',registroFinanciero_detail_api_view),
    path('registroFinanciero/minimarket/<int:minimarket>',registroFinanciero_minimarket_api_view),

    path('tiporegistro/',tipoRegistro_api_view),
    path('tiporegistro/<int:id>',tipoRegistro_detail_api_view),

    path('registroProducto/',registroProducto_api_view),
    path('registroProducto/<int:id>',registroProducto_detail_api_view),
    path('registroProducto/registroFinanciero/<int:registroFinanciero>',registroProducto_registroFinanciero_api_view),
]