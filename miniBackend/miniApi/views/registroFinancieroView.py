from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.registroFinanciero import RegistroFinanciero

class RegistroFinancieroSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistroFinanciero
        fields = '__all__'

@api_view(['POST'])
def registroFinanciero_api_view(request):
    if request.method == 'POST':
        registroFinanciero_serializer = RegistroFinancieroSerializer(data = request.data, partial=True)
        if registroFinanciero_serializer.is_valid():
            registroFinanciero_serializer.save()
            return Response(registroFinanciero_serializer.data,status = status.HTTP_200_OK)
        return Response(registroFinanciero_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['PUT','DELETE'])
def registroFinanciero_detail_api_view(request,id=None):
    
    registroFinanciero = RegistroFinanciero.objects.filter(id = id).first()

    if registroFinanciero:
        if request.method == 'PUT':
            registroFinanciero_serializer = RegistroFinancieroSerializer(registroFinanciero,data = request.data)
            if registroFinanciero_serializer.is_valid():
                registroFinanciero_serializer.save()
                return Response(registroFinanciero_serializer.data,status = status.HTTP_200_OK)
            return Response(registroFinanciero_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

        elif request.method == 'DELETE':
            registroFinanciero.delete()
            return Response({'message':'RegistroFinanciero deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'RegistroFinanciero not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def registroFinanciero_minimarket_api_view(request,minimarket=None):
    
    registroFinancieros = RegistroFinanciero.objects.filter(minimarket = minimarket).all()
    if registroFinancieros:
        if request.method == 'GET':
            registroFinanciero_serializer = RegistroFinancieroSerializer(registroFinancieros,many = True)
            return Response(registroFinanciero_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'message':'This minimarket dont have any RegistroFinanciero'},status = status.HTTP_400_BAD_REQUEST)