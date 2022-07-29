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
