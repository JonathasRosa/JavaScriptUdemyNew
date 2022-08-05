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