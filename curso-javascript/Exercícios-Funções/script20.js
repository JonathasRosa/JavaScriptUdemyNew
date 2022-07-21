function podeEntrarNaAuto(idade) {
    if (idade >= 18) {
        console.log("Pode tirar CNH.")
    } else {
        console.log("Não pode tirar CNH.")
    }
}

podeEntrarNaAuto(17);
podeEntrarNaAuto(18);
podeEntrarNaAuto(22);
podeEntrarNaAuto(15);