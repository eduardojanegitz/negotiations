export class Negociacao {
    /*
      ESSA FORMA É O QUE O PESSOAL DE JAVA FAZ, O TYPESCRIPT TEM ALGO MAIS SIMPLIFICADO
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
  */
    // SE NO MEU CONSTRUCTOR FOR REFERENCIAR OS MESMOS VALORES ATRIBUÍDOS ACIMA, SÓ FAZER DA MANEIRA ABAIXO
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
