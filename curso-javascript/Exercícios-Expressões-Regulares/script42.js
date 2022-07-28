const validarId = /\d+ID\b/;

console.log(validarId.test("123456789ID"));
console.log(validarId.test("123456789"));
console.log(validarId.test("ID"));
console.log(validarId.test("asdID"));
console.log(validarId.test("12345kncask6789ID"));
console.log(validarId.test("asdfghjklç"));
