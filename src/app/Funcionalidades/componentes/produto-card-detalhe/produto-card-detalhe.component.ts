import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/Servicos/Prodduto/produto';

@Component({
  selector: 'app-produto-card-detalhe',
  templateUrl: './produto-card-detalhe.component.html',
  styleUrls: ['./produto-card-detalhe.component.sass']
})
export class ProdutoCardDetalheComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
