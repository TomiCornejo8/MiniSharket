from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.telefono import Telefono

class TelefonoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Telefono
        fields = '__all__'

@api_view(['POST'])
def telefono_api_view(request):
    if request.method == 'POST':
        telefono_serializer = TelefonoSerializer(data = request.data)
        if telefono_serializer.is_valid():
            telefono_serializer.save()
            return Response(telefono_serializer.data,status = status.HTTP_201_CREATED)
        return Response(telefono_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def telefono_detail_api_view(request,id=None):
    
    telefono = Telefono.objects.filter(id = id).first()

    if telefono:
        if request.method == 'DELETE':
            telefono.delete()
            return Response({'message':'Telefono deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'Telefono not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def telefono_proveedor_api_view(request,proveedor=None):
    
    telefonos = Telefono.objects.filter(proveedor = proveedor).all()
    if telefonos:
        if request.method == 'GET':
            telefono_serializer = TelefonoSerializer(telefonos,many = True)
            return Response(telefono_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This proveedor dont have any Telefono'},status = status.HTTP_400_BAD_REQUEST)