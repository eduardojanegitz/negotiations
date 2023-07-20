export class Negociacao {
  /* 
    ESSA FORMA É O QUE O PESSOAL DE JAVA FAZ, O TYPESCRIPT TEM ALGO MAIS SIMPLIFICADO
  private _data: Date;
  private _quantidade: number;
  private _valor: number;
*/

  // SE NO MEU CONSTRUCTOR FOR REFERENCIAR OS MESMOS VALORES ATRIBUÍDOS ACIMA, SÓ FAZER DA MANEIRA ABAIXO
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
}
