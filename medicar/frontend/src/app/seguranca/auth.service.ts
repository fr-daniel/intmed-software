import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "./../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UsuarioLogado } from "../core/model";

@Injectable()
export class AuthService {
  tokenUrl: string;

  constructor(private http: HttpClient) {
    this.tokenUrl = `${environment.apiUrl}/api-token-auth/`;
    this.carregarToken();
  }

  login(username: string, password: string): Observable<UsuarioLogado> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    const body = {
      username,
      password
    };

    console.log(body);

    return this.http.post<UsuarioLogado>(this.tokenUrl, body, httpOptions).pipe(
      map(user => {
        this.armazenarToken(user.token);
        return user;
      })
    );
  }

  limparAccessToken() {
    localStorage.removeItem("token");
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem("token");

    return !token;
  }

  private armazenarToken(token: string) {
    localStorage.setItem("token", token);
  }

  private carregarToken() {
    const token = localStorage.getItem("token");

    if (token) {
      this.armazenarToken(token);
    }
  }
}
