// EXERCÍCIOS COM NÚMEROS

let num1 = Number(prompt("Digite um número ..."))

let numero = document.getElementById("numero")

let texto = document.getElementById("texto")

let text = document.getElementsByClassName("texto")

numero.innerHTML = num1

    // ALTERAR PROPRIEDADE CSS 

        const classeQueDesejoAlterar = ".texto";

        /* Lista e percorre todos os Stylesheet da página */
        for (let stylesheet of document.styleSheets) {

            /* Lista e filtra a regra do CSS */
            let cssRuleList = [...document.styleSheets[0].cssRules].filter(rule => rule.selectorText == classeQueDesejoAlterar)

            /* Percorre todas as regras encontradas e aplica o CSS. */
            for (let cssRule of cssRuleList) {
                cssRule.style.setProperty("display", "inline-block")
                cssRule.style.setProperty("width", "300px")
                cssRule.style.setProperty("background", "red")
                cssRule.style.setProperty("color", "yellow")
                cssRule.style.setProperty("padding", "30px")
                cssRule.style.setProperty("margin-left", "600px")
            }
        }

    // FIM ALTERAR PROPRIEDADE CSS

texto.innerHTML += (`<p> A Raiz quadrada do seu Número é = ${num1 ** 0.5} </p>`)
texto.innerHTML += (`<p> Seu número é inteiro ? = ${ Number.isInteger(num1)} </p>`)
texto.innerHTML += (`<p> O que foi digitado foi algo que não é um número ? = ${ Number.isNaN(num1)} </p>`)
texto.innerHTML += (`<p> Arredondado para baixo = ${ Math.floor(num1)} </p>`)
texto.innerHTML += (`<p> Arredondado para cima = ${ Math.ceil(num1)} </p>`)
texto.innerHTML += (`<p> Com apenas 2 casas decimais = ${ num1.toFixed(2)} </p>`)
