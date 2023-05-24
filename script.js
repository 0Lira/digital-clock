// Função para atualizar o relógio digital
function atualizarRelogioDigital() {
  var data = new Date(); // Cria um objeto Date

  // Extrai as informações de hora, minuto e segundo
  var dia = data.getDate() + " " + "-" + " " + diaDaSemana(data.getDay());
  var hora = data.getHours();
  var minuto = data.getMinutes();
  var segundo = data.getSeconds();

  // Formatação para garantir que os valores tenham sempre dois dígitos
  hora = hora < 10 ? "0" + hora : hora;
  minuto = minuto < 10 ? "0" + minuto : minuto;
  segundo = segundo < 10 ? "0" + segundo : segundo;

  // Atualiza o conteúdo dos elementos do relógio com o horário atual
  document.querySelector(".diaAtual").textContent = dia;
  document.querySelector(".hora").textContent = hora;
  document.querySelector(".minuto").textContent = minuto;
  document.querySelector(".segundo").textContent = segundo;

  // Função auxiliar para obter o dia da semana por extenso
  function diaDaSemana(dia) {
    var dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return dias[dia];
  }
}

// Chama a função a cada segundo para atualizar o relógio digital
setInterval(atualizarRelogioDigital, 1000);
