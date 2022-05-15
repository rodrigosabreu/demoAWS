import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/Servicos/Prodduto/produto';
import { ProdutoService } from 'src/app/Servicos/Prodduto/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.sass'],
})
export class EditarProdutoComponent implements OnInit {
  public produtos: Produto[] = [];
  public produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.obterPorId(params['id']);
    });
  }

  obterPorId(id: string) {
    this.produtoService.obterProdutos().subscribe({
      next: (p) => {
        this.produtos = p.produtos;
        console.log(p);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        this.produto = this.produtos.find((produto) => produto.id == id);

      },
    });
  }

  salvar(){
    //fazer comunicacao com back
    this.router.navigate(['/produtos-componentes']);
    //this.router.navigateByUrl('/produtos-componentes');
  }
}
