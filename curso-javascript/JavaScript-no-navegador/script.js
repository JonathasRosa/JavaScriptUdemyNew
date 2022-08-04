/* EX: Acessando elementos/tags
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].innerText);
*/

//console.log(document.getElementsByTagName('h1'));
//console.log(document.getElementById('titulo-principal'));
//console.log(document.getElementsByClassName('itens'));
//console.log(document.querySelector('#container-principal h1'));
//console.log(document.querySelector('#container-secundario-1'));
//console.log(document.querySelector('footer p'));

/*
let newElement = document.createElement("p");
let texto = document.createTextNode("Testando o insertBefore.")

newElement.appendChild(texto);

let elementALvo = document.querySelector("#h2");
let elementFather = document.querySelector("#container-secundario-15");

elementFather.insertBefore(newElement, elementALvo);
*/
/*
let novoElemento = document.createElement("p");
let texto = document.createTextNode("Testando o appendChild.")

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode

pai.appendChild(novoElemento);
*/
/*
let novoElemento = document.createElement("p");
let texto = document.createTextNode("Testando replaceChild ");

novoElemento.appendChild(texto);

let heading = document.querySelector('#titulo-principal');
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
*/
/*
let pSemTexto = document.getElementById("sem-texto1");
let texto = document.createTextNode("Texto inserido através do DOM.");
pSemTexto.appendChild(texto);
*/
/*
let lista = document.createElement('ul');
for (i = 0; i < 5; i++) {
    let item = document.createElement('li');
    let texto = document.createTextNode("Lista criado com DOM " + i);
    item.appendChild(texto);
    lista.appendChild(item);
}
let p = document.getElementById('sem-texto2');
p.appendChild(lista);
*/
/*
let a = document.querySelector("a");
console.log(a.getAttribute('href'));

let link = 'https://github.com/JONATHASROSA';
a.setAttribute('href', link);
console.log(a.getAttribute('href'));
*/
/*
let elemento = document.querySelector('#container-principal');

console.log('Largura: ' + elemento.offsetWidth); //considera as bordas
console.log('Altura: ' + elemento.offsetHeight);

console.log('Largura: ' + elemento.clientWidth); //não considera as bordas
console.log('Altura: ' + elemento.clientHeight);
*/
/*
let elemento = document.querySelector('#titulo-principal');
console.log(elemento.getBoundingClientRect());
*/
/*
let elemento = document.querySelector('footer');
setTimeout(function () {
    elemento.style.color = 'red';
    elemento.style.backgroundColor = 'yellow';
    elemento.style.width = '400px';
    elemento.style.textAlign = 'center';
}, 1000);
*/
let itens = document.querySelectorAll('itens-protocolos');
