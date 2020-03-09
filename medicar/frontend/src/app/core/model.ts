export class UsuarioLogado {
  id: number;
  email: string;
  nome: string;
  token: string;
}

export class LoginData {
  email: string;
  password: string;
}

export class Especialidade {
  id: number;
  nome: string;
}

export class Medico {
  id: number;
  crm: number;
  nome: string;
  especialidade: Especialidade;
}
