from ..serializers import especialidade_serializer
from rest_framework import filters
from rest_framework import generics

from ..models import Especialidade


class EspecialidadeList(generics.ListAPIView):
    queryset = Especialidade.objects.all()
    serializer_class = especialidade_serializer.EspecialidadeSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome']
