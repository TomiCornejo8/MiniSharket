from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.categoria import Categoria

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

@api_view(['POST'])
def categoria_api_view(request):
    if request.method == 'POST':
        categoria_serializer = CategoriaSerializer(data = request.data)
        if categoria_serializer.is_valid():
            categoria_serializer.save()
            return Response(categoria_serializer.data,status = status.HTTP_200_OK)
        return Response(categoria_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def categoria_detail_api_view(request,id=None):
    
    categoria = Categoria.objects.filter(id = id).first()

    if categoria:
        if request.method == 'PUT':
            categoria_serializer = CategoriaSerializer(categoria,data = request.data)
            if categoria_serializer.is_valid():
                categoria_serializer.save()
                return Response(categoria_serializer.data,status = status.HTTP_200_OK)
            return Response(categoria_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            categoria.delete()
            return Response({'message':'Categoria deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'Categoria not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def categoria_minimarket_api_view(request,minimarket=None):
    
    categorias = Categoria.objects.filter(minimarket = minimarket).all()
    if categorias:
        if request.method == 'GET':
            categoria_serializer = CategoriaSerializer(categorias,many = True)
            return Response(categoria_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This minimarket dont have any Categoria'},status = status.HTTP_400_BAD_REQUEST)