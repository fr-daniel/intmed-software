import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "src/app/seguranca/auth.service";
import { LoginData } from "src/app/core/model";

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

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.auth
      .login(this.loginData.email, this.loginData.password)
      .subscribe(usuarioLogado => {
        console.log(usuarioLogado);
        this.router.navigate(["/"]);
      });
  }
}
