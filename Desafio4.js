const prompt = require("prompt-sync")();

// Função para verificar se o eleitor tem idade permitida para votar.
let nascimento = +prompt("Digite o ano do seu nascimento: ");
console.log();
function autorizaVoto(nascimento) {
  if (nascimento >= 2006) {
    return console.log(
      "\33[1;31m PREZADO ELEITOR: Votação negada, você não pode votar!\n"
    );
  } else if ((nascimento < 2006 && nascimento >= 2004) || nascimento < 1951) {
    return console.log(
      "\033[1;34m PREZADO ELEITOR: Votação opcional, você pode votar, mas, não é obrigado!\n"
    );
  } else {
    return console.log(
      "\033[1;33m PREZADO ELEITOR: Você está obrigado a votar!\n"
    );
  }
}
autorizaVoto(nascimento);

// Fução para autorizar a votação ou não.
function votacao(nascimento) {
  if (nascimento >= 2006) {
    return console.log("PREZADO ELEITOR: Voce não está autorizado a votar!\n");
  } else {
    return console.log(
      "\033[1;32m Você está autorizado a votar, vamos iniciar a votação:\n "
    );
  }
}
votacao(nascimento);
// variáeis para contagem dos votos do
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let candidato5 = 0;
let votos;

if (nascimento <= 2007) {
  console.log("\033[1;33m Inicio de votação: \n");
  while (true) {
    console.log(
      "\033[1;31m Escolha:\n\033[1;37m 1 = Candidato nº 1\n 2 = Candidato nº 2\n 3 = Candidato nº 3\n 4 = Voto nulo\n 5 = Voto em branco\n 0 = Para encerrar a votação\n"
    );
    votos = +prompt("\033[1;32m Digite o seu voto: ");
    while (votos < 0 && votos > 5) {
      console.log("\033[1;33m Próximo voto: \n");
    }
    if (votos < 0 || votos > 5) {
      console.log("\n\033[1;36m Escolha uma opção válida!\n");
    } else {
      console.log("\033[1;33m Próximo voto: \n");
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
}

console.log("\033[1;36m");

listaVotados = [candidato1, candidato2, candidato3];
listaVotados.push();

function exibirResultados(listaVotados) {
  console.log(`O candidato 1 recebeu ${candidato1} voto(s)`);
  console.log(`O candidato 2 recebeu ${candidato2} voto(s)`);
  console.log(`O candidato 3 recebeu ${candidato3} voto(s)`);
  console.log(`Votos nulos recebeu ${candidato4} voto(s)`);
  console.log(`Votos em branco recebeu ${candidato5} voto(s)`);
  console.log();
  if (candidato1 > candidato2 && candidato1 > candidato3) {
    console.log("\033[1;33m");
    return console.log(
      `O candidato 1 foi eleito com ${candidato1} voto(s) dos votos válidos`
    );
  } else if (candidato2 > candidato1 && candidato2 > candidato3) {
    return console.log(
      `O candidato 2 foi eleito com ${candidato2} voto(s) dos votos válidos`
    );
  } else if (candidato3 > candidato1 && candidato3 > candidato2) {
    return console.log(
      `O candidato 3 foi eleito com ${candidato3} voto(s) do total de votos válidos`
    );
  } else if (candidato1 > candidato2 && candidato1 == candidato3) {
    return console.log("Deu empate entre o candidato 1 e o candidato 3, terá segundo turno!");
  } else if (candidato1 > candidato3 && candidato1 == candidato2) {
    return console.log("Deu empate entre o candidato 1 e o candidato 2, terá segundo turno!");
  } else if (candidato2 > candidato1 && candidato1 == candidato3) {
    return console.log("Deu empate entre o candidato 2 e o candidato 3, terá segundo turno!");
  } else
    candidato1 == candidato3 &&
      candidato1 == candidato2 &&
      candidato2 == candidato3;
  return console.log(
    "Deu empate entre o candidato 1, o candidato 2 e o candidato 3, terá segundo turno!"
  );
}
exibirResultados(votos);
