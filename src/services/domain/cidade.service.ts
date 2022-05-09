import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CidadeDTO } from "../../models/cidade.dto";

@Injectable()
export class CidadeService {
  constructor(public http: HttpClient) {}

  // Método para requisitar uma lista de categoria na API
  findAll(estado_id): Observable<CidadeDTO[]> {
    return this.http.get<CidadeDTO[]>(
      `${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`
    );
  }
}
