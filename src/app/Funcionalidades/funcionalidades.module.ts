import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ListaProdutoComponent } from './produtos/listar-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { ProdutoService } from '../Servicos/Prodduto/produto.service';




import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { ProdutosComponentesComponent } from './produtos-componentes/produtos-componentes.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './componentes/produto-count/produto-count.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FuncionalidadeAppComponent } from './funcionalidade.app.component';
registerLocaleData(localPt);



@NgModule({
  declarations: [
    HomeComponent,
    ContatoComponent,
    ListaProdutoComponent,
    ProdutosComponentesComponent,
    ProdutoCardDetalheComponent,
    ProdutoCountComponent,
    NotFoundComponent,
    EditarProdutoComponent,
    FuncionalidadeAppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FuncionalidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule
  ],
  exports: [
    NotFoundComponent
  ],
  providers: [ProdutoService],
})
export class FuncionalidadesModule {}
