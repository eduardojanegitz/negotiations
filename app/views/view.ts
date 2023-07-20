export abstract class View<T> {
  // Implementando o abstract para ela não ser instanciada
  protected elemento: HTMLElement; // Foi utilizado o modificador protected, para que os filhos possam utilizar o atributo

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
