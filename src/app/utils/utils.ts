import { isDevMode } from "@angular/core";

export class LogWebApp {


  static logErro(erro: any, componente: string){
    if(isDevMode()){
      console.log("===============> ERRO DO COMPONENTE: " + componente)
      console.log(erro)
    }else{
      //logar erro
    }
  }



}
