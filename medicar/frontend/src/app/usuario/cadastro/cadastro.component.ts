import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UsuarioService } from "../usuario.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  cadastroData = {
    nome: "",
    email: "",
    password: "",
    confirm_password: ""
  };

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.usuarioService.cadastro(this.cadastroData).subscribe(data => {
      this.router.navigate(["login"]);
    });
  }
}
