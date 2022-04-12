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




function soma( valor1, valor2 ){
    let total = valor1 + valor2;
    return total;
}

console.log( soma(10, 5) );
//console.log( total ); // erro, pois e variavel local