let validarLetrasMaiusculas = /[A-Z]/;

console.log(validarLetrasMaiusculas.test("A, B, C, D"));
console.log(validarLetrasMaiusculas.test("A, b, C, d"));
console.log(validarLetrasMaiusculas.test("testando"));
console.log(validarLetrasMaiusculas.test("OK"));
console.log(validarLetrasMaiusculas.test("123456"));