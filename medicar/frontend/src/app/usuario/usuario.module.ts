import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "../seguranca/auth.service";
import { UsuarioService } from "./usuario.service";

@NgModule({
  declarations: [CadastroComponent, LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [AuthService, UsuarioService],
  exports: [CadastroComponent, LoginComponent]
})
export class UsuarioModule {}
