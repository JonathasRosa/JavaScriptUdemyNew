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

/* criar classe por constructor

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
*/

/* Constutor por NEW
function Cachorro(raça, patas, cor) {
    this.raça = raça;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log('Auuuuuuuuu!!!')
    }
}

let husky = new Cachorro('Husky', 4, 'Cinza')

husky.uivar();
*/

/* Constructor com método
function Cachorro(raça, patas, cor) {
    this.raça = raça;
    this.patas = patas;
    this.cor = cor;
}
Cachorro.prototype.uivar = function () {
    console.log('Auuuuuuuu!!!')
}
Cachorro.prototype.latir = function () {
    console.log('Au Au Au')
}
let husky = new Cachorro('Husky', 4, 'Cinza')

husky.uivar();
husky.latir();
*/

/* Constructor na classe (ES6) 
class Cachorro {
    constructor(raça, patas, cor) {
        this.raça = raça;
        this.patas = patas;
        this.cor = cor;
    }
}
let labrador = new Cachorro('Labrador', 4, 'Amarelo')
console.log(labrador); 
*/

/* Override nas propriedades do prototype
class Cachorro {
    constructor(raça, cor) {
        this.raça = raça;
        this.cor = cor;
    }
    latir() {
        console.log('Au Au Au')
    }
}
Cachorro.prototype.raça = 'SRD';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas);
labrador.latir();
console.log(Cachorro.prototype.raça);
console.log(labrador.raça);
*/

/* Acessando com Symbols
class Cachorro {
    constructor(raça, cor) {
        this.raça = raça;
        this.cor = cor;
    }
    latir() {
        console.log("Au AU AU")
    }
}
Cachorro.prototype.raça = 'SRD';

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Amarelo')

console.log(labrador.patas)

labrador.latir();

console.log(Cachorro.prototype.raça);
console.log(labrador.raça);

//acessando symbol

console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);
*/

/* Getters and Setters
class Cachorro {
    constructor(raça, cor) {
        this.raça = raça;
        this.cor = cor;
    }
    latir() {
        console.log("Au Au")
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}
let pastor = new Cachorro('Pastor Alemão', 'Sem cor')

console.log(pastor);
pastor.setCor = 'Marron';
console.log(pastor.getCor);
*/

/* Herança//inheritance 
class Mamifero{
    constructor(patas) {
        this.patas = patas;
    }
}
let coiote = new Mamifero(4);

console.log(coiote.patas)

class Cachorro extends Mamifero {
    constructor(patas, raça) {
        super(patas, patas);
        this.raça = raça
    }
    latir() {
    console.log('Au Au');
    }
}
let pug = new Cachorro(4, 'Pug');
console.log(pug.patas)
pug.latir(); 
*/

/* Instanceof operator
class Mamifero{
    constructor(patas) {
        this.patas = patas;
    }
}
let coiote = new Mamifero(4);

console.log(coiote.patas)

class Cachorro extends Mamifero {
    constructor(patas, raça) {
        super(patas, patas);
        this.raça = raça
    }
    latir() {
    console.log('Au Au');
    }
}
let pug = new Cachorro(4, 'Pug');
console.log(pug.patas)
pug.latir(); 

console.log(new Cachorro instanceof Mamifero);

console.log(coiote instanceof Mamifero);
*/
