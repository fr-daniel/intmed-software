import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor() {
    this.carregarToken();
  }

  public limparToken() {
    localStorage.removeItem("token");
  }

  public isTokenInvalido() {
    const token = localStorage.getItem("token");

    return !token;
  }

  public armazenarToken(token: string) {
    localStorage.setItem("token", token);
  }

  private carregarToken() {
    const token = localStorage.getItem("token");

    if (token) {
      this.armazenarToken(token);
    }
  }

  public get token() {
    return localStorage.getItem("token");
  }
}
