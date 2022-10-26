/**
 * Neste exercício você deve implementar uma função que irá devolver
 * se um número é par ou ímpar.
 *
 * Exemplo:
 * parOuImpar(2) -> 'par'
 * parOuImpar(3) -> 'ímpar'
 */

function parOuImpar(num) {
  // Implemente sua solução aqui :)
  if(num % 2 == 0){
    return "par";
  }else{
    return "ímpar";
  }
}

/* Não modifique a linha abaixo */
module.exports = parOuImpar
