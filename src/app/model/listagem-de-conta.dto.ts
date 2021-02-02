export class ListagemDeContaDTO {
  idConta: number;
  descricaoConta: String;
  vencimento: Date;
  comentarios: String;
  idArquivo: number;
  situacaoConta: string;
  comentarioDePagamento: string;

  idBoleto: number;
  nomeBoleto: string;
  idComprovante: number;
  nomeComprovante: string;
  
  estaVencida: boolean;
  venceHoje: boolean;
}
