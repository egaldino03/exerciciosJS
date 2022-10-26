/**
 * Neste exercício você deve implementar uma função que irá devolver
 * uma array sem o valor informado.
 *
 * Exemplo:
 * removerValor([1, 2, 3], 2) -> [1, 3]
 * removerValor(["Banana", "Maçã", "Pera"], "Pera") -> ["Banana", "Maçã"]
 */

function removerValor(arr, removedor) {
  // Implemente sua solução aqui :)
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == removedor){
      arr.splice(i, 1);
    }
  }
  return arr;
}

/* Não modifique a linha abaixo */
module.exports = removerValor
