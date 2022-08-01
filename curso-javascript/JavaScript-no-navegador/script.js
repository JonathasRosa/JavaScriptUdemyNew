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

let newElement = document.createElement("p");
let texto = document.createTextNode("Testando o insertBefore.")

newElement.appendChild(texto);

let elementALvo = document.querySelector("#h2");
let elementFather = document.querySelector("#container-secundario-15");

elementFather.insertBefore(newElement, elementALvo);
