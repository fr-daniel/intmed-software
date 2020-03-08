from rest_framework import filters
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError

from ..serializers import consulta_serializer
from ..services import consulta_service


class ConsultaList(generics.ListAPIView):
    serializer_class = consulta_serializer.ConsultaSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ['-dia', '-horario']

    def get_queryset(self):
        user = self.request.user
        return consulta_service.listar_consultas(user)

    def post(self, request):
        serializer = consulta_serializer.CosultaNovaSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            try:
                consulta_salva = consulta_service.cadastrar_consulta(serializer.data, user)
                serializer = consulta_serializer.ConsultaSerializer(consulta_salva)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            except ValidationError as e:
                return Response(e.messages, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        consulta_service.deletar_consulta(id, request.user)
        return Response(status=status.HTTP_204_NO_CONTENT)
