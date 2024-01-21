class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`O herói do tipo ${this.tipo} atacou com ${this.ataque}`)
    }
}

let heroiGuerreiro = new heroi("Jack", "25", "guerreiro", "espada")
let heroiMago = new heroi("Harry", "50", "mago", "magia")
let heroiMonge = new heroi("Lee", "70", "monge", "artes marciais")
let heroiNinja = new heroi("Max", "35", "ninja", "shuriken")

heroiGuerreiro.atacar()
heroiMago.atacar()
heroiMonge.atacar()
heroiNinja.atacar()