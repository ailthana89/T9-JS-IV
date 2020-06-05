<<<<<<< HEAD
<<<<<<< HEAD
class cliente {
    constructor(nome, email, cpf) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }
}

const cliente1 = new cliente('Nathalia', 'nathy@email.com', 'XXX.XXX.XXX-XX')
 
console.log('Dados da cliente: ', cliente1)



// Utilizando a Orientação a Objetos para modular, de forma mais legível, crie uma classe, com o metódo constructor, atribua os parametros no metódo e em seguida, insira as propriedades e valores dentro do constructor.

class Celular{ 
    constructor (nome, modelo, valor){
     this.nome = nome;
     this.modelo = modelo;
     this.valor = valor;
    }
  }

const tipoCelular = new Celular('Nokia', '908-2', '1200')
=======
class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}
=======
import { Cliente } from './Cliente.js';
>>>>>>> cdb3cdde2f33b31c1f6ee5aff5b52e937395d0ca


<<<<<<< HEAD
console.log("Dados da cliente: ", cliente1);
>>>>>>> 69c17fa6c08022ad15f5d61ddc392b158f7fcb79
=======
const cliente1 = new Cliente('Dora Ribeiro', '223.001.221-29', 1500, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria ')
console.log('Primeira cliente: ', cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificarCor())


console.log('------------------------')

const cliente2 = new Cliente('Marcela Janino Silva', '321.101.231-29', 3000, 'XXM-y', 2019, 'Roxo', 'SP-BR', 'Drielly Gomes Almeida')
console.log('Segunda cliente: ', cliente2)
console.log(cliente2.verificarCor())
console.log(cliente2.descontar())


console.log('------------------------')

const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', 2020, 'Azul', 'MG-BR', 'Fran Carneiro de Pinha')
console.log('Segunda cliente: ', cliente3)
console.log(cliente3.descontar())

>>>>>>> cdb3cdde2f33b31c1f6ee5aff5b52e937395d0ca
