/**
 * Neste exercício você deve implementar uma função que irá devolver
 * qual dos dois números é maior.
 *
 * Exemplo:
 * qualMaior(2, 3) -> 3
 * qualMaior(25, 25.1) -> 25.1
 * qualMaior(10, 10) -> 'Os números são iguais'
 */

function qualMaior(n1, n2) {
  // Implemente sua solução aqui :)
  if (n1 > n2){
    return n1;
  }else if (n2 > n1){
    return n2;
  }else{
    return "Os números são iguais";
  }
}

/* Não modifique a linha abaixo */
module.exports = qualMaior
