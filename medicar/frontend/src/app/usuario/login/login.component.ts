import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginData } from "src/app/core/model";
import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginData: LoginData = {
    email: "",
    password: ""
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.usuarioService
      .login(this.loginData.email, this.loginData.password)
      .subscribe(usuarioLogado => {
        this.router.navigate(["/"]);
      });
  }
}
