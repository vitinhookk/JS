let titulo = document.getElementById("titulo")
// document = HTML
// getElementById = pegue o elemento pelo ID
// Logo, quando fizemos isso guardamos o que estava no html em uma variável no js
console.log(titulo.inertText)
// ----------------------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto alterado"
// Desse jeito trocamos o texto de uma tag
texto.style.color = "blue"
// Usando o style podemos mexer no css
// ----------------------------------------------------------
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})
//-----------------------------------------------------------
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function(){
    duplo.style.backgroundColor = "red"
})
//Só acontece quando clicamos duas vezes
// ----------------------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function() {
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"

})// o mouseover é quando o mouse está sobre o elemento
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse está aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"

})//o mouseout é quando o mouse está fora do elemento