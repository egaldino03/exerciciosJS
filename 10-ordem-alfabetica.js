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
  if (typeof str == "string"){
  return str.split('').sort().join('')
  }else{
    return "Não é possível converter";
  }
}
/* Não modifique a linha abaixo */
module.exports = ordemAlfabetica
