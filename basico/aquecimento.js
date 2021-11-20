let nome = "Henriqe Tavares de Lima";
let produto  = "ThinkPad t470";
let preco = 8000;
let desconto = 5;

console.log("Oi " + nome);  // eu poderia usr console.log(`Oi ${nome}`); mas nao esta funcionando no console do vscode usando o node
console.log("Você comprou " + produto);
console.log("Custou " + preco);
console.log("Desconto de "+ desconto +"%.");

let descontoCalculado = (preco * desconto) / 100;

console.log("Desconto calculado: " + descontoCalculado);

let precoFinal = preco - descontoCalculado;

console.log("Proço final: " + precoFinal);