import { dateToString, dataDeHojeMenos30Dias, dataDeHojeMais30Dias } from './../util/date-util';
export class PesquisaContaDTO {
  id: number;
  descricao: string;
  vencInicial: string;
  vencFinal: string;
  pagInicial: string;
	pagFinal: string;
  situacaoConta: string;
  idContaSaida: number;
  
  constructor(value: Partial<PesquisaContaDTO>){
    Object.assign(this,value);
  }
  
  preecherDataComRange60Dias(){
    if(!Boolean(this.vencInicial)){
      this.vencInicial  = dateToString(dataDeHojeMenos30Dias());
    }
    if(!Boolean(this.vencFinal)){
      this.vencFinal = dateToString(dataDeHojeMais30Dias());    
    }
  }
  
}
