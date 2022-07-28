const validarNomeUsuario = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(validarNomeUsuario.test("JonathasRosa85"));
console.log(validarNomeUsuario.test("jonathas_85"));
console.log(validarNomeUsuario.test("asdfghjklç"));
console.log(validarNomeUsuario.test("9999999999999999999999999999999999"));
