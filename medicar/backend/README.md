# Backend


## Development server

Run `python manage.py runserver` for a dev server. Navigate to `http://localhost:8000/`.

## API

### Autenticação

Com exceção dos endpoints de login e cadastro de usuário, todos os endpoints da API devem ser protegidos por autenticação e necessitam receber token via cabeçalho HTTP `Authorization`. Veja um exemplo de requisição:

```
GET /api/especialidades/
Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
```

### Cadastro
Cadastrar um usuário no sistema

#### Requisição
```
GET /api/usuarios/
{
    "nome": "Nome Usuário",
	"email": "email@mail.com",
	"password": "123456",
	"confirm_password": "123456"
}	
```

#### Resposta
```json
{
    "id": 5,
    "email": "email@mail.com",
    "nome": "Nome Usuário",
    "password": "pbkdf2_sha256$180000$ddd$clnfMxSDs7omMngUZbMdiwiuHSSQASOqHTBNdFthDqUVU="
}
```

### Login
Obter um token de usuário no sistema

#### Requisição
```
GET /api/api-token-auth/
{
	"username": "email@mail.com",
	"password": "123456"
}
```

#### Resposta
```json
{
    "token": "f962q1d1w82748a6daac9890c552db1db51580b3c14",
    "id": 5,
    "email": "email@mail.com",
    "nome": "Nome Usuário"
}
```
