import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConsultaService {
  consultasUrl: string;

  constructor(private http: HttpClient) {
    this.consultasUrl = `${environment.apiUrl}/consultas`;
  }

  listar(): Observable<any> {
    return this.http.get(`${this.consultasUrl}/`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.consultasUrl}/${id}`);
  }
}
