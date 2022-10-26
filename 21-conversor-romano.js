/**
 * Neste exercício você deve implementar uma função que irá devolver
 * o valor de um número convertido para romano.
 *
 * Exemplo:
 * conversorRomano(1) -> 'I'
 * conversorRomano(5) -> 'V'
 * conversorRomano(131) -> 'CXXXI'
 * conversorRomano(4000) -> 'Não é possível converter'
 */

/* Não modifique a linha abaixo */
let numberMap = {
  0: [
    '', // 0
    'I', // 1
    'II', // 2
    'III', // 3
    'IV', // 4
    'V', // 5
    'VI', // 6
    'VII', // 7
    'VIII', // 8
    'IX' // 9
  ],
  1: [
    '', // 0
    'X', // 10
    'XX', // 20
    'XXX', // 30
    'XL', // 40
    'L', // 50
    'LX', // 60
    'LXX', // 70
    'LXXX', // 80
    'XC' // 90
  ],
  2: [
    '', // 0
    'C', // 100
    'CC', // 200
    'CCC', // 300
    'CD', // 400
    'D', // 500
    'DC', // 600
    'DCC', // 700
    'DCCC', // 800
    'CM' // 900
  ],
  3: [
    '', // 0
    'M', // 1000
    'MM', // 2000
    'MMM' // 3000
  ]
}

// Nota: o maior número romano suportado deve ser 3999 (MMMCMXCIX)

function conversorRomano() {
  // Implemente sua solução aqui :)
}

/* Não modifique a linha abaixo */
module.exports = conversorRomano
