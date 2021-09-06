const prompt = require("prompt-sync")();

// Receber votos até que o usuário diga que não tem mais ninguém para votar;

// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; OK
let nascimento = +prompt("Digite o ano do seu nascimento: ");
console.log();
function autorizaVoto(nascimento) {
  if (nascimento >= 2006) {
    return console.log(
      "PREZADO ELEITOR: Votação negada, você não pode votar!\n"
    );
  } else if ((nascimento < 2006 && nascimento >= 2004) || nascimento < 1946) {
    return console.log(
      "PREADO ELEITOR: Votação opcional, você não é obrigado a votar!\n"
    );
  } else {
    return console.log("PREZADO ELEITOR: Você está obrigado a votar!\n");
  }
}


/*Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou 
retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; */
function votacao(autorizacao) {
  if (nascimento >= 2006) {
    return "Voce não está autorizado a votar!\n";
  } else {
    //    return console.log("Inicie a votação!")
    return "Você está autorizado a votar, vamos iniciar a votação:\n ";
  }
}


/* Contabilizar os votos de acordo com os significados 
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco */
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let candidato5 = 0;
let votos;

if (nascimento <= 2007) {
  while (true) {
    console.log("Inicio de votação: ");
    console.log(
      "Escolha seu voto:\n 1 = Candidato nº 1\n 2 = Candidato nº 2\n 3 = Candidato nº 3\n 4 = Voto nulo\n 5 = Voto em branco\n 0 = Para encerrar a votação"
    );
    votos = +prompt("Digite o seu voto: ");
    while (votos < 0 && votos > 5) {
      votos = +prompt("Digite seu voto: ");
    }
    switch (votos) {
      case 1:
        candidato1++;
        break;
      case 2:
        candidato2++;
        break;
      case 3:
        candidato3++;
        break;
      case 4:
        candidato4++;
        break;
      case 5:
        candidato5++;
        break;
    }
    if (votos == 0) {
      break;
    }
  }
} 
    console.log(``candidato1);
    console.log(candidato2);
    console.log(candidato3);
    console.log(candidato4);
    console.log(candidato5);

/* Ter uma função chamada exibirResultados() que deve mostrar:
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação */
