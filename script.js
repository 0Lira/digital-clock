let ultimaHora = "";
let ultimoMinuto = "";
let ultimoSegundo = "";

// Função para fazer o flip da carta
function flipCard(cardId, frontId, backId, novoValor) {
  const card = document.getElementById(cardId);
  const front = document.getElementById(frontId);
  const back = document.getElementById(backId);

  // Evita múltiplos flips simultâneos
  if (card.classList.contains("flip")) {
    // Se já está flipando, apenas atualiza o valor que vai aparecer
    back.textContent = novoValor;
    return;
  }

  // Define o novo valor na parte de trás
  back.textContent = novoValor;

  // Inicia a animação de flip
  card.classList.add("flip");

  // Após metade da animação, atualiza a frente
  setTimeout(() => {
    front.textContent = novoValor;
  }, 300); // Meio da animação de 0.6s

  // Remove a classe flip após a animação completa
  setTimeout(() => {
    card.classList.remove("flip");
  }, 600); // Duração total da animação
}

// Função para atualizar o relógio digital
function atualizarRelogioDigital() {
  const data = new Date();

  // Extrai as informações de hora, minuto e segundo
  const dia = data.getDate() + " - " + diaDaSemana(data.getDay());
  let hora = data.getHours();
  let minuto = data.getMinutes();
  let segundo = data.getSeconds();

  // Formatação para garantir que os valores tenham sempre dois dígitos
  hora = hora < 10 ? "0" + hora : hora.toString();
  minuto = minuto < 10 ? "0" + minuto : minuto.toString();
  segundo = segundo < 10 ? "0" + segundo : segundo.toString();

  // Atualiza o dia
  document.querySelector(".diaAtual").textContent = dia;

  // Na primeira execução, define os valores iniciais sem animação
  if (ultimaHora === "" && ultimoMinuto === "" && ultimoSegundo === "") {
    document.getElementById("hora-front").textContent = hora;
    document.getElementById("hora-back").textContent = hora;
    document.getElementById("minuto-front").textContent = minuto;
    document.getElementById("minuto-back").textContent = minuto;
    document.getElementById("segundo-front").textContent = segundo;
    document.getElementById("segundo-back").textContent = segundo;

    ultimaHora = hora;
    ultimoMinuto = minuto;
    ultimoSegundo = segundo;
    return;
  }

  // Verifica se precisa fazer flip para cada unidade
  if (hora !== ultimaHora) {
    flipCard("hora-card", "hora-front", "hora-back", hora);
    ultimaHora = hora;
  }

  if (minuto !== ultimoMinuto) {
    flipCard("minuto-card", "minuto-front", "minuto-back", minuto);
    ultimoMinuto = minuto;
  }

  if (segundo !== ultimoSegundo) {
    flipCard("segundo-card", "segundo-front", "segundo-back", segundo);
    ultimoSegundo = segundo;
  }
}

// Função auxiliar para obter o dia da semana por extenso
function diaDaSemana(dia) {
  const dias = [
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

// Inicializa o relógio imediatamente
atualizarRelogioDigital();

// Chama a função a cada segundo para atualizar o relógio digital
setInterval(atualizarRelogioDigital, 1000);
