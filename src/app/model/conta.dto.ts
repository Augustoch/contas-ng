export class ContaDTO{
     id: number;
	 descricao: string;
	 comentarios: string;
     boleto: any;
     vencimento: string;
     idEmpresaResposavel: number | undefined;
     
     constructor(conta?: Partial<ContaDTO>){
         if(conta){
             this.comentarios= conta.comentarios?.toUpperCase() ?? '';
             this.descricao = conta.descricao?.toUpperCase() ?? '';
             this.vencimento = conta.vencimento?.toUpperCase() ?? '';
             this.idEmpresaResposavel = conta.idEmpresaResposavel;
             this.boleto = conta.boleto;
         }
     }
}