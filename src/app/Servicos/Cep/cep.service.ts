import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  protected UrlServiceV1: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<any>{


    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`)

  }

}
