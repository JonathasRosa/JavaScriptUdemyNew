function checarTamanhoDoTexto(texto) {
    if (texto.length > 10) {
        console.log("Texto muito longo.")
    } else {
        console.log("Texto dentro do limite.")
    }
    console.log(texto.length)
}

checarTamanhoDoTexto("Teste1")
checarTamanhoDoTexto("Vamos testar esse.")
checarTamanhoDoTexto("Menor que 10.")