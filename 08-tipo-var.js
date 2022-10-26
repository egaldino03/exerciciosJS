/**
 * Neste exercício você deve implementar uma função que irá devolver
 * o tipo de variável que foi passada como parâmetro.
 *
 * Tipos possíveis:
 * - boolean
 * - number
 * - string
 * 
 * Dica: pesquise sobre o operador "typeof"
 *
 * Exemplo:
 * tipoVariavel(1) -> 'number'
 * tipoVariavel('1') -> 'string'
 */

function tipoVariavel(variable) {
  // Implemente sua solução aqui :)
  return typeof variable;
}

/* Não modifique a linha abaixo */
module.exports = tipoVariavel
