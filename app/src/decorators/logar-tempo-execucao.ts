// Requisito não funcional, responsável por medir a performance da aplicação

export function logarTempoExecucao() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const metodoOriginal = descriptor.value;

    // Os parâmetros das funções são passadas internamente como arrays
    // Dessa maneira, foi possível pegar os valores através da sintaxe abaixo
    descriptor.value = function (...args: Array<any>) {
      const t1 = performance.now();

      // Essa linha do código é importante, pois aqui o apply vai executar esse método "metodoOriginal"
      const retorno = metodoOriginal.apply(this, args);

      const t2 = performance.now();
      console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`);
      retorno;
    };
    return descriptor;
  };
}
