<h3 align="center">
  Desafio: Medicar
</h3>

<p align="center">Sistema para gestão de consultas em uma clínica médica</p>

## Descrição

As instruções a seguir apresentam como rodar o projeto em sua máquina.

### Pré-requisitos

É preciso ter o Python e o NodeJs e NPM instalados.

### Inicialização

Clone o repositório:

```sh
git clone https://github.com/fr-daniel/intmed-software.git && cd intmed-software/medicar
```

Para iniciar o backend excute os seguintes comndos:

```sh
cd backend/

source venv/bin/activate

python /medicar/manage.py makemigrations

python /medicar/manage.py migrate

```

Caso queira criar um usuário administrador, execute:

```sh
python /medicar/manage.py createsuperuser
```

Para rodar o sistema, execute:

```
python /medicar/manage.py runserver
```
