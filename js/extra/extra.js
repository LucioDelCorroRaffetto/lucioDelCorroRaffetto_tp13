//  1.showNumbers
function showNumbers(valor){
    console.log(`Los 10 números siguientes a ${valor} son:`);
    for (let i = 1; i <= 10; i++) {
        console.log(valor + i);
    }
}

//  2.printEveryThree
function printEveryThree(){
    console.log("Números entre 1 y 57, saltando de tres en tres:");
    for (let i = 1; i <= 57; i += 3){
        console.log(i);
    }
}

//  3.totalSummation
function totalSummation(){
    let sum = 0;
    for (let i = 0; i <= 100; i++){
        sum += i;
    }
    console.log("La sumatoria de todos los números entre 0 y 100 es:", sum);
    return sum;
}

//  4.showToUpperCase
function showToUpperCase(text){
    console.log("Texto original:", text);
    for (let letter of text){
        console.log(letter.toUpperCase());
    }
}

//  5.returnPairs
function returnPairs(numeros){
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    return numerosPares;
}

module.exports = {
    showNumbers,
    printEveryThree,
    totalSummation,
    showToUpperCase,
    returnPairs
};