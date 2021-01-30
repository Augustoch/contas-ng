import { apendApi } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DadoContaBancaria } from '../model/dado-conta-bancaria';

@Injectable({ providedIn: 'root' })
export class ContaBancoService {
  path = apendApi('contas-banco/');

  constructor(private http: HttpClient) {}
  
  salvarContaBanco(descricao: string){
      return this.http.post(this.path, descricao);
  }
  
  obterContasBancarias(){
      return this.http.get<Array<DadoContaBancaria>>(this.path);
  }
  
  deletar(id: number){
      return this.http.delete(this.path.concat(`${id}`));
  }
  
}
