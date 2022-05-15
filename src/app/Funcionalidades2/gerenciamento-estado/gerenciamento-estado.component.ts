import { Store } from '@ngrx/store';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IAppState, setUsuario, setTitulo } from 'src/app/Store/app.state';

@Component({
  selector: 'app-gerenciamento-estado',
  templateUrl: './gerenciamento-estado.component.html',
  styleUrls: ['./gerenciamento-estado.component.sass']
})
export class GerenciamentoEstadoComponent implements OnInit {

  constructor(private store: Store<{app: IAppState}>) { }

  ngOnInit(): void {
  }

  @ViewChild("nome") nome: ElementRef;
  alterarUsuario(){

    let nome = this.nome.nativeElement.value;

    if(nome != "")this.store.dispatch(setUsuario({ nomeState: nome }))
  }


  @ViewChild("titulo") titulo: ElementRef;
  alterarTitulo(){

    let titulo = this.titulo.nativeElement.value;

    if(titulo != "")this.store.dispatch(setTitulo({ tituloState: titulo }))
  }




}
