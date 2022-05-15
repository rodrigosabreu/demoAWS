import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Proposta } from 'src/app/models/proposta';
import { ListaPropostasService } from 'src/app/Servicos/Proposta/lista-propostas.service';

@Component({
  selector: 'app-propostas2',
  templateUrl: './propostas2.component.html',
  styleUrls: ['./propostas2.component.css'],
})
export class Propostas2Component implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  public propostas: Proposta[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private listaPropostaService: ListaPropostasService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 0,
    };

    this.listaPropostaService.obterPropostas().subscribe({
      next: (p) => {
        this.propostas = p.propostas;
        this.dtTrigger.next(this.propostas);
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        //console.log('Requisição de propostas completada');
      },
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
