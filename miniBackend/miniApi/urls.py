from django.urls import path
from .views.tipoRegistroView import tipoRegistro_api_view, tipoRegistro_detail_api_view
from .views.tipoCuentaView import tipoCuenta_api_view, tipoCuenta_detail_api_view

urlpatterns = [
    path('tipocuenta/',tipoCuenta_api_view),
    path('tipocuenta/<int:id>',tipoCuenta_detail_api_view),
    path('tiporegistro/',tipoRegistro_api_view),
    path('tiporegistro/<int:id>',tipoRegistro_detail_api_view),
]