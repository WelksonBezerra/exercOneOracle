alert("Olá Bem-vindo ao jogo Número Secreto");
let numeroSecreto = 6;
console.log(numeroSecreto);
let palpite;



 while (palpite != numeroSecreto) {
       palpite = prompt("Informe seu palpite");
    if (palpite == numeroSecreto){
    alert (`Parabéns! Você acertou o número secreto! é: ${numeroSecreto}`)
        break;    
    } else {
             if (palpite > numeroSecreto) {
        alert(`O seu palpite foi maior que o número secreto,tente novamente,número do chute foi: ${palpite}`)

            } else {
        alert(`O seu palpite foi menor que o número secreto,tente novamente,número do chute foi:  ${palpite}`)
         }
         
      
        }

}