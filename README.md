<h3 align="center">
  Desafio: Medicar
</h3>

<p align="center">Sistema para gestão de consultas em uma clínica médica</p>

## Descrição

As instruções a seguir apresentam como rodar o projeto em sua máquina.

### Pré-requisitos

É preciso ter o Python e o NodeJs e NPM instalados.

Clone o repositório:

```sh
git clone https://github.com/fr-daniel/intmed-software.git && cd intmed-software/medicar
```

### Inicialização Backend

Para iniciar o backend excute os seguintes comandos:

```sh
cd backend/

virtualenv venv

source venv/bin/activate

cd medicar

pip install -r requirements.txt 

python manage.py makemigrations

python manage.py migrate

```

Caso queira criar um usuário administrador, execute:

```sh
python manage.py createsuperuser
```

Para rodar o sistema, execute:

```
python manage.py runserver
```

### Inicialização Frontend

Para iniciar o frontend excute os seguintes comandos:

```sh
cd fronted/

npm install

npm install -g @angular/cli

ng serve --open
```
