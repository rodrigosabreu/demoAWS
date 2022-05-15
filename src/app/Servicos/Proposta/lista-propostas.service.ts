import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Propostas } from 'src/app/models/proposta';


@Injectable({
  providedIn: 'root'
})
export class ListaPropostasService {

  protected UrlServiceV1: string = environment.apiAWS;

  constructor(private http: HttpClient) { }

  obterPropostas(): Observable<Propostas>{

    return this.http.get<Propostas>(this.UrlServiceV1 + "propostas");

  }
}
