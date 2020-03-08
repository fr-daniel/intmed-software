from rest_framework import filters
from rest_framework import generics
from ..serializers import medico_serializer
from ..models import Medico


class MedicoList(generics.ListAPIView):
    queryset = Medico.objects.all()
    serializer_class = medico_serializer.MedicoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome']

    def get_queryset(self):
        especialidades = self.request.query_params.getlist('especialidade')
        if especialidades:
            queryset = Medico.objects.filter(especialidade__in=especialidades)
        else:
            queryset = Medico.objects.all()
        return queryset
