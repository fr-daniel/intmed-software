from datetime import datetime

from ..models import Agenda, Consulta


def listar_agendas(medicos=None, especialidades=None, data_inicio=None, data_final=None):
    agendas = Agenda.objects.filter(dia__gte=datetime.today().date())

    for agenda in agendas:
        consultas_agendadas = Consulta.objects.filter(dia__exact=agenda.dia, medico=agenda.medico)
        horarios_agendados = [consulta.horario.hora for consulta in consultas_agendadas]
        agenda.horario_set.set(agenda.horario_set.exclude(hora__in=horarios_agendados))

    if medicos:
        agendas = agendas.filter(medico__in=medicos)
    if especialidades:
        agendas = agendas.filter(medico__especialidade__in=especialidades)
    if data_inicio is not None:
        agendas = agendas.filter(dia__gte=data_inicio)
    if data_final is not None:
        agendas = agendas.filter(dia__lte=data_final)
    return agendas
