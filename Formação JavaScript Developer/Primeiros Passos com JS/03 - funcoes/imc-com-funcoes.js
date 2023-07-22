
function calculaImc(peso, altura) {
    const alturaCalculada = Math.pow(altura, 2)
    return peso / alturaCalculada
}

function classificaImc(imc) {
    if (imc < 18.5) {
        return 'Você está abaixo do peso'
    } else if (imc > 18.5 && imc <= 25) {
        return 'Seu peso está normal'
    } else if (imc > 25 && imc <= 30) {
        return 'Você está acima do peso'
    } else if (imc > 30 && imc <= 40) {
        return 'Você está obeso'
    } else {
        return 'Você possui Obesidade Grave'
    }
}

function main() {
    const peso = 96;
    const altura = 1.87;
    const imc = calculaImc(peso, altura);
    
    console.log(imc.toFixed(2));
    console.log(classificaImc(imc))
}

main();
