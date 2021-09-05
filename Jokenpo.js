const prompt = require('prompt-sync')();

joKenPo()

function joKenPo() {

var partidas = +prompt("Escolha quantas partidas vamos disputar:")

  if (partidas >= 1) {}
  else { console.log("Digite um número diferente de 0")
    joKenPo()
}

console.log(`Você escolheu ${partidas} partidas, vamos começar`)

var rodada = 1
var usuariopontos = 0
var pontosPc = 0
var empate = 0
const escolha = ["PEDRA", "PAPEL", "TESOURA"]

jogar()

function jogar() {
    
    if (rodada <= partidas) {

var usuario = +prompt("Escolha: 1 - PEDRA / 2 - PAPEL / 3 - TESOURA: ")
if (usuario == 1){
  console.log(`Você escolheu PEDRA!`)
} else if (usuario == 2){
  console.log(`Você escolheu PAPEL!`)
} else {
  console.log(`Você escolheu TESOURA!`)
}

let computador = Math.floor(Math.random() * escolha.length)
    if (computador == 1) {
      console.log(`O computador escolheu PEDRA!`);
  } else if (computador == 2) {
      console.log(`O computador escolheu PAPEL!`);
  } else {
      console.log(`O computador escolheu TESOURA!`);
  } if ((usuario == 1 && computador == 1) || (usuario == 2 && computador == 2) || (usuario == 3 && computador == 3)) {
        console.log("Ambos escolheram a mesma opção, DEU EMPATE")
        rodada++
        empate++
    // jogar()
  } else if ((usuario == 1 && computador == 2) ||  (usuario == 3 && computador == 1) || (usuario == 2 && computador == 3)){
      console.log("O COMPUTADOR GANHOU!")
      rodada++
      pontosPc++
      jogar()
  } else ((usuario == 2 && computador == 1) || (usuario == 3 && computador == 2) || (usuario == 1  && computador == 3)); {
      console.log("O USUÁRIO GANHOU!")
      rodada++
      usuariopontos++
      jogar()
  } 
} 
    
}

console.log(`Após ${partidas} partidas, o placar de cada um ficou assim:`)
console.log()
console.log(`O usuario fez ${usuariopontos} ponto(s))`)
console.log()
console.log(`O computador fez ${pontosPc} ponto(s)`)
console.log()
console.log(`Tiveram ${empate} empates`)

if (usuariopontos < pontosPc) {
    console.log('O grande vencedor é o COMPUTADOR')
} else if (usuariopontos > pontosPc) {
    console.log('O grande vencedor é o usuario')
} else if (usuariopontos = pontosPc) {
    console.log('Final empatado, ninguém venceu')
}

let jogarNovamente = +prompt('Vamos jogar novamente? 1-SIM / 2-NÃO')

if (jogarNovamente == 1) {

    joKenPo()
    
}

}