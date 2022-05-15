import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Servicos/Prodduto/produto';
import { ProdutoService } from 'src/app/Servicos/Prodduto/produto.service';

@Component({
  selector: 'app-produtos-componentes',
  templateUrl: './produtos-componentes.component.html',
  styleUrls: ['./produtos-componentes.component.sass']
})
export class ProdutosComponentesComponent implements OnInit {

  public produtos!: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {


      this.produtoService.obterProdutos()
      .subscribe({
        next: p => {this.produtos = p.produtos; console.log(p)},
        error: e => {console.log(e)},
        complete: () => {console.log('Requisição de produtos completada')}
      });
  }

}
