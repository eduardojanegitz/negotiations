export class View {
    protected elemento: HTMLElement // Foi utilizado o modificador protected, para que os filhos possam utilizar o atributo

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }
}