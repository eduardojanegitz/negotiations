import { View } from "./View.js";
export class NegociacoesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                ${model
            .lista()
            .map((negociacao) => {
            // Intl.DateTimeFormat() é uma maneira de formatar a data conforme a localidade 
            return `<tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td> 
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                    `;
        })
            .join("")}
                </tbody>    
            </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
