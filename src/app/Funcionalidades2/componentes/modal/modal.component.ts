import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/Servicos/Menu/menu';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

   //@Input() enderecoObjDoComponente: Endereco;
   @Input() set enderecoObjDoComponente(menuDoPai: Menu) {
    this.menu = menuDoPai;
    console.log("Objeto entrando no componente filho");
    console.log(menuDoPai);
  }

  //enviar dado para o Pai
  @Output() enviarParaOPaiEmit: EventEmitter<Menu> = new EventEmitter();

  menu: Menu;

  EnviarMenuParaPai()
  {
    this.enviarParaOPaiEmit.emit(this.menu);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
