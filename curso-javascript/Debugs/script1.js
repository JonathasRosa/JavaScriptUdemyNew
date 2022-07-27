/* "use strict"

// opa = "teste";
let opa = "teste";
//não consegue utilizar uma váriavel se ela não estiver definida por let, var ou const no começo.

//delete Object.prototype;
//Não pode deletar a propriedade prototype porque é uma objeto nativo do código.

function teste() { //nesse caso o strict funcionará somente dentro da função.
    "use strict"  // não consegue utilizar uma váriavel se ela não estiver definida por let, var ou const.
    // testando = "teste";
    let testando = "teste";
}
teste();

let o = { p: 1, p: 2 }  //também não pode definir duas propriedades com mesmo nome (p).
//Também não pode criar propriedade com tipos primitivas da linguagem. 
//false.prop = "";
//"teste".prop = "";
*/
/* debug com console.log
let a = 1;
let b = 2;
let c = 3;

if (c < a) {
    a + b;
    console.log(a);
}
for (let i = 5; i < 0; i++){
    b--;
    a = b + a - 1;
    c -= 1;
    console.log(a);
}
if (b == a) {
    a--;
} else {
    a = a - b - c;
    console.log(a);
}
a = a / b;
console.log(a);
*/

/* Debug com debugger.
let a = 1;
let b = 2;
let c = 3;

if (c > a) {
    a = b;
    debugger;
}
for (let i = 5; i > 0; i--){
    b++;
    a = a + c + 1;
    c += 2;
    debugger;
}
if (b == a) {
    a++;
} else {
    a = a + b + c;
    debugger;
}
a = a / b;
debugger;
console.log('teste');
*/

/* Tratamento de input por função.
function checarNumero(num) {
    let number = Number(num);
    if (Number.isNaN(number)) {
        alert("Por favor, passe somente números para o programa")
    } else {
        return number;
    }
}
checarNumero(5);
checarNumero("lknsd");

let number = prompt("Digite um número.");

checarNumero(number);
*/

function saudação(nome) {
    if (typeof nome != "string") {
        throw new Error("o parâmetro nome precisar ser uma string")
    } else {
        console.log(`Olá ${nome} .`)
    }
}
saudação("Jonathas");
// saudação(5);

console.log("teste");