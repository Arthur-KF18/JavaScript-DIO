class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;        
    }

    percurso(distanciaKm, precoCombustivel) {
        const calculo = ((distanciaKm * this.gastoMedio) * precoCombustivel).toFixed(2);
        return `O preço da distância é de R$${calculo}`
    }
}

const onix = new Carros('Chevrolet', 'Vermelho', 1/12);
const carroCalculado = onix.percurso(100, 5.63);
console.log(carroCalculado);

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.percurso(300, 5.63))