let nome;
let produto;
let preco;
let desconto;

nome = "Henriqe Tavares de Lima";
produto  = "ThinkPad t470";
preco = 8000;
desconto = 5;

console.log("Oi " + nome);
console.log("Você comprou " + produto);
console.log("Custou " + preco);
console.log("Desconto de "+ desconto +"%.");

let descontoCalculado;
descontoCalculado = (preco * desconto) / 100;

console.log("Desconto calculado: " + descontoCalculado);

let precoFinal;
precoFinal = preco - descontoCalculado;

console.log("Proço final: " + precoFinal);