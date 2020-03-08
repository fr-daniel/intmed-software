from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from ..serializers import usuario_serializer


class UsuarioList(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = usuario_serializer.UsuarioCadastroSerializer(data=request.data)
        if serializer.is_valid():
            model_serializer = usuario_serializer.UsuarioSerializer(data=serializer.data)
            model_serializer.is_valid(raise_exception=True)
            model_serializer.save()
            return Response(model_serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
1