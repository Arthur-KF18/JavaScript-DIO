console.log('Olá mundo no terminal!');

let variavel = 10 + 10;
console.log(variavel);

// desafio

let precoCombustivel = 5.63;
const kmPorLitros = 12.1; 
const distanciaKm = 100; 

let mediaKm = distanciaKm / kmPorLitros;
console.log("a quantidade de litros foram: " + Math.round(mediaKm)+ "L")

let mediaPreco = mediaKm * precoCombustivel;
console.log("a média do combustível é " + Math.round(mediaPreco) + " R$");