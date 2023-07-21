const nota1 = 6; 
const nota2 = 6; 
const nota3 = 10; 

const mediaNotas = (nota1 + nota2 + nota3)/3;

console.log("A nota que você tirou foi: " + Math.round(mediaNotas));

if (mediaNotas < 5) {
    console.log('Você foi reprovado')
} else if (mediaNotas >= 5 && mediaNotas < 7) {
    console.log('Você está de recuperação')
} else {
    console.log('Você foi aprovado')
}

