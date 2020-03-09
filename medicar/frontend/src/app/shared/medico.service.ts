import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Medico, Especialidade } from "../core/model";

@Injectable({
  providedIn: "root"
})
export class MedicoService {
  medicosUrl: string;

  constructor(private http: HttpClient) {
    this.medicosUrl = `${environment.apiUrl}/medicos/`;
  }

  listar(especialidade: Especialidade): Observable<Medico[]> {
    const options = especialidade
      ? {
          params: new HttpParams().set(
            "especialidade",
            especialidade.id.toString()
          )
        }
      : {};

    return this.http.get<Medico[]>(`${this.medicosUrl}`, options);
  }
}
