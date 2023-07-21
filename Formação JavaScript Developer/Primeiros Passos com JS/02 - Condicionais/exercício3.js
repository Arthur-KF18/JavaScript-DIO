const metodoPagamento = 'PIX';
const quantidadeVezes = 3;
const valorEtiqueta = 7.35;

const desconto10 = valorEtiqueta - (valorEtiqueta * 0.10);
const desconto15 = valorEtiqueta - (valorEtiqueta * 0.15);
const juros10 = valorEtiqueta + (valorEtiqueta * 0.10);

console.log("Desconto de 10%: " + (valorEtiqueta * 0.10).toFixed(2));
console.log("Desconto de 15%: " + (valorEtiqueta * 0.15).toFixed(2));

if (metodoPagamento === 'Debito') {
    console.log("O valor que irá pagar será de: " + desconto10.toFixed(2) + "R$")
} else if (metodoPagamento === 'PIX' || metodoPagamento === 'Dinheiro') {
    console.log("O valor que irá pagar será de: " + desconto15.toFixed(2) + "R$")
} else if (metodoPagamento === 'Credito' && quantidadeVezes === 2) {
    console.log("O valor que irá pagar será de: " + valorEtiqueta.toFixed(2) + "R$")
} else if (metodoPagamento === 'Credito' && quantidadeVezes > 2) {
    console.log("O valor que irá pagar será de: " + juros10.toFixed(2) + "R$")
}