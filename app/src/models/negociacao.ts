import { Modelo } from "../interfaces/modelo.js";

export class Negociacao implements Modelo<Negociacao> {
  /* 
  ESSA FORMA É O QUE O PESSOAL DE JAVA FAZ, O TYPESCRIPT TEM ALGO MAIS SIMPLIFICADO
  
  private _data: Date;
  private _quantidade: number;
  private _valor: number;
*/

  // SE NO MEU CONSTRUCTOR FOR REFERENCIAR OS MESMOS VALORES ATRIBUÍDOS ACIMA,
  // SÓ FAZER DA MANEIRA ABAIXO
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }

  // Método estático
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
    // Expressão regular utilizado para pegar todos os hifens das datas
    const exp = /-/g;

    // Trocando os hifens por vírgula, com o replace
    const date = new Date(dataString.replace(exp, ","));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);

    // Instanciando a variável
    return new Negociacao(date, quantidade, valor);
  }

  public paraTexto(): string {
    return `Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}`;
  }

  public compara(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() === negociacao.data.getDate() &&
      this.data.getMonth() === negociacao.data.getMonth() &&
      this.data.getFullYear() === negociacao.data.getFullYear()
    );
  }
}
