/* Estrutura Condicional
if (se), else (senão), else if (senão se)

Operadores relacionais 9usados com condicionais)
>  maior que
<  menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente */


// Exemplo 1: condicional SIMPLES
let numero = 10;

if(numero > 0){
    console.log(`${numero} e maior que zero`);
}

// Exemplo 2: condicional COMPOSTA (IF/ELSE)
let aluno = "João";
let nota = 6.5;
let nota2 = 7.6;
let nota3 = 6.5;
let nota4 = 8.0;
let media = (nota + nota2 + nota3 + nota4) / 4;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota},${nota2},${nota3} e ${nota4}`);
console.log(`Media: ${media}`);

let faltas = 14;
console.log(`Faltas: ${faltas}`);

let situacao;
if( media >= 7 && faltas < 15){
    situacao = "aprovado";
} else {
    situacao = "Reprovado";
}
console.log(situacao);

// Exemplo 3: condicional ENCADEADA (IF, ELSE IF, ELSE)
let desempenho;
if(media < 3){
    desempenho = "pesimo";
} else if(media < 5){
    desempenho = "ruim"
} else if (media < 7){
    desempenho = "regular"
} else if (media < 9) {
    desempenho = "bom";
} else {
    desempenho = "otimo";
}
console.log(desempenho);

