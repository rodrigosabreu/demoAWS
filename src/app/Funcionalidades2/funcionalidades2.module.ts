import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from '../Servicos/Prodduto/produto.service';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { Funcionalidades2RoutingModule } from './funcionalidades2-routing.module';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';
import { CepService } from '../Servicos/Cep/cep.service';
import { ConsultaCep2Component } from './consulta-cep2/consulta-cep2.component';
import { FormEnderecoComponent } from './componentes/form-endereco/form-endereco.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { PropostasComponent } from './propostas/propostas.component';
import { ListaPropostasService } from '../Servicos/Proposta/lista-propostas.service';
import { DataTablesModule } from 'angular-datatables';
import { Propostas2Component } from './propostas2/propostas2.component';
import { NgBrazil } from 'ng-brazil';
import { MenuComponent } from './menu/menu.component';
import { Menu2Component } from './menu2/menu2.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { GerenciamentoEstadoComponent } from './gerenciamento-estado/gerenciamento-estado.component';

registerLocaleData(localPt);

@NgModule({
  declarations: [
    ConsultaCepComponent,
    ConsultaCep2Component,
    FormEnderecoComponent,
    LoadingComponent,
    PropostasComponent,
    Propostas2Component,
    MenuComponent,
    Menu2Component,
    ModalComponent,
    GerenciamentoEstadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Funcionalidades2RoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgBrazil


  ],
  exports :[
  ],
  providers: [
    ProdutoService,
    CepService,
    ListaPropostasService
  ],
})
export class Funcionalidades2Module {}
