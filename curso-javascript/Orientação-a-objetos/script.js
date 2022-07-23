/* ORIENTAÇÃO A OBJETOS
const cachorro = {
    uivar: function () {
        console.log("Auuuuuuuuuu...")
    }, 
    rosnar: function () {
        console.log("Grummmmmmmmmm")
    }
}

cachorro.uivar();
cachorro.rosnar(); 
*/

/* MÉTODOS
const cachorro = {
    raça: 'SDR',
    uivar: function () {
        console.log("Auuuuuuuuuu...")
    }, 
    rosnar: function () {
        console.log("Grummmmmmmmmm")
    },
    setRaça: function (raça) {
        this.raça = raça
    }, 
    getRaça: function() {
        return "A raça é" + this.raça
    }
}

console.log(cachorro.raça);

cachorro.setRaça('Pastor Alemão')

console.log(cachorro.raça) 
*/

/* PROTOTYPE 1

const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
*/

/* PROTOTYPE 2
const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'));

const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);

console.log(pessoaNova.hasOwnProperty('maos'));

console.log(Object.getPrototypeOf(pessoaNova) === pessoa);
*/

/* CLASSES
let cachorro = {
    patas: 4,
    raça: 'SDR',
    latir: function () {
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raça = 'Labrador';
console.log(labrador.raça);
console.log(cachorro.raça);

let pastor = Object.create(cachorro);

pastor.raça = 'Pastor Alemão';

console.log(pastor.raça);
*/

function criarCachorro(raça, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raça = raça;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log('Au Au')
    }
    return cachorro
}

let doberman = criarCachorro('Doberman', 4, 'preto');
console.log(doberman)
doberman.latir();


