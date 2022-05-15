import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutoComponent } from './produtos/listar-produto/lista-produto.component';
import { ProdutosComponentesComponent } from './produtos-componentes/produtos-componentes.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { FuncionalidadeAppComponent } from './funcionalidade.app.component';

const routes: Routes = [

  { path: '', component: FuncionalidadeAppComponent,
  children: [
    { path: 'produtos-componentes', component: ProdutosComponentesComponent},
    { path: 'produtos-componentes/editar/:id', component: EditarProdutoComponent },
  ]
  },



  { path: 'contato', component: ContatoComponent },

  { path: 'produtos-detalhe/:id', component: ListaProdutoComponent },

  { path: 'produtos', component: ListaProdutoComponent,
    children: [{ path: 'editar/:id', component: EditarProdutoComponent }]
  },



  {path: 'home', component: HomeComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionalidadesRoutingModule { }
