// 1

function aparece(){
    let sumir = document.getElementById("sumir")
    if(sumir.style.display == "none"){
        sumir.style.display = "block"
} else {
    sumir.style.display = "none"
}
}

// 2

function TemaEscuro() {
    let body = document.body
    let texto = document.getElementById("textoTema")
    body.style.backgroundColor = "black"
    texto.style.color = "white"
}

// 3

function completarTexto() {
    let texto = document.getElementById("textoCompletar")
    texto.innerText = "Meu nome é Victor, tenho 17 anos, moro em São Paulo, estudo no Senai e faço o curso de TDS."
}

// 4

let cores = ["green", "yellow", "blue"]
let indiceCor = 0

function trocarCorTexto() {
    let textoBrasil = document.getElementById("textoBrasil")
    textoBrasil.style.color = cores[indiceCor]
    indiceCor = (indiceCor + 1) % cores.length
}

// 5

function alertar() {
    alert("Pare de clicar no botão!")
}

// 6

function mostrarPremio(porta) {
    let premio = document.getElementById("premio")
    if (porta == 1) {
        alert("Você ganhou um carro!")
        premio.src = "carro.webp"
        premio.alt = "Carro"
    } else if (porta == 2) {
        alert("Você não ganhou nada!")
        premio.src = "vazio.jpg"
        premio.alt = "Caixa Vazia"
    } else if (porta == 3) {
        alert("Parabéns, você encontrou o tesouro!")
        premio.src = "tesouro.jpg"
        premio.alt = "Tesouro"
    }
    premio.style.display = "block"
}

// 7

function redimensionarImagem() {
    let imagem = document.getElementById("imagemRedimensionar")
    let tamanhoAleatorio = Math.floor(Math.random() * (300 - 20 + 1)) + 20
    imagem.style.width = tamanhoAleatorio + "px"
    imagem.style.height = tamanhoAleatorio + "px"
}

let clique = 0

function mudarCorsems() {
    let sem1 = document.getElementById("sem1")
    let sem2 = document.getElementById("sem2")
    let sem3 = document.getElementById("sem3")

    sem1.style.backgroundColor = "black"
    sem2.style.backgroundColor = "black"
    sem3.style.backgroundColor = "black"

    if (clique % 3 == 0) {
        sem3.style.backgroundColor = "green"
        alert("PODE IR!")
    } else if (clique % 3 == 1) {
        sem2.style.backgroundColor = "yellow"
        alert("ATENÇÃO!")
    } else if (clique % 3 == 2) {
        sem1.style.backgroundColor = "red"
        alert("PARE")
    }

    clique++
}

// 8

function mostrarPoster(elemento, poster) {
    elemento.src = poster;
}

function esconderPoster(elemento, texto) {
    elemento.src = texto;
}

