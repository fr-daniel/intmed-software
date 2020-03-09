import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Especialidade } from "../core/model";

@Injectable({
  providedIn: "root"
})
export class EspecialidadeService {
  especialidadesUrl: string;

  constructor(private http: HttpClient) {
    this.especialidadesUrl = `${environment.apiUrl}/especialidades/`;
  }

  listar(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(`${this.especialidadesUrl}`);
  }
}
