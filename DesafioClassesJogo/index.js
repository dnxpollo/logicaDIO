class Classe{
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo = tipo
    
        if(tipo === 'mago'){
            this.ataque = 'magia'
        } else if(tipo === 'guerreiro'){
            this.ataque = 'espada'
        } else if(tipo === 'monge'){
            this.ataque = 'artes marciais'
        } else if(tipo === 'ninja'){
            this.ataque = 'shuriken'
        } else {
            this.ataque = 'ataque básico'
        }
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.ataque}`
    }     
} 

const c1 = new Classe('Gorgon', 300, 'mago')
console.log(c1.atacar())

const c2 = new Classe('Jackie', 30, 'samurai')
console.log(c2.atacar())

const c3 = new Classe('Ace Ventura', 80, 'monge')
console.log(c3.atacar())

const c4 = new Classe('Minato', 20, 'ninja')
console.log(c4.atacar())

const c5 = new Classe('Max', 50, 'tanque')
console.log(c5.atacar())


