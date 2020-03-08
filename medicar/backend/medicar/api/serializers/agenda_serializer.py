from rest_framework import serializers
from ..models import Agenda
from .medico_serializer import MedicoSerializer


class AgendaSerializer(serializers.ModelSerializer):
    medico = MedicoSerializer(many=False, required=True)
    horarios = serializers.ListSerializer(source='horario_set', child=serializers.CharField())

    class Meta:
        model = Agenda
        fields = ('id', "medico", "dia", "horarios",)
