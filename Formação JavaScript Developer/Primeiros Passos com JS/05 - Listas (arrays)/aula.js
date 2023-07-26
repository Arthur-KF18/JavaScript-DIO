const notas = [];
notas.push(5, 7, 8, 10, 5, 6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const mediaNotas = Math.round(soma / notas.length);
console.log(mediaNotas);
