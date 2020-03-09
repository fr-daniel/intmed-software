import { Component, OnInit } from "@angular/core";
import { ConsultaService } from "../consulta.service";
import { UsuarioService } from "src/app/usuario/usuario.service";

@Component({
  selector: "app-consulta-list",
  templateUrl: "./consulta-list.component.html",
  styleUrls: ["./consulta-list.component.css"]
})
export class ConsultaListComponent implements OnInit {
  consultas: any[] = [];
  nome: string = "Usuário";

  constructor(
    private consultaService: ConsultaService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getConsultas();
    this.nome = this.usuarioService.nome;
  }

  getConsultas() {
    this.consultaService
      .listar()
      .subscribe(consultas => (this.consultas = consultas));
  }

  desmarcar(consulta) {
    this.consultaService
      .deletar(consulta.id)
      .subscribe(
        data =>
          (this.consultas = this.consultas.filter(c => c.id != consulta.id))
      );
  }

  logout() {
    this.usuarioService.logout();
  }
}
