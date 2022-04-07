/* Estruturas de Dados no JavaScript 

ARRAY (VETOR) lista de dados indexados */ 

let alunos = ["tiago", "joão", "marilia", "Vagner"];

// Acessando o aluno armazenamento no Ìndice 1
console.log(alunos[1]); //João
console.log(alunos[3]); //Vagner

// Da forma abaixo, conseguimos ver os Ìndices (numeros)
console.log(alunos);

let dados = ["marcos oliveira", 14, "São paulo", "São paulo"]

console.log(dados[0]);
console.log(dados[2]);

console.log(dados)

console.log(
    `${dados[0]} e da cidade de ${dados[3]} e tem ${dados[1]} anos e mora na cidade de ${dados[3]}`
)

console.log("-------------------------------------------------");

/* OBJETO 
Lista de dados não-indexados */

// (variavel = "let")

let filme = {
    // propiedade: valor
    titulo: "Homen Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    clasificacao: 16
};

console.log(filme.titulo);
console.log(filme.genero);
console.log(`${filme.titulo} foi lançado em ${filme.ano} com clasificção + ${filme.clasificacao}`)

console.log("------------------------------------------------------")

let loja = {
    data: "07/04/2022",
    produto: "Televisão",
    preco: "R$ 1500",
    entrega: 7
}

console.log(`Foi comprado uma ${loja.produto} por ${loja.preco} no dia ${loja.data} com em entrega ${loja.entrega} dias uteis.`)
