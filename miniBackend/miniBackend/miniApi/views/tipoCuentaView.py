from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.tipoCuenta import TipoCuenta

class TipoCuentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoCuenta
        fields = '__all__'

@api_view(['GET'])
def tipoCuenta_api_view(request):
    if request.method == 'GET':
        tipoCuenta = TipoCuenta.objects.all()
        tipoCuenta_serializer = TipoCuentaSerializer(tipoCuenta,many = True)
        return Response(tipoCuenta_serializer.data,status = status.HTTP_200_OK)

@api_view(['GET'])
def tipoCuenta_detail_api_view(request,id=None):
    
    tipoCuenta = TipoCuenta.objects.filter(id = id).first()

    if tipoCuenta:
        if request.method == 'GET':
            tipoCuenta_serializer = TipoCuentaSerializer(tipoCuenta)
            return Response(tipoCuenta_serializer.data,status = status.HTTP_200_OK)
    else:
        return Response({'message':'Tipo cuenta not found'},status = status.HTTP_204_NO_CONTENT)