import { CepService } from './../../Servicos/Cep/cep.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Endereco } from 'src/app/models/endereco';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: './consulta-cep.component.html',
  styleUrls: ['./consulta-cep.component.sass'],
})
export class ConsultaCepComponent implements OnInit {
  txt_cep = new FormControl('08676250', [Validators.required]);

  enderecoObj: Endereco;
  cadastroForm: FormGroup;

  constructor(
    private cepService: CepService,
    private fb: FormBuilder,
    private cdref: ChangeDetectorRef
  ) {}

  consultarCEP() {
    setTimeout(() => {
      this.limparCampos();
      console.log("=======> Iniciando requisição de CEP")
      this.cepService.obterEndereco(this.txt_cep.value).subscribe({
        next: (result: Endereco) => {
          this.enderecoObj = result;
          console.log(this.enderecoObj);
        },
        error: (erro) => {
          console.log('Erro consultar o CEP');
        },
        complete: () => {
          console.log("=======> Requisição de CEP Completada")
        },
      });
    }, 0);
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.configuraValidacaoForm();
    this.consultarCEP();
  }

  configuraValidacaoForm() {
    this.limparCampos();

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
    this.enderecoObj.localidade = "Selecione"
    this.enderecoObj.uf = "Selecione"
  }

  trocarEstado(uf: string){
    if(uf === 'Selecione')this.enderecoObj.localidade = 'Selecione';
    if(uf === 'SP')this.enderecoObj.localidade = 'Suzano';
    if(uf === 'MG')this.enderecoObj.localidade = 'Campos Gerais';
  }
}
