from django.db import models
from django.core.exceptions import ValidationError
from datetime import date
from datetime import datetime
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager


# Create your models here.

class CustomUserManager(BaseUserManager):

    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(('Email é obrigatório.'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser deve ter is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser deve ter is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)


class Usuario(AbstractUser):
    username = None
    nome = models.CharField(max_length=100, null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nome']

    def __str__(self):
        return self.nome


class Especialidade(models.Model):
    nome = models.CharField(max_length=50, null=False, blank=False)

    class Meta:
        verbose_name = "Especialidade"
        verbose_name_plural = "Especialidades"

    def __str__(self):
        return self.nome


class Medico(models.Model):
    nome = models.CharField(max_length=100, null=False, blank=False)
    crm = models.IntegerField("CRM", null=False, blank=False)
    email = models.EmailField(null=False, blank=False)
    telefone = models.CharField(max_length=14)
    especialidade = models.ForeignKey("Especialidade", on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        verbose_name = "Médico"
        verbose_name_plural = "Médicos"

    def __str__(self):
        return self.nome


class Agenda(models.Model):
    medico = models.ForeignKey("Medico", on_delete=models.CASCADE)
    dia = models.DateField(null=False, blank=False)

    class Meta:
        verbose_name = "Agenda"
        verbose_name_plural = "Agendas"
        unique_together = ('medico', 'dia')

    def __init__(self, *args, **kwargs):
        super(Agenda, self).__init__(*args, **kwargs)
        self.__old_dia = self.dia

    def clean(self):
        if (not self.id or self.__old_dia != self.dia) and self.dia <= date.today():
            raise ValidationError('Não é possível cadastrar uma agenda para um dia que já passou.')

    def __str__(self):
        return self.medico.nome + " / " + self.dia.__str__()


class Horario(models.Model):
    agenda = models.ForeignKey(Agenda, on_delete=models.CASCADE, null=False, blank=False)
    hora = models.TimeField(null=False, blank=False)

    class Meta:
        verbose_name = "Horário"
        verbose_name_plural = "Horários"
        unique_together = (("agenda", "hora"),)

    def __str__(self):
        return self.hora.strftime("%H:%M")


class Consulta(models.Model):
    medico = models.ForeignKey("Medico", on_delete=models.PROTECT)
    dia = models.DateField(null=False, blank=False)
    horario = models.OneToOneField(Horario, on_delete=models.PROTECT)
    data_agendamento = models.DateTimeField(auto_now_add=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Consulta"
        verbose_name_plural = "Consultas"
        unique_together = ('medico', 'dia', "horario")

    def clean(self):
        if self.dia == datetime.today().date() and self.horario.hora < datetime.now().time():
            raise ValidationError('Não é possível cadastrar uma consulta para um horário que já passou.')
        if self.dia < datetime.today().date():
            raise ValidationError('Não é possível cadastrar uma consulta para um dia que já passou.')
