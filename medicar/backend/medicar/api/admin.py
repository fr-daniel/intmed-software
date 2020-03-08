from django.contrib import admin
from .models import *


class HorarioInline(admin.TabularInline):
    model = Horario


class AgendaAdmin(admin.ModelAdmin):
    inlines = (HorarioInline,)


# Register your models here.
admin.site.register(Especialidade)
admin.site.register(Medico)
admin.site.register(Agenda, AgendaAdmin)
