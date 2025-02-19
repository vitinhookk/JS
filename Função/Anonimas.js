// Função anonima
let  saudacao = function(nome) {
    console.log("Oi,", nome)
}
saudacao("Juliana")
saudacao("Felipe")
// Arrow function (função da seta)
let cumprimento = (nome) => {
    console.log("Oi", nome)
}
cumprimento("Luiz")
cumprimento("José")

// Função anonima
let soma = function(a,b){
    let resultado = a + b
    return resultado
}
console.log(soma(5,3))

// Arrow Function
let adicao = (a,b) => {
    let resultado = a + b
    return resultado
}
console.log(adicao(6,4))

// Função anonima 
let dobra = function(numero) {
    let resultado = numero * 2
    return resultado
}
console.log(dobro(5))

// Arrow Function
let vezesDois = (numero) => {
    let resultado = numero * 2
    return resultado
}
console.log(vezesDois(8))