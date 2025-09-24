function calcularTotal(precoUnitario, quantidade) {
  return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
  if (valorTotal > 100) {
    return valorTotal * 0.9; // 10% de desconto
  } else {
    return valorTotal; // sem desconto
  }
}

function exibirResumo(valorTotal, valorComDesconto) {
  console.log("===== RESUMO DA COMPRA =====");
  console.log("Valor total (sem desconto): R$ " + valorTotal.toFixed(2));
  console.log("Valor final (com desconto): R$ " + valorComDesconto.toFixed(2));
}

let preco = parseFloat(prompt("Digite o preço unitário do produto:"));
let quantidade = parseInt(prompt("Digite a quantidade comprada:"));

let valorTotal = calcularTotal(preco, quantidade);
let valorComDesconto = aplicarDesconto(valorTotal);

exibirResumo(valorTotal, valorComDesconto);
