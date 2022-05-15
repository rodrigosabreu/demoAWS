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
  selector: 'app-consulta-cep2',
  templateUrl: './consulta-cep2.component.html',
  styleUrls: ['./consulta-cep2.component.sass'],
})
export class ConsultaCep2Component implements OnInit {
  txt_cep = new FormControl('08676250', [Validators.required]);

  enderecoObj: Endereco;
  loading: boolean;


  constructor(
    private cepService: CepService,
    private cdref: ChangeDetectorRef
  ) {}

  consultarCEP() {
    this.loading = true;
    setTimeout(() => {
      console.log("=======> Iniciando requisição de CEP")
      this.cepService.obterEndereco(this.txt_cep.value).subscribe({
        next: (result: Endereco) => {
          this.enderecoObj = result;
          //console.log(this.enderecoObj);
        },
        error: (erro) => {
          this.loading = false;
          console.log('Erro consultar o CEP');
        },
        complete: () => {
          this.loading = false;
          console.log("=======> Requisição de CEP Completada")
        },
      });
    }, 1000);
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    this.consultarCEP();
  }



  GravarEndereco(event: Endereco)
  {
    alert(event.localidade);
  }


}
