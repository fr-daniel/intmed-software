from ..models import Medico


def listar_medicos():
    medicos = Medico.objects.all()
    return medicos
