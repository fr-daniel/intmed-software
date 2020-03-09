import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ConsultaListComponent } from "./consulta-list/consulta-list.component";
import { ConsultaFormComponent } from "./consulta-form/consulta-form.component";
import { ConsultaService } from "./consulta.service";
import { UsuarioService } from "../usuario/usuario.service";

@NgModule({
  declarations: [ConsultaListComponent, ConsultaFormComponent],
  imports: [CommonModule, RouterModule],
  providers: [ConsultaService, UsuarioService],
  exports: [ConsultaListComponent]
})
export class ConsultaModule {}
