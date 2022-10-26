/**
 * Neste exercício você deve implementar uma função que irá devolver
 * uma array sem valores duplicados.
 *
 * Exemplo:
 * removerDuplicada([1, 2, 1]) -> [1, 2]
 * removerDuplicada(["Banana", "Maçã", "Pera", "Banana"]) -> ["Banana", "Maçã", "Pera"]
 */

function removerDuplicada(arr) {
  // Implemente sua solução aqui :)
  let final = arr.length;
  let i = 0;
  while(i < final){
  for (let i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++){
      if (arr[i] == arr[j]){
        arr.splice(j, 1);
      }
    }
  }
}
  return arr;
}

/* Não modifique a linha abaixo */
module.exports = removerDuplicada
