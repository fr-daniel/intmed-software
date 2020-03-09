import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ConsultaListComponent } from "./consulta-list/consulta-list.component";
import { ConsultaFormComponent } from "./consulta-form/consulta-form.component";
import { ConsultaService } from "./consulta.service";
import { UsuarioService } from "../usuario/usuario.service";
import { ReactiveFormsModule } from "@angular/forms";
import { EspecialidadeService } from "../shared/especialidade.service";
import { MedicoService } from "../shared/medico.service";

@NgModule({
  declarations: [ConsultaListComponent, ConsultaFormComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, RouterModule],
  providers: [
    ConsultaService,
    UsuarioService,
    EspecialidadeService,
    MedicoService
  ],
  exports: [ConsultaListComponent, ConsultaFormComponent]
})
export class ConsultaModule {}
