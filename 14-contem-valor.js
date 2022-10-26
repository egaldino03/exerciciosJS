/**
 * Neste exercício você deve implementar uma função que irá devolver
 * se um certo array possui um valor.
 *
 * Exemplo: 
 * contemValor(["Banana", "Maçã", "Pera"], "Banana") -> true
 * contemValor(["Banana", "Maçã", "Pera"], "Uva") -> false
 */

 function contemValor(arr, estaContido) {
  // Implemente sua solução aqui :)
  for(let i = 0; i < arr.length; i++){
    if (arr[i] == estaContido){
      return true;
    }else{return false;}
  }
}

/* Não modifique a linha abaixo */
module.exports = contemValor
