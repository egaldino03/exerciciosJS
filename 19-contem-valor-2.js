/**
 * Neste exercício você deve implementar uma função que irá devolver
 * se um certo array possui um valor. Porém agora você deve utilizar
 * objetos que tenham uma propriedade "nome".
 *
 * Exemplo: 
 * contemValor([
 *   { nome: "Banana", quantidade: 10 },
 *   { nome: "Maçã", quantidade: 5 },
 *   { nome: "Pera", quantidade: 3 }
 * ], "Banana") -> true
 * contemValor([
 *   { nome: "Banana", quantidade: 10 },
 *   { nome: "Maçã", quantidade: 5 },
 *   { nome: "Pera", quantidade: 3 }
 * ], "Uva") -> false
 */

 function contemValor(arr, valor) {
  // Implemente sua solução aqui :)
  for (let i = 0; i < arr.length; i++){
    if (arr[i].nome == valor){
      return true;
    }else{
      return false;
    }
  }
}

/* Não modifique a linha abaixo */
module.exports = contemValor
