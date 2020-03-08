import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "../seguranca/auth.service";

@NgModule({
  declarations: [CadastroComponent, LoginComponent],
  imports: [CommonModule, FormsModule],
  providers: [AuthService],
  exports: [CadastroComponent, LoginComponent]
})
export class UsuarioModule {}
