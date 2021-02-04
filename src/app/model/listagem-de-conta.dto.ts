export class ListagemDeContaDTO {
  idConta: number;
  descricaoConta: string;
  vencimento: Date;
  comentarios: string;
  idArquivo: number;
  situacaoConta: string;
  comentarioDePagamento: string;

  idBoleto: number;
  nomeBoleto: string;
  idComprovante: number;
  nomeComprovante: string;
  
  contaDeSaida: string;
  
  empresaResponsavel: string;
  empresaPagamento: string;  
  
  estaVencida: boolean;
  venceHoje: boolean;
}
