export abstract class View<T> {

  // Implementando o abstract para ela não ser instanciada
  protected elemento: HTMLElement; 
  // Foi utilizado o modificador protected, para que os filhos possam utilizar o atributo

  private escapar: Boolean = false;

  // ? parâmetros opcionais - devem ser sempre os últimos
  constructor(seletor: string, escapar?: boolean) {
    this.elemento = document.querySelector(seletor);
    if (escapar) {
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }
}
