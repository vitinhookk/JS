// JAVASCRIPT

let texto = document.getElementById("texto")
function mudarTexto(){
    texto.innerText = "Texto Alterado"
}

function mudarCor(){
    texto.style.color = "blue"
    document.body.style.backgroundColor = "lightblue"
}

function trocarFundo(){
    let campo = document.getElementById("campo")
    campo.style.backgroundColor = "#5b61a1*"
}

let imagem = document.getElementById("imagem")
function troca(){
    imagem.src = "1.png"
}

function destroca(){
    imagem.src = "2.png"
}

let mensagem = document.getElementById("mensagem")
function trocaTexto(){
    mensagem.innerText = "Tire o mouse"
}

function destrocaTexto(){
    mensagem.innerText = "Passe o mouse"
}

function aparece(){
    let sumir = document.getElementById("sumir")
    if(sumir.style.display == "none"){
        sumir.style.display = "block"
} else {
    sumir.style.display = "none"
}
}

function aleatorio(){
    let tamanho = document.getElementById("tamanho")
    let novoTamanho = Math.floor(Math.random() * (40 - 10 + 1)) + 10
    tamanho.style.fontSize = novoTamanho + "px"
}