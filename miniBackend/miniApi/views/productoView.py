from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from ..models.producto import Producto

class ProductoSerializer(serializers.ModelSerializer):
    img = Base64ImageField(required=False)
    class Meta:
        model =Producto
        fields = '__all__'
    
@api_view(['POST'])
def producto_api_view(request):
    
    if request.method == 'POST':
        producto_serializer = ProductoSerializer(data = request.data)
        if producto_serializer.is_valid():
            producto_serializer.save()
            return Response(producto_serializer.data,status = status.HTTP_201_CREATED)
        return Response(producto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT','DELETE'])
def producto_detail_api_view(request,id=None):
    
    producto = Producto.objects.filter(id = id).first()
    if producto:
        if request.method == 'PUT':
            producto_serializer = ProductoSerializer(producto,data = request.data)
            if producto_serializer.is_valid():
                producto_serializer.save()
                return Response(producto_serializer.data,status = status.HTTP_200_OK)
            return Response(producto_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            producto.img.delete(save=True)
            producto.delete()
            return Response({'message':'Producto deleted'},status = status.HTTP_200_OK)
    
    return Response({'message':'Producto not found'},status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def producto_minimarket_api_view(request,minimarket=None):
    
    productos = Producto.objects.filter(minimarket = minimarket).all()
    if productos:
        if request.method == 'GET':
            producto_serializer = ProductoSerializer(productos,many = True)
            return Response(producto_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This minimarket dont have any Producto'},status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def producto_proveedor_api_view(request,proveedor=None):
    
    productos = Producto.objects.filter(proveedor = proveedor).all()
    if productos:
        if request.method == 'GET':
            producto_serializer = ProductoSerializer(productos,many = True)
            return Response(producto_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This proveedor dont have any Producto'},status = status.HTTP_400_BAD_REQUEST)



