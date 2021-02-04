import { Empresa } from './../model/empresa';
import { apendApi } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmpresaService {
  path = apendApi('empresas/');

  constructor(private http: HttpClient) {}
  
  salvarEmpresa(descricao: string){
      return this.http.post(this.path, descricao);
  }
  
  obterEmpresas(){
      return this.http.get<Array<Empresa>>(this.path);
  }
  
  deletar(id: number){
      return this.http.delete(this.path.concat(`${id}`));
  }
  
}
