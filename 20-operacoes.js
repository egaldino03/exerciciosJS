/**
 * Neste exercício você deve implementar uma função que irá receber
 * dois parâmetros (inteiros) e devolver o resultado de todas as
 * operações da calculadora.
 *
 * Exemplo:
 * operacoesCalculadora(1, 2) -> {
 *   soma: 3,
 *   subtracao: -1,
 *   multiplicacao: 2,
 *   divisao: 0.5
 * }
 */

/* Não modifique a linha abaixo */
class Calculadora {
  soma(a, b) {
    return a + b
  }

  subtracao(a, b) {
    return a - b
  }

  multiplicacao(a, b) {
    return a * b
  }

  divisao(a, b) {
    return a / b
  }
}

function operacoesCalculadora(a, b) {
  // Implemente sua solução aqui :)
  return {
    soma : Calculadora.soma,
    subtracao: Calculadora.subtracao,
    multiplicacao : Calculadora.multiplicacao,
    divisao : Calculadora.divisao,
  }
}

console.log(operacoesCalculadora(1,2));

/* Não modifique a linha abaixo */
module.exports = operacoesCalculadora
