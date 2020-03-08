from rest_framework import serializers
from ..models import Medico
from .especialidade_serializer import EspecialidadeSerializer

class MedicoSerializer(serializers.ModelSerializer):
  especialidade = EspecialidadeSerializer(many=False, required=False)

  class Meta:
    model = Medico
    fields = ["id", "crm", "nome", "especialidade"]