/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01")
const msg = document.querySelector("#mensagem");

// Monitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Ola";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow"
});

subExemplo01.addEventListener("dblclick", function(){
    msg.textContent = "";
})

/* Exemplo 02: Modo Noturno */
const botao = document.querySelector("#noturno")
const pagina = document.querySelector("body")

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");
});
// toggle : alterna. Se liga, desliga.