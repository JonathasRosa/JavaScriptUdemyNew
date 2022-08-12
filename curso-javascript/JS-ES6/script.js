//1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if (b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for (let i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i)

function logName() {
    const name = 'Jonathas'
    console.log(name)
}
const name = "João"
logName()
console.log(name) 

//2 - Arrow functions
const sum = function sum(a, b) {
    return a + b
}
const arrowSum = (a, b) => a + b

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        console.log(`Olá ${name}!`)    
    } else {
        console.log('Olá')
    }
}
console.log(greeting('Jonathas'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')
testeArrow()

const user = {
    name: "João",
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: '+ self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username:' + this.name)
        }, 700)
    },
}
//user.sayUserName()
//user.sayUserNameArrow()

//3 - Método Filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)
const highNumbers = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})
console.log(highNumbers)

const users = [
    { name: "Jonathas", available: true },
    { name: "Jefferson", available: false },
    { name: "João", available: false },
    { name: "Junior", available: true},
]
const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

//4 - o método map
const products = [
    { name: 'Camisa', price:10.99, category:'Roupas'},
    { name: 'Chaleira Elétrica', price:49.99, category:'Eletro'},
    { name: 'Fogão', price:400.00, category:'Eletro'},
    { name:'Calça Jeans', price:50.99, category:'Roupas'}
]
products.map((product) => {
    if (product.category === 'Roupas') {
        product.onSale = true
    }
})
console.log(products)

// 5 - Templates literals
const userName = 'Jonathas'
const age = 36

console.log(`O nome do usuário${userName} e ele tem ${age}.`)

//6 - Destructuring
const fruits = ['maça', 'laranja', 'Mamão']
const [f1, f2, f3] = fruits
console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
    name:'mouse',
    price:39.99,
    category: 'periférico',
    color: 'cinza'
}
const {
    name:productName,
    price,
    category: productyCategory,
    color,
} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productyCategory} de cor ${color}.`)

//7 - Spread operator
const a1 = [1, 2, 3]
const a2 = [7, 8, 9]
const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [...a1, 4, 5, 6, ...a2]
console.log(a4)

const carName = { name:  'Punto'}
const carBrand = { brand: 'Fiat'}
const otherInfos = { km: 10000, price: 49000 }
const car = {...carName, ...carBrand, ...otherInfos}
console.log(car)

//8 - Classes

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}
const shirt = new Product("Camisa gola V", 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))

const tenis = new Product("Tenis verde", 120)
 
console.log(tenis.productWithDiscount(20))

//9 - Herança de classes
class productWithAttributes extends Product{
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}
const hat = new productWithAttributes("Chapéu", 29.99, [
    "Preto",
    "Azul",
    "verde"
])
console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()