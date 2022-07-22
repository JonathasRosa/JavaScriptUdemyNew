let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [1,3,5,7];

function verificaElementosArrays(arr) {
    if (arr.length >= 5) {
        console.log("Muitos elementos")
    } else {
        console.log('Poucos elementos')
    }
}

verificaElementosArrays(numbers);
verificaElementosArrays(numbers2);