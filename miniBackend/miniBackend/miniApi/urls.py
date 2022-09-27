from django.urls import path

from miniBackend.miniApi.views.tipoCuentaView import tipoCuenta_api_view, tipoCuenta_detail_api_view

urlpatterns = [
    path('tipocuenta/',tipoCuenta_api_view),
    path('gasto/<int:id>',tipoCuenta_detail_api_view),

    
]