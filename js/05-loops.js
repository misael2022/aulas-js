/* Estrturas tradicionais:

While     ->  enquanto
do/while  ->  faca/enquanto
for       ->  para
*/


// Exemplo loop while (enquanto)
console.log("while");

// Variavel de controle de loop
let i = 1;

while(i <= 10 ){
    console.log(`Valor de i: ${i}`);
    i++; //incremento
}

console.log("------------------------------------");

console.log("do/while");

let j = 1; //variavel de controle
do {
    console.log(`J vale ${j}`);
    j++;
} while ( j <= 3 ) // ou j < 4

console.log("-------------------------------------");

console.log("FOR");

for( let i = 1; i <= 5; i++ ){
    console.log(`I vale: ${i}`);
}

console.log("--------------------------------------");

console.log("Loop e Estrtura de Dados");

// ARRAY (vetor)
let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

for( let i = 0; i < 5; i++ ){
    console.log( alunos[i] );
}

/* Sort() -> função para ordenar arrays  */
// console.log( alunos.sort())

console.log("Loops exclusivos do JS");

// for/of: otimo para Arrays
for( let aluno of alunos){
    console.log(aluno);
}

let livro = {
    titulo: "Senhor dos Aneis",
    ano: 1954,
    Volumes: 3,
};

// for/in
for( let dados in livro ){
    console.log(livro[dados] );
}