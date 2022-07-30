/* Callback
console.log("1");

setTimeout(function () {
    console.log("5");
}, 2000)

console.log("2");
console.log("3");
console.log("4");
*/

/* Promises
let promessa = Promise.resolve(4 + 8);
console.log('Algum código');
promessa.then((value) => console.log(`A soma é ${value}`));

let p = Promise.resolve(5);

console.log("Outros códigos teste.")

console.log(p);

p.then((value) => { return value + 5 })
 .then((value) => { console.log(value) });
*/

/* Falha no promisse como concertar com próprio código.

let p = Promise.resolve(new Error("Não deu certo"));

console.log("lalala");

p.then(value => console.log(value))
    .catch(reason => console.log("Falhou: " + reason));
 
let promisesErrada = Promise.resolve(new Error("Algo deu errado"))
*/
/* Promises - Reject
function verificarNumero(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log(`O numero é ${num}`));
        } else {
            reject(new Error("Falhou"));
        }
    });
}
verificarNumero(2);
verificarNumero(3);
*/

/* EX-1: All - Promises

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(100);
    }, 2500);
})
const p2 = Promise.resolve(5);
const p3 = new Promise(function(resolve, reject) {
    resolve(10);
});
Promise.all([p1, p2, p3]).then((values) => console.log(values));
*/

/*EX-2: All - Promises

const p1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(15);
    }, 5000);
});
const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
    resolve(12);
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));
*/
/* EX-1: Async function
async function somar(a,b) {
    return a + b;
}
somar(2,2).then(function(value){
    console.log(value);
});

EX-2: Async Function
async function somar(a, b) {
    return a + b
        ;
} 
console.log(somar(2, 4));

somar(2, 4).then(value => console.log(value));*/

function somaComDeley(a,b)