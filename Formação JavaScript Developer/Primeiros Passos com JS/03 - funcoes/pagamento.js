const valorEtiqueta = 24.90;

function aplicaDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicaJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}

function metodoPagamento(tipoDePagamento) {

    if (tipoDePagamento === 1) {
        console.log(`Debito : ${aplicaDesconto(valorEtiqueta, 10).toFixed(2)}`);
    } else if (tipoDePagamento === 2) {
        console.log(`Dinheiro ou Pix : ${aplicaDesconto(valorEtiqueta, 15).toFixed(2)}`);
    } else if (tipoDePagamento === 3) {
        console.log(`Crédito em duas vezes: ${valorEtiqueta.toFixed(2)}`)
    } else {
        console.log(`Crédito em mais vezes: ${aplicaJuros(valorEtiqueta, 10).toFixed(2)}`)
    }
}

metodoPagamento(1);
metodoPagamento(2);
metodoPagamento(3);
metodoPagamento(4);
