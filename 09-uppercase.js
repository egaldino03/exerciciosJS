/**
 * Neste exercício você deve implementar uma função que irá devolver
 * a string passada como parâmetro em caixa alta.
 *
 * Exemplo:
 * uppercase('abc') -> 'ABC'
 * uppercase('ABC') -> 'ABC'
 * uppercase(1) -> 'Não é possível converter'
 * uppercase(true) -> 'Não é possível converter'
 */

 function uppercase(str) {
  // Implemente sua solução aqui :)
  try{
    return str.toUpperCase();
  }catch{
    return "Não é possível converter";
  }
}

/* Não modifique a linha abaixo */
module.exports = uppercase
