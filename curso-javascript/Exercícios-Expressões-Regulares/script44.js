let validarIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/

console.log(validarIP.test("127.1.4.7"));
console.log(validarIP.test("8.8.8.8"));
console.log(validarIP.test("asd123"));
console.log(validarIP.test("1275.254.5.45"));
