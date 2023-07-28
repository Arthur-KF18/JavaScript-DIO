const conjuntoEntradas = [5, 3, 4, 1, 10, 8];
let i = 0;

function gets() {
    const valor = conjuntoEntradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {
    gets, print
}