import { GerenciamentoEstadoComponent } from './gerenciamento-estado/gerenciamento-estado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { ConsultaCep2Component } from './consulta-cep2/consulta-cep2.component';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { PropostasComponent } from './propostas/propostas.component';
import { Propostas2Component } from './propostas2/propostas2.component';


const routes: Routes = [
   { path: 'consulta-cep', component: ConsultaCepComponent },
   { path: 'consulta-cep2', component: ConsultaCep2Component },
   { path: 'lista-propostas', component: PropostasComponent },
   { path: 'lista-propostas2', component: Propostas2Component },
   { path: 'menu', component: MenuComponent },
   { path: 'menu2', component: Menu2Component },
   { path: 'gerenciamento-estado', component: GerenciamentoEstadoComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Funcionalidades2RoutingModule { }
