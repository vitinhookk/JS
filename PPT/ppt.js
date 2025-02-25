// Jogo pedra, papel, tesoura
//variaveis para armazenar os pontos do jogador e do pc

let placarJogador = 0
let placarPC = 0

// variavel para armazenar a quantidade de rodadas
let rodadas = Number(prompt("Digite a quantidade de rodadas:"))

// laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {

    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    // Solicita que o usuário informe qual ele quer 

    const escolhaPC = ["pedra", "papel", "tesoura"]
    [Math.floor(Math.random() * 3)]
    // Gera uma escolha aleatoria para o computador
    // Criamos um array com as opções e usamos o random para escolher uma de forma aleatoria
    alert(`Você escolheu ${escolhaJogador}`)
    alert(`O computador escolheu ${escolhaPC}`)
    // Mostrando qual foi a nossa escolha e qual foi a escolha o computador

    // Compara se a nossa escolha foi a do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") { 
        // criamos a primeira verificação de verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") { 
        // criamos a segunda verificação de verificação
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") { 
        // criamos a terceira verificação de verificação
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    // Mostramos o placar atual
    console.log("Placar: Jogador: ", placarJogador)
    console.log("Placar: Computador: ", placarPC)
}
// Mostramos o placar final// Placar Final
    alert(`Fim de jogo! Placar final: Jogador: ${placarJogador} x Computador: ${placarPC}`)

