    /* alt SHIFT A
    comentario de multiplas */

    // CTRL ; comentario de linha única

    // Comando de saida de dados

    /* Sempre que trabalhar com textos devemos coloca-los entre aspas SIMPLES '', DUPLAS "" ou crase ´´ */

    console.log("Olá JavaScript!");

    /* Variaveis e constantes,
    Espaços identificados na memoria para armazenar dados temporariamente */

    // Variavel
    // Obs.: antigamente, era usado "Var"
    let ano = 2022;

    // Constante: Valor imutavel (não muda)
    const aluno = "Misael"
    // const aluno = prompt()
    
    console.log(ano);
    console.log(aluno);

    console.log(ano, aluno);

    /* Operações matematicos 
    + (adição)
    - (subtração)
    / (divisão)
    * (multiplicação)*/

    let preco = 1500;
    let desconto = 250;
    let precoFinal = preco - desconto;

    console.log(preco, desconto, precoFinal);

    let produto = "Tv led";

    /* A TV Led custava 1500 reias. */

    // 1. forma (tradiconal) - CONCATENAÇÃO
    console.log("A "+produto+" custava "+preco+" reais.");

    // 2. forma (moderna) - Template String/Literal
    console.log(`A ${produto} custava ${preco} reias.`)
