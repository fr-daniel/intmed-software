from rest_framework import filters
from rest_framework import generics
from ..serializers import agenda_serializer
from ..services import agenda_service


class AgendaList(generics.ListAPIView):
    serializer_class = agenda_serializer.AgendaSerializer
    filter_backends = [filters.OrderingFilter]
    ordering = ['dia']

    def get_queryset(self):
        especialidades = self.request.query_params.getlist('especialidade')
        medicos = self.request.query_params.getlist('medico')
        data_inicio = self.request.query_params.get("data_inicio", None)
        data_final = self.request.query_params.get("data_final", None)

        return agenda_service.listar_agendas(medicos, especialidades, data_inicio, data_final)
