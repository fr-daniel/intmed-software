import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { EspecialidadeService } from "src/app/shared/especialidade.service";
import { Especialidade, Medico } from "src/app/core/model";
import { MedicoService } from "src/app/shared/medico.service";

@Component({
  selector: "app-consulta-form",
  templateUrl: "./consulta-form.component.html",
  styleUrls: ["./consulta-form.component.css"]
})
export class ConsultaFormComponent implements OnInit {
  novaConsultaForm = this.fb.group({
    especialidadeName: [""],
    medicoName: [""]
  });

  especialidades: Especialidade[];
  medicos: Medico[];

  constructor(
    public fb: FormBuilder,
    private especialidadeService: EspecialidadeService,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    this.especialidadeService
      .listar()
      .subscribe(especialidades => (this.especialidades = especialidades));
  }

  onSubmit() {}

  changeEspecialidade(e) {
    this.medicoService.listar().subscribe(medicos => (this.medicos = medicos));
  }
}
