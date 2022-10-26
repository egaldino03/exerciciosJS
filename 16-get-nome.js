/**
 * Neste exercício você deve implementar uma função que irá devolver
 * a propriedade "nome" do objeto informado.
 *
 * Exemplo:
 * getNome({ nome: "João" }) -> "João"
 * getNome({ nome: "Maria" }) -> "Maria"
 * getNome({}) -> "Não existe uma propriedade nome neste objeto"
 */

function getNome(obj) {
  // Implemente sua solução aqui :
    if (obj.nome == undefined){
      return "Não existe uma propriedade nome neste objeto";
    }else{return obj.nome;}
}

/* Não modifique a linha abaixo */
module.exports = getNome
