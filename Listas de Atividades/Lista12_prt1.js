// 1

function JavaScript() {
    console.log("Eu gosto de JavaScript")
}

JavaScript();

// 2

function contarAteCinco(){
    for(let i = 1; i <= 5; i++){
        console.log(i)
    }
}

contarAteCinco();

// 3

nome = prompt("Digite seu nome")
function saudacao(nome){
    console.log('Olá, ' + nome + '! Seja bem-vindo(a)!')
}
saudacao(nome);

// 4

function multiplicarDoisNumeros(a, b){
    let resultado = a * b
    return resultado
}
console.log(multiplicarDoisNumeros(5, 10));

// 5

let idade = prompt("Digite sua idade")
function verificarIdade(idade){
    if(idade >= 18){
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}
verificarIdade(idade);

// 6

let a = Number(prompt ("Digite um número"));
let b = Number (prompt ("Digite outro número"));
function somar(a, b){
    
    let resultado = a + b 
    return resultado
}
console.log(somar(a, b))

// 7

function calcularAreaRetangulo(base, altura){
    let area = base * altura
    return area
}
console.log(calcularAreaRetangulo(5, 10));

// 8

function compararIdade(idade1, idade2) {
    if (idade1 > idade2) {
        console.log("A primeira pessoa é mais velha")
    } else if (idade2 > idade1) {
        console.log("A segunda pessoa é mais velha")
    } else {
        console.log("As duas pessoas têm a mesma idade")
    }
}

let idade1 = prompt("Digite a idade da primeira pessoa:")
let idade2 = prompt("Digite a idade da segunda pessoa:")

compararIdade(idade1, idade2);