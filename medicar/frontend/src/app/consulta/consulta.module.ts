import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaListComponent } from './consulta-list/consulta-list.component';
import { ConsultaFormComponent } from './consulta-form/consulta-form.component';



@NgModule({
  declarations: [ConsultaListComponent, ConsultaFormComponent],
  imports: [
    CommonModule
  ]
})
export class ConsultaModule { }
