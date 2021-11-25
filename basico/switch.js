let resultado = Math.round(Math.random() * 10);

switch (resultado) {

    case 1:
        resposta = "Absolutamente não";
        break;
    case 2:
        resposta = "Quase certeza que não";
        break;
    case 3:
        resposta = "Acho que não";
        break;
    case 4:
        resposta = "Mais pra não do que pra sim";
        break;
    case 5:
        resposta = "Acho que sim";
        break;
    case 6:
        resposta = "Mais pra sim do que pra não";
        break;
    case 7:
        resposta = "Absolutamente sim";
        break;
    case 8:
        resposta = "Quase certeza que sim";
        break;  
    case 9:
        resposta = "Absolutamente sim";
        break;
    case 10:
        resposta = "Sim, com provas incontestáveis";
        break; 
    default:   
    resposta = "Preciso pensar melhor.";    
}

console.log(`Resultado do calculo: ${resultado}`);
console.log(`Resposta para a sua pergunta: ${resposta}`);