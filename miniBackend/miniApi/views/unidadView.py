from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.unidad import Unidad

class UnidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Unidad
        fields = '__all__'

@api_view(['GET','POST'])
def unidad_api_view(request):
    if request.method == 'GET':
        unidad = Unidad.objects.all()
        unidad_serializer = UnidadSerializer(unidad,many = True)
        return Response(unidad_serializer.data,status = status.HTTP_200_OK)
    
    elif request.method == 'POST':
        unidad_serializer = UnidadSerializer(data = request.data)
        if unidad_serializer.is_valid():
            unidad_serializer.save()
            return Response(unidad_serializer.data,status = status.HTTP_201_CREATED)
        return Response(unidad_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def unidad_detail_api_view(request,id=None):
    
    unidad = Unidad.objects.filter(id = id).first()

    if unidad:
        if request.method == 'GET':
            unidad_serializer = UnidadSerializer(unidad)
            return Response(unidad_serializer.data,status = status.HTTP_200_OK)
        
        elif request.method == 'PUT':
            unidad_serializer = UnidadSerializer(unidad,data = request.data)
            if unidad_serializer.is_valid():
                unidad_serializer.save()
                return Response(unidad_serializer.data,status = status.HTTP_200_OK)
            return Response(unidad_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            unidad.delete()
            return Response({'message':'Unidad deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'Unidad not found'},status = status.HTTP_204_NO_CONTENT)