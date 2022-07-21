let idade = 16;
let CNH = true;

if (idade >= 18 && CNH == true) {
    console.log("Sim, pode dirigir")
} else if (idade >= 18 && CNH == false) {
    console.log("Pode dirigir se tiver CNH.")
} else {
    console.log("Não pode dirigir, menor de idade.")    
}
