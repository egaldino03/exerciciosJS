/**
 * Neste exercício você deve implementar uma função que irá devolver
 * a string em ordem alfabética.
 *
 * Exemplo:
 * ordemAlfabetica('abc') -> 'abc'
 * ordemAlfabetica('cba') -> 'abc'
 * ordemAlfabetica(1) -> 'Não é possível converter'
 */

function ordemAlfabetica(str) {
  // Implemente sua solução aqui :)
  return str.split('').sort().join('');
}
/* Não modifique a linha abaixo */
module.exports = ordemAlfabetica
