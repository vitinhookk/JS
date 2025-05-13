const perguntas = [
    {
      pergunta: "Qual é a principal causa do efeito estufa na Terra?",
      opcoes: [
        "A diminuição do oxigênio na atmosfera",
        "A presença de gás carbônico (CO₂) em excesso",
        "A ausência de chuvas ácidas",
        "A camada de ozônio",
        "A presença de nitrogênio no ar"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da camada gasosa que envolve a Terra?",
      opcoes: [
        "Hidrosfera",
        "Litosfera",
        "Atmosfera",
        "Biosfera",
        "Geosfera"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma rocha sedimentar?",
      opcoes: [
        "Rocha formada pelo resfriamento do magma",
        "Rocha que surge do metamorfismo",
        "Rocha formada pela compactação de sedimentos",
        "Rocha originada de cristais",
        "Rocha formada exclusivamente de magma líquido"
      ],
      correta: 2
    },
    {
      pergunta: "Qual substância é usada para identificar a presença de amido nos alimentos?",
      opcoes: [
        "Ácido clorídrico",
        "Água destilada",
        "Vinagre",
        "Iodo",
        "Álcool etílico"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o principal gás responsável pela chuva ácida?",
      opcoes: [
        "Gás carbônico",
        "Gás oxigênio",
        "Gás metano",
        "Dióxido de enxofre (SO₂)",
        "Vapor d’água"
      ],
      correta: 3
    },
    {
      pergunta: "Qual é o nome do processo de separação de misturas usado para obter sal da água do mar?",
      opcoes: [
        "Destilação fracionada",
        "Peneiração",
        "Decantação",
        "Evaporação",
        "Filtração"
      ],
      correta: 3
    },
    {
      pergunta: "Qual destes planetas é conhecido por seus anéis?",
      opcoes: [
        "Marte",
        "Terra",
        "Saturno",
        "Mercúrio",
        "Netuno"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a composição principal da água?",
      opcoes: [
        "H₂SO₄",
        "CO₂",
        "H₂O",
        "NaCl",
        "CH₄"
      ],
      correta: 2
    },
    {
      pergunta: "O que acontece com a água quando ela ferve?",
      opcoes: [
        "Torna-se um sólido",
        "Torna-se um gás",
        "Torna-se um ácido",
        "Perde seus minerais",
        "Se transforma em sal"
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes fenômenos está relacionado ao movimento das placas tectônicas?",
      opcoes: [
        "Arco-íris",
        "Formação das nuvens",
        "Terremotos",
        "Evaporação da água",
        "Radiação solar"
      ],
      correta: 2
    }
  ];
  
let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", ()=>selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice){
    opcaoSelecionada = indice
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i)=>{
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}
function mostrarPontuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", ()=>{
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    }else{
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual< perguntas.length){
        mostrarPergunta()
    }else{
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", ()=>{
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})
mostrarPergunta()