import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/Servicos/Prodduto/produto';

@Component({
  selector: 'app-produto-count',
  templateUrl: './produto-count.component.html',
  styleUrls: ['./produto-count.component.sass']
})
export class ProdutoCountComponent implements OnInit {


  @Input() produtos: Produto[];


  contadorAtivos(): number{

    if(!this.produtos) return 0;

    return this.produtos.filter((produto: Produto) => produto.ativo).length;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
