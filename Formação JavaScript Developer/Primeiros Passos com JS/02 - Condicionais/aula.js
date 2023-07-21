const numero = 12;
const eNumeroPar = (numero % 2) === 0;

if (numero === 0) {
    console.log('Número inválido!')
} else if (eNumeroPar) {
    console.log('Par')
} else {
    console.log('ímpar')
}