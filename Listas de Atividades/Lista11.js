// 1

let filmes = ["O Senhor dos Anéis", "Matrix", "Inception"]
console.log(filmes[0])

// 2

let frutas = ["Banana", "Maçã", "Morango", "Uva", "Pera"]
console.log(frutas[2])

// 3

let cores = ["Vermelho", "Azul", "Verde"]
cores.push("Amarelo")

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

// 4

let numeros = [1, 2, 3, 4]
console.log("remove o último da lista")
numeros.pop()
console.log(numeros)

// 5

let cidades = ["São Paulo", "Rio de Janeiro", "Curitiba"]

console.log(cidades[0])

cidades.unshift("Porto Alegre")
console.log(cidades)

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

// 6

let animais = ["Cachorro", "Gato", "Pássaro"]
animais.shift()

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}

// 7

let carros = ["Toyota", "Honda", "Ford", "Chevrolet"]
console.log("Quantidade de carros: " + carros.length)

// 8

let numerosArray = [] 


numerosArray.push(10)
numerosArray.push(20)
numerosArray.push(30)

numerosArray.unshift(5)

numerosArray.pop()

numerosArray.shift()

console.log("Array final:", numerosArray)
console.log("Tamanho do array:", numerosArray.length);