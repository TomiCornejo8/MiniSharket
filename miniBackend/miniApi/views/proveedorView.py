from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.proveedor import Proveedor

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proveedor
        fields = '__all__'

@api_view(['POST'])
def proveedor_api_view(request):
    if request.method == 'POST':
        proveedor_serializer = ProveedorSerializer(data = request.data)
        if proveedor_serializer.is_valid():
            proveedor_serializer.save()
            return Response(proveedor_serializer.data,status = status.HTTP_201_CREATED)
        return Response(proveedor_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def proveedor_detail_api_view(request,id=None):
    
    proveedor = Proveedor.objects.filter(id = id).first()

    if proveedor:
        if request.method == 'PUT':
            proveedor_serializer = ProveedorSerializer(proveedor,data = request.data)
            if proveedor_serializer.is_valid():
                proveedor_serializer.save()
                return Response(proveedor_serializer.data,status = status.HTTP_200_OK)
            return Response(proveedor_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            proveedor.delete()
            return Response({'message':'Proveedor deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'Proveedor not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def proveedor_minimarket_api_view(request,minimarket=None):
    
    proveedors = Proveedor.objects.filter(minimarket = minimarket).all()
    if proveedors:
        if request.method == 'GET':
            proveedor_serializer = ProveedorSerializer(proveedors,many = True)
            return Response(proveedor_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This minimarket dont have any Proveedor'},status = status.HTTP_400_BAD_REQUEST)