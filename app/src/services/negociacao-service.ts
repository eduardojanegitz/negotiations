import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public obterNegociacoes(): Promise<Negociacao[]> {
    return (
      fetch("http://localhost:8080/dados")
        .then((res) => res.json())
        // Utilizado interface para tipar o array
        .then((dados: Array<NegociacoesDoDia>) => {
          return dados.map((dado) => {
            return new Negociacao(new Date(), dado.vezes, dado.montante);
          });
        })
    );
  }
}
