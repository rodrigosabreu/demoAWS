import { environment } from './../../../environments/environment.prod';
import { Produtos } from 'src/app/Servicos/Prodduto/produto';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  protected UrlServiceV1: string = environment.apiAWS



  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produtos>{

    return this.http.get<Produtos>(this.UrlServiceV1 + "produtos");

  }




}
