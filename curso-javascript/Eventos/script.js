/* Como criar um evento.
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("clicou em mim!");
});
*/
/* Removendo eventos
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg() {
    console.log("clicou em mim!");
}

btn1.addEventListener("click", msg);
btn2.addEventListener("click", () => {
    btn1.removeEventListener("click", msg);
});
*/
/* O Objeto do evento
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");

function msg(e) {
    console.log(e);
}

btn3.addEventListener("click", msg);
btn4.addEventListener("click", function(event) {
    console.log(event);
});
*/
/* Propagação
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let p = document.querySelector('#p-ex')

function msg(e) {
    console.log("clicou no button");
    e.stopPropagation();
}

btn5.addEventListener("click", msg);

btn6.addEventListener("click", function(event) {
    console.log(event);
});
p.addEventListener("click", function() {
    console.log("clicou no paragrafo");
});
*/
/*Ações default
let a = document.querySelector("a");

a.addEventListener("click", function (e) {
    console.log("clicou");
    e.preventDefault();
    console.log("Mas não vai mudar de link")
})
*/
/* Eventos de tecla - Keyup e keydown
window.addEventListener("keydown", function (e) {
    if (e.key == 'q') {
        console.log("apertou aletra q");
    } else if (e.key == "Enter") {
        console.log("Apertou Enter");
    }
});
window.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        console.log("Soltou o enter");
    }
});
*/
/* Eventos de mouse
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");

btn7.addEventListener("mousedown", function () {
    console.log("Apertou o botão");
});
btn7.addEventListener("mouseup", function () {
    console.log("Soltou o botão");
});
btn8.addEventListener("dblclick", function () {
    console.log("Clicou o botão 2x");
});
btn8.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    console.log("Botão direito");
});
*/
/*
window.addEventListener("mousemove", function (e) {
    console.log(e.x);
    console.log(e.y);
});
*/
/*
window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 150) {
        console.log("Ativou");
    }
});
*/
/* Eventos por Foco
let input = document.querySelector("#input1");
input.addEventListener("focus", function () {
    console.log("entrou no input");
});

input.addEventListener("blur", function () {
    console.log("Saiu do input");
});
*/

/*Evento de carregamento
window.addEventListener("load", function () {
    alert("Assine nossos termos de uso!");
});

window.addEventListener("beforeunload", function (e) {
    Event.returnValue = null;
});
*/
window.addEventListener("mousemove", function (e) {
    this.setTimeout(fuction(){
        console.log(e.x)
    })
})