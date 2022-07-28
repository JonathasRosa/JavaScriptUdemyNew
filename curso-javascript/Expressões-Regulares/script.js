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

/*Operdores question (?)
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
*/

/*Ocorrência precisa
const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));

const telefone = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telefone.test("(88))9874-8745"));
console.log(telefone.test("(88))36987-1236"));
*/
/*Método Exec
const dígitos = /\d+/;

console.log(dígitos.exec("Tem o número 100 aqui."));
console.log(digitos.exec("Tem o número aqui."));
*/

/*Método match
const frase = "O número 100 está aqui".match(/\d+/);
const frase2 = "O número está aqui".match(/\d+/);
console.log(frase);
console.log(frase2);
*/

/*Choice pattern
let frutas = /\d+ (bananas|maçãs|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

const reg = /\w+: (Jonathas|Jefferson|Junior)/;

console.log(reg.test("Nome: Jonathas"));
console.log(reg.test("Nome: João"));
console.log(reg.test("Nome: Junior"));
*/
/* Vaidando domínio
const validarDomínio = /www.\w+\.com|com.br/; //Com WWW

console.log(validarDomínio.test("www.google.com"));
console.log(validarDomínio.test("www.test"));
console.log(validarDomínio.test("testando.com"));
console.log(validarDomínio.test("www.horadecodar.com.br"));
console.log(validarDomínio.test("www.horadecodar"));

const validaDomínio = /[?www.]\w+\.com|com.br/; //sem WWW


console.log(validaDomínio.test("www.google.com"));
console.log(validaDomínio.test("www.test"));
console.log(validaDomínio.test("testando.com"));
console.log(validaDomínio.test("www.horadecodar.com.br"));
console.log(validaDomínio.test("www.horadecodar")); 
*/

/* Validar email
let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("test@email.com"))
console.log(validarEmail.test("email@email"))
console.log(validarEmail.test("ronaldo@yahoo.com"))
console.log(validarEmail.test("email.com"))

const validaEmail = /\w+@\w+\.\w+/;

console.log(validaEmail.test("jonathasrosa85@gmail.com"));
console.log(validaEmail.test("matheus@gmail"));
console.log(validaEmail.test("gmail.com"));
console.log(validaEmail.test("jonathasrosa85@gmail.com.br"));
console.log(validaEmail.test("gmail@gmail.gmail.gmail"));
*/

/*Validar data de nascimento
let validarDataDeNascimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
//let validarDataDeNascimento = /^[1-31]{2}[/][1-12]{2}[/][1920-2022]{4}/;

console.log(validarDataDeNascimento.test('01/05/2000'));
console.log(validarDataDeNascimento.test('10/6/2025'));
console.log(validarDataDeNascimento.test('1/08/2018'));
console.log(validarDataDeNascimento.test('31/13/1985'));
console.log(validarDataDeNascimento.test('99/99/9999'));
*/