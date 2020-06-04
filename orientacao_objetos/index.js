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

const cliente1 = new Cliente('Jéssica', 'jessica@email.com', 'XXX.XXX.XX-XX')

console.log("Dados da cliente: ", cliente1);
>>>>>>> 69c17fa6c08022ad15f5d61ddc392b158f7fcb79
