import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.sass'],
})
export class FormEnderecoComponent implements OnInit {
  //@Input() enderecoObjDoComponente: Endereco;
  @Input() set enderecoObjDoComponente(end: Endereco) {
    this.enderecoObj = end;
    console.log(end);
  }

   //enviar dado para o Pai
   @Output() enviarParaOPaiEmit: EventEmitter<Endereco> = new EventEmitter();

  cadastroForm: FormGroup;
  enderecoObj: Endereco;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.configuraValidacaoForm();
    console.log(this.enderecoObjDoComponente);
  }

  ngAfterViewInit() {}



  configuraValidacaoForm() {
    this.limparCampos();

    let localidadeValidacao = new FormControl('', [Validators.required]);

    this.cadastroForm = this.fb.group({
      logradouro: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required]],
      ibge: ['', [Validators.required]],
      gia: ['', [Validators.required]],
      ddd: ['', [Validators.required]],
      siafi: ['', [Validators.required]],
      localidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
    });
  }
  limparCampos() {
    this.enderecoObj = new Endereco();
    this.enderecoObj.localidade = 'Selecione';
    this.enderecoObj.uf = 'Selecione';
  }
  trocarEstado(uf: string) {
    if (uf === 'Selecione') this.enderecoObj.localidade = 'Selecione';
    if (uf === 'SP') this.enderecoObj.localidade = 'Suzano';
    if (uf === 'MG') this.enderecoObj.localidade = 'Campos Gerais';
  }

  EnviarParaOPaiCadEndereco()
  {
    this.enviarParaOPaiEmit.emit(this.enderecoObj);
  }


}
