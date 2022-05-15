import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Proposta, Propostas } from 'src/app/models/proposta';
import { ListaPropostasService } from 'src/app/Servicos/Proposta/lista-propostas.service';

@Component({
  selector: 'app-propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css'],
})
export class PropostasComponent implements OnDestroy, OnInit {

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  loading: boolean;

  propostas: Proposta[];
  produtosSelect: string[] = [];
  statusDetalhadoSelect: string[] = [];

  cboStatusDetalhado: string;
  statusDetalhadoSelected: string;
  selecionadoProduto: string;

  countDescricaoCreditoEnviado: number = 0;
  countDescricaoCreditoAprovado: number = 0;
  countDescricaoCreditoCondicionado: number = 0;
  countDescricaoCreditoRecusada: number = 0;

  somatorioValorFinanciadoEnviadas: number = 0;
  somatorioValorFinanciadoAprovadas: number = 0;
  somatorioValorFinanciadoCondicionadas: number = 0;
  somatorioValorFinanciadoRecusadas: number = 0;

  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  //dtElement: any;
  dtElement: DataTableDirective;

  constructor(private listaPropostaService: ListaPropostasService) {}

  ngOnInit(): void {
    this.carregarPropostas();
  }

  zeraCampos() {
    this.selecionadoProduto = 'todos';
    this.statusDetalhadoSelected = 'todos';

    this.countDescricaoCreditoEnviado = 0;
    this.countDescricaoCreditoAprovado = 0;
    this.countDescricaoCreditoCondicionado = 0;
    this.countDescricaoCreditoRecusada = 0;

    this.somatorioValorFinanciadoEnviadas = 0;
    this.somatorioValorFinanciadoAprovadas = 0;
    this.somatorioValorFinanciadoCondicionadas = 0;
    this.somatorioValorFinanciadoRecusadas = 0;
  }

  carregarPropostas() {
    this.zeraCampos();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      order: [[2, 'desc']],
      bDestroy: true,
      responsive: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.5/i18n/pt-BR.json',
      },
      dom: 'Blfrtip',
      buttons: [
        //'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
      ],
    };

    this.loading = true;

    setTimeout(() => {
      this.listaPropostaService.obterPropostas().subscribe({
        next: (p) => {



          this.propostas = p.propostas;

          this.dtTrigger.next(null);
        },
        error: (e) => {
          console.log(e);
          this.loading = false;
        },
        complete: () => {
          this.obterProdutos();
          this.statusDetalhadoSelectProduto();
          this.loading = false;
        },
      });
    }, 1000);
  }

  buscarIdProposta(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns(0).search(valor.value).draw();
    });
  }

  obterProdutos() {
    var produto: any = [];

    this.propostas.forEach((data) => {
      produto.push(data.produto);
    });

    this.produtosSelect = produto.filter(function (data: string, i: string) {
      return produto.indexOf(data) === i;
    });

  }

  statusDetalhadoSelectProduto() {
    var descricao_credito: any = [];

    this.propostas.forEach((data) => {
      descricao_credito.push(data.status.descricao_credito);

      this.countDescricaoCreditoEnviado++;
      this.somatorioValorFinanciadoEnviadas =
        this.somatorioValorFinanciadoEnviadas + data.valores.credito_solicitado;

      if (data.status.descricao_credito === 'Aprovada automaticamente') {
        this.countDescricaoCreditoAprovado++;
        this.somatorioValorFinanciadoAprovadas =
          this.somatorioValorFinanciadoAprovadas +
          data.valores.credito_solicitado;
      }

      if (data.status.descricao_credito === 'Aprovação Condicionada') {
        this.countDescricaoCreditoCondicionado++;
        this.somatorioValorFinanciadoCondicionadas =
          this.somatorioValorFinanciadoCondicionadas +
          data.valores.credito_solicitado;
      }

      if (data.status.descricao_credito === 'Proposta Recusada') {
        this.countDescricaoCreditoRecusada++;
        this.somatorioValorFinanciadoRecusadas =
          this.somatorioValorFinanciadoRecusadas +
          data.valores.credito_solicitado;
      }
    });

    this.statusDetalhadoSelect = descricao_credito.filter(function (
      este: string,
      i: string
    ) {
      return descricao_credito.indexOf(este) === i;
    });
  }

  buscarStatusDetalhado(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (valor == 'todos') dtInstance.columns(5).search('').draw();
      else dtInstance.columns(5).search(valor).draw();

      this.statusDetalhadoSelected = valor;
    });
  }

  buscarProdutoProposta(valor: any) {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      if (valor.value == 'todos') dtInstance.columns(7).search('').draw();
      else dtInstance.columns(7).search(valor.value).draw();

      this.selecionadoProduto = valor.value;
    });
  }

  mudarSelectStatusDetalhado(valor: string) {
    this.statusDetalhadoSelected = valor;
    this.buscarStatusDetalhado(valor);
  }

  rerender() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next(null);
    });

    this.carregarPropostas();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.listaPropostaService.obterPropostas().subscribe();
  }

  verificarStatus(status: string): string {
    if (status == 'Proposta Recusada') return 'vermelho';
    if (status == 'Aprovada automaticamente') return 'verde';
    if (status == 'Aprovação Condicionada') return 'verde';
    if (status == 'Aguardando Análise') return 'amarelo';
    if (status == 'Aguardando Aprovação do Pastão') return 'roxo';
    else return 'cinza';
  }
}
