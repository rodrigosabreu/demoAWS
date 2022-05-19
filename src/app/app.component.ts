import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Menu } from './Servicos/Menu/menu';
import { MenusService } from './Servicos/Menu/menus.service';
import { IAppState } from './Store/app.state';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';

import { LogWebApp } from './utils/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor(
    private menuService: MenusService,
    private store: Store<{ app: IAppState }>
  ) {}

  title = 'angular-admin-lte';

  menus: Menu[] = [];

  //recuperando o stado do menu
  nome$ = this.store.select('app').pipe(map((e) => e.nome));

  titulo$ = this.store.select('app').pipe(map((e) => e.titulo));

  ngOnInit(): void {
    this.carregarMenu();

    interval(3000).subscribe((x) => this.carregarMenu());
  }

  carregarMenu() {
    setTimeout(() => {
      this.menuService.obterMenus().subscribe({
        next: (data) => {
          this.menus = data.Items;
        },
        error: (e) => {
          LogWebApp.logErro(e, this.constructor.name);
        },
        complete: () => {},
      });
    }, 1000);
  }
}
