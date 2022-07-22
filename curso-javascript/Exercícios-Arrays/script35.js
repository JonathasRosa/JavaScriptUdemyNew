const calculadora = {
    soma: function (a, b) {
        return a + b;
    },
    subtracao: function (a, b) {
        return a - b;
    },
    multiplicacao: function (a, b) {
        return a * b;
    },
    divisao: function (a, b) {
        return a / b;     
    }
}

console.log(calculadora.soma(2, 6));
console.log(calculadora.subtracao(2, 6));
console.log(calculadora.multiplicacao(2, 6));
console.log(calculadora.divisao(2, 6));
