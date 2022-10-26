/**
 * Neste exercício você deve implementar uma função que irá devolver
 * qual o período do dia baseado na hora informada.
 *
 * Exemplo:
 * periodoDoDia(8) -> 'Manhã'
 * periodoDoDia(12) -> 'Tarde'
 * periodoDoDia(18) -> 'Noite'
 * periodoDoDia(0) -> 'Madrugada'
 * periodoDoDia(25) -> 'Horário inválido'
 */
function periodoDoDia(hour) {
  // Implemente sua solução aqui :)
  switch (hour){
    case 8 :
      return "Manhã";
      break;
    case 12 :
      return "Tarde";
      break;
    case 18 :
      return "Noite";
      break;
    case 0 : 
      return "Madrugada";
      break;
    default :
      return "Horário Inválido";
  }
}

/* Não modifique a linha abaixo */
module.exports = periodoDoDia
