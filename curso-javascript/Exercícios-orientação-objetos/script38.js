class Endereço{
    constructor(rua, número, bairro, cidade, estado) {
        this.rua = rua;
        this.numero = número;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    set novaRua(novaRua) {
        this.rua = novaRua;
    }
    set novoNúmero(novoNúmero) {
        this.número = novoNúmero;
    }
    set novoBairro(novoBairro) {
        this.bairro = novoBairro;
    }
}
let endereço = new Endereço("Rua: José Albano",1468, "Fátima II", "Crateús", "CE")
console.log(endereço);
endereço.novaRua = "Rua: Nelson Martins";
console.log(endereço);
endereço.novoNumero = 121;
console.log(endereço);
endereço.novoBairro = "Planalto";
console.log(endereço); 