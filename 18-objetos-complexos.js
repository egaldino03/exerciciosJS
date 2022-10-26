/**
 * Neste exercício você deve implementar uma função que irá devolver
 * o resultado da função "meow" do objeto "gato".
 */

/* Não modifique a linha abaixo */
const gato = {
  nome: 'Bob',
  age: 10,
  meow() {
    return 'meow'
  }
}

function objetosComplexos() {
  // Implemente sua solução aqui :)
  return gato.meow();
}

console.log(objetosComplexos());

/* Não modifique a linha abaixo */
module.exports = objetosComplexos
