var numeroPensado = Math.round(Math.random() * 20);
var numeroTentativa =1;
while(numeroTentativa <= 3) {
	var chute = prompt("Qual você acha que é?");
	
	if (chute == numeroPensado) {
			alert("Parabéns, você acertou!");
			break;
	} else {
			alert("Errou. Será que ainda tem mais tentativas?");
		if (chute > numeroPensado) { 
			alert("O seu chute foi maior do que a resposta certa");
		}
				else {
					alert("O seu chute foi menor do que a resposta certa"); 
				}
	}
	numeroTentativa++;
}

