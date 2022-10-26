/**
 * Neste exercício você deve implementar uma função que irá devolver
 * as chaves do objeto informado.
 *
 * Exemplo:
 * propriedades({ nome: "João", idade: 20 }) -> ["nome", "idade"]
 * propriedades({ nome: "Maria", idade: 18, cidade: "São Paulo" }) -> ["nome", "idade", "cidade"]
 * propriedades({}) -> []
 */

function propriedades(obj) {
  // Implemente sua solução aqui :)
  return Object.keys(obj);
}

/* Não modifique a linha abaixo */
module.exports = propriedades
