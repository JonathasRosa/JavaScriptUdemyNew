const validarMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Marca: "));
console.log(validarMarca.test("Marca: asdf"));
console.log(validarMarca.test("Marca: 123456"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: 2Nike"));
console.log(validarMarca.test("Marca: 3Puma"));
console.log(validarMarca.test("Marca: Puma"));
console.log(validarMarca.test("Marca: Asics"));
