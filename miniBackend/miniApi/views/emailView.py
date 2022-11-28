from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import serializers
from ..models.email import Email

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Email
        fields = '__all__'

@api_view(['POST'])
def email_api_view(request):
    if request.method == 'POST':
        email_serializer = EmailSerializer(data = request.data)
        if email_serializer.is_valid():
            email_serializer.save()
            return Response(email_serializer.data,status = status.HTTP_200_OK)
        return Response(email_serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def email_detail_api_view(request,id=None):
    
    email = Email.objects.filter(id = id).first()

    if email:
        if request.method == 'DELETE':
            email.delete()
            return Response({'message':'Email deleted'},status = status.HTTP_200_OK)
    
    else:
        return Response({'message':'Email not found'},status = status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def email_proveedor_api_view(request,proveedor=None):
    
    emails = Email.objects.filter(proveedor = proveedor).all()
    if emails:
        if request.method == 'GET':
            email_serializer = EmailSerializer(emails,many = True)
            return Response(email_serializer.data,status = status.HTTP_200_OK)
    
    return Response({'id':'0'},status = status.HTTP_200_OK)