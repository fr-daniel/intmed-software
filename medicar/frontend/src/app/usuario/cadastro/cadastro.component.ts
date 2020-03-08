import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  usuario: object = {};

  constructor() {
    this.usuario = {
      nomee: "",
      email: "",
      password: "",
      confirm_password: ""
    };
  }

  ngOnInit(): void {}

  onSubmit() {}
}
