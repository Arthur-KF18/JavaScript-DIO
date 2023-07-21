const peso = 89;
const altura = 1.87;
const alturaCalculada = Math.pow(altura, 2);

const IMC = peso / alturaCalculada;
console.log("Seu IMC foi de: " + IMC.toFixed(2));

if (IMC < 18.5) {
    console.log('Você está abaixo do peso')
} else if (IMC > 18.5 && IMC <= 25) {
    console.log('Seu peso está normal')
} else if (IMC > 25 && IMC <= 30) {
    console.log('Você está acima do peso')
} else if (IMC > 30 && IMC <= 40) {
    console.log('Você está obeso')
} else {
    console.log('Você possui Obesidade Grave')
}