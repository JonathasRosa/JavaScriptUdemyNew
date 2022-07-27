/* REGEX
const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem."));

const reg2 = /bola/;
let text = 'Tem bola na cesta.'

console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem."));
console.log(reg2.test(text));

console.log(/quadrado/.test("Onde tem um quadrado?"));
console.log(/quadrado/.test("klnwcbnwljkenquadrado561843167653"));
*/

/*Conjunto de caracteres
const reg1 = /[12345]/

console.log(reg1.test("Temos o múmero 6"));
console.log(reg1.test("Temos o múmero 2"));
console.log(reg1.test("Temos o múmero 23"));
console.log(reg1.test("Temos o múmero 60"));

const reg2 = /[0-9]/;

console.log(reg2.test("Temos o número 65448484884845848484"));
console.log(reg2.test("Temos o número"));
*/

/*
const pontoRegex = /./;

console.log('.'); // Regex/./
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("asd123"));

const dRegex = /\d/;

console.log('d'); // Regex/\d/ [0-9]
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("asd123"));

const dRegex2 = /\D/;

console.log('D'); // Regex/\Ñ^0-9] 
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("asd123"));

const sRegex = /\s/;

console.log('s'); // Regex caractere de espaço em branco.
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("asd123"));

const wRegex = /\w/;

console.log('w');
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("asd123"));

const dia = /\d\d/;

console.log(dia.test("2022") && "2022".length == 2);
console.log(dia.test("asdf"));
console.log(dia.test("05") && "05".length == 2);
console.log(dia.test("asdf1"));

const palavrasPeloMenosTresLetras = /\w\w\w/;

console.log(palavrasPeloMenosTresLetras.test("asd"));
console.log(palavrasPeloMenosTresLetras.test("asdf"));
console.log(palavrasPeloMenosTresLetras.test("as")); 
*/

/*Operador NOT
let palavrasSemAeB = /[^123]/;

console.log(palavrasSemAeB.test("1112"));
console.log(palavrasSemAeB.test("14"));
console.log(palavrasSemAeB.test("1")); 

const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/;

console.log(notab.test("123 as"));
console.log(notab.test("mwehbvfwlkemfvwklemfvLÇSADM,VPOawjegçlwemg"));

const az = /[a-z]/;

console.log(nottoaz.test("asd1587dfrf5e33fr"));
*/

/*Operador plus +
let muitosOuPoucosDigitos = /\d+/; 

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("0123456789"));
console.log(muitosOuPoucosDigitos.test(" "));

let umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("123456"));
console.log(umOuMaisNumeros.test(" "));
console.log(umOuMaisNumeros.test("asdfghjklç"));
console.log(umOuMaisNumeros.test("1a2b3c4d5f6g"));
*/

let opcional = /Prova\s?\d?/;

console.log(opcional.test("Prova"));
console.log(opcional.test("Prova 1"));
console.log(opcional.test("Prova 2"));

const padrão = /Abacax?i/;

console.log(padrão.test("Abacaxi"));
console.log(padrão.test("Abacai"));

const padrão2 = /\d+\w?/;

console.log(padrão2.test("123"));
console.log(padrão2.test("123a"));
console.log(padrão2.test("123 "));


