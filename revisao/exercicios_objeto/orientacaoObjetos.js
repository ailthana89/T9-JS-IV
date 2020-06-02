class signos {
    constructor(nome, elemento, regente){
    this.nome = nome;
    this.elemento = elemento;
    this.regente = regente;
 }
}

const pessoa1 = new signos ('Capricórnio', 'Terra', 'Saturno')
const pessoa2 = new signos ('Leão', 'Fogo', 'Mercúrio')

console.log(pessoa1)