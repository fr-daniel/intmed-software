from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.http import Http404
from rest_framework.exceptions import bad_request
from django.db import IntegrityError
from datetime import datetime
from ..models import Consulta, Agenda

def listar_consultas(user):
  dataHoje = datetime.today().date()
  horaAgora = datetime.now().time()
  consultas = Consulta.objects.filter(usuario=user, dia__gte=dataHoje, horario__hora__gte=horaAgora)
  return consultas

def cadastrar_consulta(agendamento, user):
  try:
    agenda = Agenda.objects.get(id__exact=agendamento['agenda_id'])
    horarios = agenda.horario_set.all()
    horario = horarios.get(hora__exact=agendamento['horario'])
    consulta_bd = Consulta.objects.create(medico=agenda.medico, dia=agenda.dia, horario=horario, usuario=user)
  except ObjectDoesNotExist:
    raise ValidationError('Agenda ou horário não encontrado.')
  except IntegrityError:
    raise ValidationError('Horário não disponível.')

  return consulta_bd

def listar_consulta_id(id):
  try:
    return  Consulta.objects.get(id=id)
  except Consulta.DoesNotExist:
    raise Http404

def deletar_consulta(id, user):
    try:
      consulta = Consulta.objects.get(id=id, usuario=user, dia__gte=datetime.today().date())
      if consulta.dia == datetime.today().date() and consulta.horario.hora < datetime.now().time():
        raise Consulta.DoesNotExist
      consulta.delete()
    except Consulta.DoesNotExist:
      raise Http404