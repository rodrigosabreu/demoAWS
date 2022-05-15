import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items, Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class MenusService {

  protected UrlServiceV1: string = environment.apiAWS;

  header = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.header.set('Access-Control-Allow-Origin', '*');
  }

  obterMenus(): Observable<Items> {
    return this.http.get<Items>(this.UrlServiceV1 + 'menus', {headers: this.header});
  }

  cadastrarMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.UrlServiceV1 + 'menu', menu, {headers: this.header});
  }
  atualizarMenu(menu: Menu): Observable<Menu> {
    console.log(menu);
    return this.http.patch<Menu>(this.UrlServiceV1 + 'menu/' + menu.id, menu, {
      headers: this.header,
    });
  }
  deletarMenu(id: string): Observable<any> {
    return this.http.delete(this.UrlServiceV1 + 'menu/' + id, {
      headers: this.header,
    });
  }
}
