function meuTimer() {
  // FUNÇÃO QUE PEGA A "HORA" 0 DO UNIX ( 1970 )
  function segundosTimer(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "GMT" });
  }

  // SELECIONA OS ELEMENTOS DA PÁGINA QUE VAMOS TRABALHAR
  const meuContador = document.querySelector(".meuContador");
  const botIniciar = document.querySelector(".iniciar");
  const botPausar = document.querySelector(".pausar");
  const botZerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer = 0;

  // FUNÇÃO QUE ACRESCENTA DE 1 E 1 UM SEGUNDO NO HTML
  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      meuContador.innerHTML = segundosTimer(segundos);
    }, 1000);
  }

  botIniciar.addEventListener("click", function () {
    meuContador.classList = "meuContador";
    clearInterval(timer);
    iniciaRelogio();
  });

  botPausar.addEventListener("click", function () {
    meuContador.classList = "red";
    clearInterval(timer);
  });

  botZerar.addEventListener("click", function () {
    meuContador.classList = "meuContador";
    clearInterval(timer);
    meuContador.innerHTML = '00:00:00';
    segundos = 0;
  });
}

meuTimer();
