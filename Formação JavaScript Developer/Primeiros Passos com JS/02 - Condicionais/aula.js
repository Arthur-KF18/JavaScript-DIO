const numero = 12;
const isoNumeroEPar = (numero % 2) === 0;

if (isoNumeroEPar) {
    console.log('O número é par')
} else {
    console.log('O número é ímpar')
}

// desafio

let precoEtanol = 3.89;
let precoGasolina = 5.63;
let precoDiesel = 5.01;
const kmPorLitros = 12.5;
const distanciaKm = 300;
let combustivelNoCarro = 'etanol';

let litrosConsumidos = distanciaKm / kmPorLitros;

let gasolina = litrosConsumidos * precoGasolina;
let etanol = litrosConsumidos * precoEtanol;
let diesel = litrosConsumidos * precoDiesel;

if (combustivelNoCarro === 'gasolina') {
    console.log("a média da gasolina é " + gasolina.toFixed(2) + " R$");
} else if (combustivelNoCarro === 'etanol') {
    console.log("a média do etanol é " + etanol.toFixed(2) + " R$");
} else if (combustivelNoCarro === 'diesel') {
    console.log("a média do diesel é " + diesel.toFixed(2) + " R$");
}