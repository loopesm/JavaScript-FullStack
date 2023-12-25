// FUNÇÃO QUE CRIA A CALCULADORA COMO UM OBJETO
function criaCalculadora() {
  return {
    // ELEMENTO 'MEU DISPLAY' DO OBJETO ( SELECIONADO PELA CLASSE)
    meuDisplay: document.querySelector(".meuDisplay"),

    // MÉTODO ( UM ELEMENTO DO OBJETO QUE FAZ ALGO) QUE CHAMA
    //O CLIQUE NOS BOTÕES
    iniciaCalculadora() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      document.body.addEventListener("keypress", (e) => {
        
        if ( e.key === 'Enter' ) {
          this.realizaConta();
        }
      });
    },

    realizaConta() {
     this.meuDisplay.focus();
      let resultado = this.meuDisplay.value;

      try {
        // ESSE CÓDIGO "EVAL" DEIXA O SISTEMA MENOS SEGURO, VERIFICAR MELHOR FORMA DE REALIZAR
        resultado = eval(resultado);

        if (!resultado) {
          alert("Conta Inválida");
          return;
        }

        this.meuDisplay.value = String(resultado);

      } catch (e) {
        alert("Conta Inválida");
        return;
      }
    },

    // MÉTODO QUE CAPTURA O CLIQUE NOS BOTÕES E VERIFICAR SE
    //TEM A CLASSE "BTN-NUMEROS"
    cliqueBotoes() {
      // SE FOR EXECUTADO SEM SER ARROW FUNCTION ( "() =>" )
      // DA ERRO NA HORA DE PUXAR O "BTNPARADISPLAY" POR CAUSA DO
      // "THIS", MAS COM ARROW NÃO TEM PROBLEMA.
      document.addEventListener("click", (clique) => {
        const clicado = clique.target;

        // CONDIÇÃO, QUE CASO SEJA VERDADEIRA, ADICIONA O TEXTO
        //DO BOTÃO CLICADO NA FUNÇÃO "BTN PARA DISPLAY"
        if (clicado.classList.contains("btn-numero")) {
          this.btnParaDisplay(clicado.innerText);
        }
        // SE A CLASSE FOR "BTN-CLEAR" ATRIBUI O VALOR VAZIO " " PARA O INPUT
        else if (clicado.classList.contains("btn-clear")) {
          this.meuDisplay.value = "";
        }

        // SE A CLASSE FOR "BTN-DEL" APAGA O ULTIMO CARACTERE DA STRING
        else if (clicado.classList.contains("btn-del")) {
          this.meuDisplay.value = this.meuDisplay.value.slice(0, -1);
        } else if (clicado.classList.contains("btn-igual")) {
          this.realizaConta();
        }
      });
    },

    // FUNÇÃO QUE PEGA O VALOR ATRIBUIDO DENTRO DA FUNÇÃO
    //"CLIQUE BOTÕES" E ATRIBUI AO VALOR DO "INPUT" DO "MEU DISPLAY"
    btnParaDisplay(valor) {
      this.meuDisplay.value += valor;
    },
  };
}

// CONSTANTE QUE RECEBE A FUNÇÃO PRINCIPAL "CRIA CALCULADOR"
const calculadora = criaCalculadora();

// CHAMA O MÉDOTO "INICIA CALCULADORA" CRIADO NO OBJETO GERADO
// PELA FUNÇÃO "CRIA CALCULADORA"
calculadora.iniciaCalculadora();
