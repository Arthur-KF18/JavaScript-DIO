const numeros = [];
numeros.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

const numerosPares = [];

for (let i = 0; i < 10; i = i + 2) {
    numerosPares.push(i);
}

console.log(numerosPares);

const numeros2 = [];

for (let i = 0; i < 10; i++) {
    numeros2.push(i);
}

console.log(numeros2);