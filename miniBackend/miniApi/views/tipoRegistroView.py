from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.tipoRegistro import TipoRegistro

class TipoRegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoRegistro
        fields = '__all__'

@api_view(['GET'])
def tipoRegistro_api_view(request):
    if request.method == 'GET':
        tipoRegistro = TipoRegistro.objects.all()
        tipoRegistro_serializer = TipoRegistroSerializer(tipoRegistro,many = True)
        return Response(tipoRegistro_serializer.data,status = status.HTTP_200_OK)

@api_view(['GET'])
def tipoRegistro_detail_api_view(request,id=None):
    
    tipoRegistro = TipoRegistro.objects.filter(id = id).first()

    if tipoRegistro:
        if request.method == 'GET':
            tipoRegistro_serializer = TipoRegistroSerializer(tipoRegistro)
            return Response(tipoRegistro_serializer.data,status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'TipoRegistro not found'},status = status.HTTP_204_NO_CONTENT)