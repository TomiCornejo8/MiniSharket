from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.registroProducto import RegistroProducto

class RegistroProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroProducto
        fields = '__all__'

@api_view(['POST'])
def registroProducto_api_view(request):
    if request.method == 'POST':
        registroProducto_serializer = RegistroProductoSerializer(data = request.data)
        if registroProducto_serializer.is_valid():
            registroProducto_serializer.save()
            return Response(registroProducto_serializer.data,status = status.HTTP_201_CREATED)
        return Response(registroProducto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def registroProducto_detail_api_view(request,id=None):
    
    registroProducto = RegistroProducto.objects.filter(id = id).first()

    if registroProducto:
        if request.method == 'PUT':
            registroProducto_serializer = RegistroProductoSerializer(registroProducto,data = request.data, partial=True)
            if registroProducto_serializer.is_valid():
                registroProducto_serializer.save()
                return Response(registroProducto_serializer.data,status = status.HTTP_200_OK)
            return Response(registroProducto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            registroProducto.delete()
            return Response({'message':'RegistroProducto deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'RegistroProducto not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def registroProducto_registroFinanciero_api_view(request,registroFinanciero=None):
    
    registroProductos = RegistroProducto.objects.filter(registroFinanciero = registroFinanciero).all()
    if registroProductos:
        if request.method == 'GET':
            registroProducto_serializer = RegistroProductoSerializer(registroProductos,many = True)
            return Response(registroProducto_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This registroFinanciero dont have any RegistroProducto'},status = status.HTTP_400_BAD_REQUEST)