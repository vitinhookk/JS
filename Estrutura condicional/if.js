// Estrutura condicional - if else

let idade = prompt("Qual sua idade?")
console.log("Sua idade é ", idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
console.log("-------------------------------")
//Verificando se um número é impar ou par
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
// Avaliação do aluno
let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt ("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7) {
}