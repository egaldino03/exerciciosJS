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
  if (hour >= 8 && hour < 12){
    return "Manhã";
  }else if (hour >= 12 && hour < 18){
    return "Tarde";
  }else if (hour >= 18 && hour <= 23){
    return "Noite";
  }else if (hour >= 0 && hour < 8){
    return "Madrugada";
  }else if (hour >= 24){
    return "Horário inválido";
  }
}

/* Não modifique a linha abaixo */
module.exports = periodoDoDia
