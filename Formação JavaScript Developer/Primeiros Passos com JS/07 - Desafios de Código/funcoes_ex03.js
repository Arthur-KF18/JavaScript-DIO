const conjuntoEntradas = [2000, 250];
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