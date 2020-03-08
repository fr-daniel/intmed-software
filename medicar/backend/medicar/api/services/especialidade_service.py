from ..models import Especialidade

def listar_especialidades():
  especialidades = Especialidade.objects.all()
  return especialidades

def buscar_por_nome(search):
  especialidades = Especialidade.objects.filter(nome__icontains='car')
  return especialidades
