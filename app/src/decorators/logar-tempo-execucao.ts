// Requisito não funcional, responsável por medir a performance da aplicação

export function logarTempoExecucao(emSegundos: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    // Os parâmetros das funções são passadas internamente como arrays
    // Dessa maneira, foi possível pegar os valores através da sintaxe abaixo
    descriptor.value = function (...args: Array<any>) {
      let divisor = 1;
      let unidade = "milisegundos";
      if (emSegundos) {
        divisor = 1000;
        unidade = "segundos";
      }
      const t1 = performance.now();

      // Essa linha do código é importante, pois aqui o apply vai executar esse método "metodoOriginal"
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(
        `${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade} `
      );
      retorno;
    };
    return descriptor;
  };
}
