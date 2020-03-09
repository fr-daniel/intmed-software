import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Medico } from "../core/model";

@Injectable({
  providedIn: "root"
})
export class MedicoService {
  medicosUrl: string;

  constructor(private http: HttpClient) {
    this.medicosUrl = `${environment.apiUrl}/medicos/`;
  }

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${this.medicosUrl}`);
  }
}
