'use strict'; // MODO ESTRITO

/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.

Usar funções tanbem e uma forma de separar a logica e organizar melhor sua programacao.*/
// Sintaxe tradicional
function linha(){
    console.log("-----------------------------------------");
}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`Ano: ${ano}`);

/* function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
} */

// console.log( soma(10, 5) );
//console.log( total ); // erro, pois e variavel local

/* funtion soma( valor1. valor2 ){
    let total = valor1 + valor2;
    return total;
} */

// VERSÃO 2: sintaxe ARROW FUNCTION (FUNÇÃO SETA/FLECHA)
const soma = (valor1, valor2) => {
    let total = valor1 + valor2;
    return total;
}

// Arrow Function com retorno IMPLICITO
const soma1 = (valor1, valor2) => valor1 + valor2;

console.log( soma1(150, 55) );
// console.log( total ); // erro, pois e varivel local

let resultado = soma(100, 50);


linha();

// Versão 1: tradiconal
/* funtion dobra = (numero) => {
//     let resultado = numero * 2;
//     return resultado;*/

// RETURN e capaz de processar antes de existir o resultado, permitindo colocar a formula para reduzir o codigo.

/* function dobra(numero){
    let resultado = numero * 2;
    return numero * 2;
} */

// Versão 2: arrow function
// const dobra = (numero) => {
//     let resultado = numero * 2;
//     return resultado;
// }

// const dobra = (numero) => {
//     return numero * 2;
// }

// retorno IMPLICITO (remove {} e return)
// Obs.: como so temos um parametro (numero), pode tirar os ()
const dobra = (numero) => { return numero * 2 };


console.log(dobra(10));
console.log(dobra(150));

linha();

let nota1 = 8.5;
let nota2 = 7.4;

const calculaMedia = (n1, n2) => (n1 + n2)/ 2;

console.log( calculaMedia(nota1, nota2) );

// Obs.: se nao tem parametros, tanbem presica usar ()
const linha2 = () => console.log("*****");

