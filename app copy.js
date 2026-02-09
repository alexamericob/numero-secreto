let numeroSecreto = parseInt(Math.random() *100 + 1);
// Armazena o número escolhido pelo usuário
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Digite um número entre 1 e 100:');

    if (chute == numeroSecreto) {
        break;
    }else {
        if (chute < numeroSecreto) {
            alert(`O Número ${chute} é menor que o número secreto.`);
        } else {
            alert(`O Número ${chute} é maior que o número secreto.`);
            
        }
        tentativas++;
    }
}
let palavraTemtaviva = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} ${palavraTemtaviva}.`);

/* if (tentativas>1) {
    alert(`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} tentativas.`);
}else{  
alert(`Parabéns! Você acertou o número secreto! ${numeroSecreto} com ${tentativas} tentativa.`);
}*/