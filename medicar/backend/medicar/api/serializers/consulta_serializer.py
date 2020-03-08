from rest_framework import serializers
from .medico_serializer import MedicoSerializer
from ..models import Consulta


class CosultaNovaSerializer(serializers.Serializer):
    agenda_id = serializers.IntegerField()
    horario = serializers.TimeField()


class ConsultaSerializer(serializers.ModelSerializer):
    horario = serializers.StringRelatedField(many=False)
    medico = MedicoSerializer(many=False, required=True)

    class Meta:
        model = Consulta
        fields = ["id", "dia", "horario", "data_agendamento", "medico"]
