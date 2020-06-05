// // CLIENTE1: 
// // 	Nome: Dora Barreto 
// // 	CPF: 223.001.221-29
// // 	Valor da compra: R$ 2.000,00
// // 	Modelo do celular: XXX-12
// // 	Ano do celular: 2020
// // 	Cor do celular: Amarelo
// // 	Loja: RJ-BR
// // 	Atendente: Joana Maria 


// // 	CLIENTE2: 
// // 	Nome: Marcela Janino Silva 
// // 	CPF: 321.101.231-29
// // 	Valor da compra: R$ 1.300,00
// // 	Modelo do celular: XXM-y
// // 	Ano do celular: 2019
// // 	Cor do celular: ROXO
// // 	Loja: SP-BR
// // 	Atendente: Drielly Gomes Almeida


// // 	CLIENTE3: 
// // 	Nome: Raquel Borges Figueredo
// // 	CPF: 910.311.425-01
// // 	Valor da compra: R$ 4.000,00
// // 	Modelo do celular: MDM-PRO
// // 	Ano do celular: 2020
// // 	Cor do celular: AZUL
// // 	Loja: MG-BR
// // 	Atendente: Fran Carneiro de Pinha

class clientes {
    constructor(nome, cpf, valor, modeloCelular, anoCelular, corCelular, loja, nomeAtendente){
        this.nome = nome;
        this.cpf = cpf;
        this.dataCompra = new Date();
        this.valor = valor;
        this.modeloCelular = modeloCelular;
        this.anoCelular = anoCelular;
        this.corCelular = corCelular;
        this.loja = loja;
        this.nomeAtendente = nomeAtendente;
    }   
    
  descontar() {
    if (this.valor <= 1500){
        return `Desconto de 5%`
    }else if (this.valor <= 3000){
        return `Desconto de 7%`
    }else (this.valor >= 3000)
        return `Desconto 10%`
    }
    }
    

    const cliente1 = new clientes ('Dora Barreto', '223.001.221-29', 800, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria')
    console.log('Primeira cliente: ', cliente1)
    console.log('Quail valor de desconto?', cliente1.descontar())
    
    const cliente2 = new clientes ('Marcela Janino Silva', '321.101.231-29', 1550, 'XXM-y', 2019, 'Roxo', 'SP-BR', 'Drielly Gomes Almeida' )
    console.log('Segunda cliente: ', cliente2)
    console.log('Quail valor de desconto?', cliente2.descontar())
    
    const cliente3 = new clientes ('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', '2020', 'Azul', 'MG-BR', 'Fran Carneiro de Pinha' )
    console.log('Terceira cliente: ', cliente3)
    console.log('Quail valor de desconto?', cliente3.descontar())
    
    
    
    
    
    // verificarCor (){
    //     const cores = this.corCelular === 'Roxo' ? `Disponível` : `Indisponível`
    //     return cores;
    // } 
    
    //Resolução em bloco
    // verificarCor() {
    //     if (this.corCelular === 'Roxo'){
    //         return `Cor roxo disponível`
    //     }else{
    //         return `Cores indisponíveis no momento, dispomos apenas da cor roxa`
    //  }
    // }

    // {
    
    // //       ---Bloco---
    // // if(this.valor < 1500) {
        //     //     return `Terá um desconto de 10%`
        //     // }else{
            //         //     return `Não terá desconto`
            //         // }
        
//         // const cliente4 = new clientes ('Nathalia', '223.001.221-29', '03.06.2020', '1200', 'X350', '2020', 'Laranja', 'Sé', 'Camila' )
        
//         // const cliente5 = new clientes ('Maria', '321.101.231-29', '03.06.2020', '1500', 'XXR7', '2020', 'Prata', 'Bom retiro', 'Norma' )

// // const cliente6 = new clientes ('José', '910.311.425-01', '03.06.2020', '2000', 'X900', '2020', 'Marrom', 'República', 'Ailton' )


// // class Colaboradores {
// //     constructor(nome, departamento, funcao){
// //     this.nome = nome;
// //     this.departamento = departamento;
// //     this.funcao = funcao;
// //     }
// // }

// // class Usuario {
// //     constructor(nome, email, confirmacaoEmail){
// //     this.nome = nome;
// //     this.email = email;
// //     this.confirmacaoEmail = confirmacaoEmail;
// //     }
// // }

// // class Colaboradores{
// //     constructor(nome, departamento, funcao){
// //     this.nome = nome;
// //     this.departamento = departamento;
// //     this.funcao = funcao;
// //     }
// //     }
    
// //     const colaborador1 = new Colaboradores('Jenifer', 'Engenharia', 'Engenheira de Dados')
    
// //     console.log(colaborador1);

//     //5) Crie um metodo que confirme se os dois emails são iguais ou diferentes. Lembre-se de tratar o campo de emails, colocando-os em letras minúsculas e testando o código para verificar se realmente deu certo. 

    // class Usuario {
    //     constructor(nome, email, confirmacaoEmail) {
    //     this.nome = nome;
    //     this.email = email;
    //     this.confirmacaoEmail = confirmacaoEmail;
    // }
    // confirmEmail () {
    //     const validacao =  usuario1 === usuario2 ? `email válido` : `email inválido`
    //     return validacao;
    //   }
    // }
    //     const usuario1 = new Usuario ('Mariana', 'mari@email.com', 'Válido')
    //     const usuario1 = new Usuario ('Affonso', 'affonso@email.com', 'Válido')
  

  
    // //   6. Insira uma propriedade chamada sobrenome na classe Usuario. 
    // //Em seguida, crie um método de saudações e retorne a seguinte frase: `Olá nome sobrenome, seja bem vinda a plataforma de estudos da Reprograma!`

    //   class Usuario {
    //   constructor(nome, email, confirmacaoEmail, sobrenome) {
    //   this.nome = nome;
    //   this.email = email;
    //   this.confirmacaoEmail = confirmacaoEmail;
    //   this.sobrenome = sobrenome;
    //   }
      
    //   saudacao (){
    //       const entrada = this.confirmacaoEmail === true ? `Olá ${nome} ${sobrenome}, seja bem vinda a plataforma de estudos da Reprograma!` : `Inserir email válido` 
    //       return entrada;
    //   }
    //   }
    // ﻿
        

