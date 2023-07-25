import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
  // Implementando o abstract para ela não ser instanciada
  protected elemento: HTMLElement;
  // Foi utilizado o modificador protected, para que os filhos possam utilizar o atributo


  // ? parâmetros opcionais - devem ser sempre os últimos
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  @logarTempoExecucao()
  @inspect()
  public update(model: T): void {
    let template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
