import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsuarioLogado } from "../core/model";
import { AuthService } from "../seguranca/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class UsuarioService {
  usuarioLogado: UsuarioLogado;
  tokenUrl: string;
  cadastroUrl: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.tokenUrl = `${environment.apiUrl}/api-token-auth/`;
    this.cadastroUrl = `${environment.apiUrl}/usuarios/`;
    this.carregarDadosUsuario();
  }

  login(username: string, password: string): Observable<UsuarioLogado> {
    const body = {
      username,
      password
    };

    return this.http.post<UsuarioLogado>(this.tokenUrl, body).pipe(
      map(user => {
        this.authService.armazenarToken(user.token);
        this.armazenarUsuarioLogado(user);
        this.usuarioLogado = user;
        return user;
      })
    );
  }

  cadastro(userData): Observable<any> {
    return this.http.post<any>(this.cadastroUrl, userData);
  }

  private carregarDadosUsuario() {
    this.usuarioLogado = JSON.parse(localStorage.getItem("dadosUser"));
  }

  private armazenarUsuarioLogado(user) {
    localStorage.setItem("dadosUser", JSON.stringify(user));
  }

  public get nome() {
    return this.usuarioLogado.nome;
  }

  public get email() {
    return this.usuarioLogado.email;
  }

  public logout() {
    this.authService.limparToken();
    localStorage.removeItem("dadosUser");
    this.router.navigate(["/login"]);
  }
}
