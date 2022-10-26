/**
 * Neste exercício você deve implementar uma função que irá devolver
 * uma soma. A diferença é que agora você deve enviar um array
 * (que pode ter qualquer tamanho) de números.
 *
 * Exemplo:
 * soma([1, 2]) -> 3
 * soma([3, 4, 3]) -> 10
 */

 function soma(arr) {
  // Implemente sua solução aqui :)
  const total = arr.reduce((sum, num) => {
    return sum + num;
  })
  return total;
}

/* Não modifique a linha abaixo */
module.exports = soma
