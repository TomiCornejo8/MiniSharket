from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from werkzeug.security import generate_password_hash, check_password_hash
from ..models.usuario import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    icono = Base64ImageField(required=False)
    class Meta:
        model =Usuario
        fields = '__all__'

class UsuarioCodigoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id']

@api_view(['POST'])
def usuario_api_view(request):

    if request.method == 'POST':
        request.data['clave'] = generate_password_hash(request.data['clave'],'sha256',30)
        usuario_serializer = UsuarioSerializer(data = request.data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return Response(usuario_serializer.data,status = status.HTTP_200_OK)
        return Response(usuario_serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','PUT','DELETE'])
def usuario_detail_api_view(request,nombre=None,clave=None):
    
    usuario = Usuario.objects.filter(nombre = nombre).first()

    if usuario:
        if(check_password_hash(usuario.clave,clave)):
            if request.method == 'GET':
                usuario_serializer = UsuarioSerializer(usuario)
                return Response(usuario_serializer.data,status = status.HTTP_200_OK)

            elif request.method == 'PUT':
                request.data['clave'] = generate_password_hash(request.data['clave'],'sha256',30)
                usuario_serializer = UsuarioSerializer(usuario,data = request.data)
                if usuario_serializer.is_valid():
                    usuario_serializer.save()
                    return Response(usuario_serializer.data,status = status.HTTP_200_OK)
                return Response(usuario_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

            elif request.method == 'DELETE':
                usuario.icono.delete(save=True)
                usuario.delete()
                return Response({'message':'Usuario deleted'},status = status.HTTP_200_OK)
        else:
            return Response({'message':'Usuario dont have accces'},status = status.HTTP_204_NO_CONTENT)

    return Response({'message':'Usuario not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def usuario_codigo_api_view(request,nombre=None,codigo=None):
    usuario = Usuario.objects.filter(nombre = nombre).first()
    if usuario:
        if request.method == 'GET':
            if usuario.codigo == codigo:
                usuario_serializer = UsuarioCodigoSerializer(usuario)
                return Response(usuario_serializer.data,status = status.HTTP_200_OK)
    return Response({'message':'This usuario doesnt exist'},status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def usuario_check_api_view(request,nombre=None):
    usuario = Usuario.objects.filter(nombre = nombre).first()
    if request.method == 'GET':
        if usuario:
            return Response({"existe":"true"},status = status.HTTP_200_OK)
        else:
            return Response({"existe":"false"},status = status.HTTP_200_OK)
    return Response({'message':'This usuario doesnt exist'},status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def usuario_vendedor_api_view(request,minimarket=None):
    usuario = Usuario.objects.filter(minimarket = minimarket).first()
    if request.method == 'GET':
        usuario_serializer = UsuarioSerializer(usuario)
        return Response(usuario_serializer.data,status = status.HTTP_200_OK)
    return Response({'message':'This usuario doesnt exist'},status = status.HTTP_400_BAD_REQUEST)