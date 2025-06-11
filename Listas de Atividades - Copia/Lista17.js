
// Exercicio 1
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`)
    }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', 1178)
livro1.mostrarDetalhes()


// Exercicio 2
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente')
        } else {
            this.saldo -= valor
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`)
        }
    }

    verSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}

const conta1 = new ContaBancaria('Ana')
conta1.verSaldo()
conta1.depositar(500)
conta1.sacar(200)
conta1.verSaldo()
conta1.sacar(1000)


// Exercicio 3
class Pet {
    constructor(nome, especie, idade, som) {
        this.nome = nome
        this.especie = especie
        this.idade = idade
        this.som = som
    }

    apresentar() {
        console.log(`${this.nome} é um(a) ${this.especie}, tem ${this.idade} anos e faz "${this.som}".`)
    }
}

const cachorro = new Pet("Ice", "Salsinha", 3, "Au Au")
cachorro.apresentar()

const gato = new Pet("Mingau", "Siames", 2, "Miau")
gato.apresentar()


// Exercicio 4
class Filme {
    constructor(titulo, genero, duracao) {
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }

    exibirInfo() {
        console.log(`Você está assistindo "${this.titulo}", um filme de ${this.genero} que dura ${this.duracao} minutos.`)
    }
}

const filme = new Filme("Vingadores: Guerra Infinita", "Ação, Aventura", 192)
filme.exibirInfo()


// Exercicio 5
class Musica {
    constructor(titulo, autor, duracao) {
        this.titulo = titulo
        this.autor = autor
        this.duracao = duracao
    }

    tocar() {
        console.log(`Tocando "${this.titulo}" de ${this.autor} (${this.duracao} min)`)
    }
}

function criarMusica(nome, artista, tempo) {
    return new Musica(nome, artista, tempo)
}

const musica1 = criarMusica("Jogado Pelo Mundão", "Mc Negão Original", 2.13)
musica1.tocar()

ir