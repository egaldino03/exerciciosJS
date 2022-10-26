/**
 * Neste exercício você deve implementar uma função que irá devolver
 * a média de notas de um aluno. A diferença é que agora você deve
 * enviar um array (que pode ter qualquer tamanho) de notas.
 *
 * Exemplo:
 * mediaDeNotas([10, 10, 10, 10]) -> 10
 * mediaDeNotas([9, 8, 10]) -> 9
 * mediaDeNotas([10, 10, 10, 10, 10, 10, 10, 10, 10, 10]) -> 10
 */

 function mediaDeNotas(arr) {
  // Implemente sua solução aqui :)
  let soma = 0;
  for (let i = 0; i < arr.length; i++){
    soma = arr[i] + soma;
  }
  return soma / arr.length;
}

/* Não modifique a linha abaixo */
module.exports = mediaDeNotas
