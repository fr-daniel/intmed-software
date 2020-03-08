from django.urls import path
from .views import especialidade_view, medico_view, agenda_view, consulta_view, usuario_view, customauthtoken_view

urlpatterns = [
    path('especialidades/',  especialidade_view.EspecialidadeList.as_view(), name="especialidade_list"),
    path('medicos/', medico_view.MedicoList.as_view(), name="medico_list"),
    path('agendas/', agenda_view.AgendaList.as_view(), name="agenda_list"),
    path('consultas/', consulta_view.ConsultaList.as_view(), name="consulta-list"),
    path('consultas/<int:id>', consulta_view.ConsultaList.as_view(), name="consulta_detalhes"),
    path('usuarios/', usuario_view.UsuarioList.as_view(), name="usuario_list"),
    path('api-token-auth/', customauthtoken_view.CustomAuthToken.as_view(), name="api_token_auth"),
]
