// CLIENTE1: 
// 	Nome: Dora Barreto 
// 	CPF: 223.001.221-29
// 	Valor da compra: R$ 2.000,00
// 	Modelo do celular: XXX-12
// 	Ano do celular: 2020
// 	Cor do celular: Amarelo
// 	Loja: RJ-BR
// 	Atendente: Joana Maria 


// 	CLIENTE2: 
// 	Nome: Marcela Janino Silva 
// 	CPF: 321.101.231-29
// 	Valor da compra: R$ 1.300,00
// 	Modelo do celular: XXM-y
// 	Ano do celular: 2019
// 	Cor do celular: ROXO
// 	Loja: SP-BR
// 	Atendente: Drielly Gomes Almeida


// 	CLIENTE3: 
// 	Nome: Raquel Borges Figueredo
// 	CPF: 910.311.425-01
// 	Valor da compra: R$ 4.000,00
// 	Modelo do celular: MDM-PRO
// 	Ano do celular: 2020
// 	Cor do celular: AZUL
// 	Loja: MG-BR
// 	Atendente: Fran Carneiro de Pinha

class clientes {
    constructor(nome, cpf, dataCompra, valor, modeloCelular, anoCelular, corCelular, loja, nomeAtendente){
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
    
    //Resolução em bloco
    // verificarCor() {
    //     if (this.corCelular === 'Roxo'){
    //         return `Cor roxo disponível`
    //     }else{
    //         return `Cores indisponíveis no momento, dispomos apenas da cor roxa`
    //  }
    // }

    // {
        
    //Resolução com ternário
        verificarCor (){
            const cores = this.corCelular === 'Roxo' ? `Disponível` : `Indisponível`
            return cores;
        } 
       }
    const cliente1 = new clientes ('Dora Barreto', '223.001.221-29', '03.06.2020', '800', 'XXX-12', '2020', 'Amarelo', 'RJ-BR', 'Joana Maria')
    console.log('Primeira cliente: ', cliente1)
    console.log('Quais cores disponíveis?', cliente1.verificarCor())
    
    const cliente2 = new clientes ('Marcela Janino Silva', '321.101.231-29', '03.06.2020', '1300', 'XXM-y', '2019', 'Roxo', 'SP-BR', 'Drielly Gomes Almeida' )
    console.log('Segunda cliente: ', cliente2)
    console.log('Quais cores disponíveis?', cliente2.verificarCor())
    
    const cliente3 = new clientes ('Raquel Borges Figueredo', '910.311.425-01', '03.06.2020', '4000', 'MDM-PRO', '2020', 'Azul', 'MG-BR', 'Fran Carneiro de Pinha' )
    console.log('Terceira cliente: ', cliente3)
    console.log('Quais cores disponíveis?', cliente3.verificarCor())






//  descontar() {
//     ---ternário---
//     const desconto = this.valor < 1500 ? `Terá desconto de 10%` : `Não terá desconto`
//     return desconto;

//       ---Bloco---
// if(this.valor < 1500) {
    //     return `Terá um desconto de 10%`
    // }else{
        //     return `Não terá desconto`
        // }
        
        // const cliente4 = new clientes ('Nathalia', '223.001.221-29', '03.06.2020', '1200', 'X350', '2020', 'Laranja', 'Sé', 'Camila' )
        
        // const cliente5 = new clientes ('Maria', '321.101.231-29', '03.06.2020', '1500', 'XXR7', '2020', 'Prata', 'Bom retiro', 'Norma' )

// const cliente6 = new clientes ('José', '910.311.425-01', '03.06.2020', '2000', 'X900', '2020', 'Marrom', 'República', 'Ailton' )
