// este é apenas um exemplo de como criar nossos proprios modulos e exportar

class Person {
    constructor(name) {
        this.name = name
    }
    sayMayName() {
        return `Meu Nome é ${this.name}`
    }
}

module.exports = {
    Person,
}