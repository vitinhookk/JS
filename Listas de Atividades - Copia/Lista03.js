// 1

let idade = prompt("Qual sua idade?")
console.log("Você tem ", idade, " anos")

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

// 2

let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}

// 3

let nota1 = prompt("Qual a primeira nota:")
let nota2 = prompt ("Qual a segunda nota:")
let total = (nota1 + nota2) / 2
if (total >= 7) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

// 4

let idade2 = prompt("Qual sua idade?") 
if (idade >= 18) {
    console.log("Entrada permitida")
} else {
    console.log("Entrada proibida")
}


// 5 

let senha = prompt("Digite a senha") 
if (senha == "082007") {
    console.log("Senha correta")
} else {
    console.log("Senha incorreta")
}


// 6 

let temp = prompt("Qual a temperatura") 
if (temp > 30) {
       console.log ("Está calor")
} else {
       console.log ("Está frio")
}

// 7 

let num = prompt("Digite um numero") 
if (num > 0) {
       console.log ("Número positivo")
} else {
       console.log ("Número negativo")
 }