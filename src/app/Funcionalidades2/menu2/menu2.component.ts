import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/Servicos/Menu/menu';
import { MenusService } from 'src/app/Servicos/Menu/menus.service';
import { setUsuario, IAppState } from 'src/app/Store/app.state';
import { Store } from '@ngrx/store'
import { environment } from 'src/environments/environment';
import { LogWebApp } from 'src/app/utils/utils';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.sass'],
})
export class Menu2Component implements OnInit {

  _ADMIN: boolean = false;
  _EXACT: boolean = true;
  modal: boolean = false;
  idMenuClicado: string;

  menu: Menu;
  menuClicadoExcluir: Menu;
  menus: Menu[];
  menuForm: FormGroup;
  objMenuParaFilho: Menu;

  constructor(private fb: FormBuilder,
    private menuService: MenusService,
    ) {}

  ngOnInit(): void {
    this.popularTabela();

    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      link: [''],
    });
  }

  carregarParaEdicao(menuClicado: Menu) {
    this.menu = menuClicado;
    this.idMenuClicado = menuClicado.id;
  }
  updateMenu(menu: Menu) {
     menu.id = this.idMenuClicado;
     menu.admin = this._ADMIN;
     menu.exact = this._EXACT;

    this.menuService.atualizarMenu(menu).subscribe({
      next: (data) => {},
      error: (e) => {LogWebApp.logErro(e, this.constructor.name);},
      complete: () => {
        alert("Menu atualizao")//implementar modal
        this.popularTabela();
        this.menuForm.reset();
      },
    });
  }

  cadastrarMenu(menu: Menu) {
    menu.admin = this._ADMIN;
    menu.exact = this._EXACT;

    this.menuService.cadastrarMenu(menu).subscribe({
      next: (data) => {},
      error: (e) => {LogWebApp.logErro(e, this.constructor.name);},
      complete: () => {
        alert("Menu cadastrado")//implementar modal
        this.popularTabela();
        this.menuForm.reset();

      },
    });
  }

  deletarMenu(menu:Menu) {
    this.menuService.deletarMenu(menu.id).subscribe({
      next: (data) => {},
      error: (e) => {LogWebApp.logErro(e, this.constructor.name);},
      complete: () => { this.popularTabela();},
    });
  }

  popularTabela() {
    this.menuService.obterMenus().subscribe({
      next: (data) => { this.menus = data.Items; },
      error: (e) => {LogWebApp.logErro(e, this.constructor.name); },
      complete: () => {},
    });
  }

  abriModalExcluir(menuClicado: Menu){
    this.menuClicadoExcluir = menuClicado;
  }

  abrirModal(menu: Menu){
    this.objMenuParaFilho = menu
    this.modal = true;
  }




}
