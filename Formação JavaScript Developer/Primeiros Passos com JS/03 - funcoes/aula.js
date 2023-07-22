function teste() {
    console.log('Testando minha função!');
}

function sayMyName(name) {
    console.log('Meu nome é ' + name)
}

function quadrado(valor) {
    return valor * valor;
}

function incrementaJuros(valor, percentualJuros) {
    const valorAcresimo = (percentualJuros/100) * valor;
    return valor + valorAcresimo;
}

teste();
sayMyName('Arthur');
const quadradoDeDez = quadrado(10)
console.log(quadradoDeDez + quadrado(5))
console.log(incrementaJuros(37.90, 15));

function main() {
    console.log('Programa principal')
}
main();