const inputNovaTarefa = document.querySelector(".novaTarefa");
const btnAdicionar = document.querySelector(".btnAdicionar");
const btnExcluir = document.querySelector(".btnExcluir");
const tarefas = document.querySelector(".tarefas");

let textoTarefa = inputNovaTarefa.value;

function criaElementoTarefa() {
  const li = document.createElement("li");
  return li;
}

function adicionaTarefa(textoTarefa) {
  const tarefa = criaElementoTarefa();
  tarefas.appendChild(tarefa);
  tarefa.innerHTML = textoTarefa;
}

function limpaInput() {
  inputNovaTarefa.value = "";
  inputNovaTarefa.focus();
}

inputNovaTarefa.addEventListener('keypress', function (pressionaTecla) {
    if (pressionaTecla.keyCode === 13) {
        if (inputNovaTarefa.value == "") return;
        adicionaTarefa(inputNovaTarefa.value);
        limpaInput();
    }
});

btnAdicionar.addEventListener("click", function () {
  if (inputNovaTarefa.value == "") return;
  adicionaTarefa(inputNovaTarefa.value);
  limpaInput();
});
