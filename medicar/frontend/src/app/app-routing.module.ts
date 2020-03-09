import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./usuario/login/login.component";
import { ConsultaListComponent } from "./consulta/consulta-list/consulta-list.component";
import { AuthGuard } from "./seguranca/auth.guard";
import { CadastroComponent } from "./usuario/cadastro/cadastro.component";
import { ConsultaFormComponent } from "./consulta/consulta-form/consulta-form.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  {
    path: "consultas",
    component: ConsultaListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "add-consulta",
    component: ConsultaFormComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "consultas", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
