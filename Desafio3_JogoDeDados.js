const prompt = require('prompt-sync')();
// perguntar quantas rodadas vamos disputar
var partidas = +prompt("Quantas rodadas: ");

// perguntar quantos jogadores vao disputar o jogo
var jogadores = +prompt("Quantos jogadores: ");

// criar um objeto para cada jogador com nome e numero tirado
var listajogadores = [];

for (let jg = 0; jg < jogadores; jg++) {
    let nome = prompt(`Qual o nome do ${jg +1}º jogador : `);
    let jogador = {
        nome: nome,
        vitoria: 0,
        dado: Math.floor(Math.random() * (7 - 1) + 1)
    }
    listajogadores.push(jogador);
    console.log()
} // ordenar esses objetos, sabendo que o vencedor tirou o maior numero no dado
for (let pt = 0; pt < partidas; pt++) {
    listajogadores.sort((a, b) => a.dado - b.dado).reverse();
    console.log(`O vencedor da partida ${pt +1} foi o(a) jogador(a) ${listajogadores[0].nome} com o número do dado ${listajogadores[0].dado}`);
    listajogadores[0].vitoria++;
    console.log();
    for (let i = 0; i < listajogadores.length; i++) {
        listajogadores[i].dado = Math.floor(Math.random() * (7 - 1) + 1);
    }
}
listajogadores.sort((a, b) => a.vitoria - b.vitoria).reverse();
// mostrar no final qual jogador ganhou mais rodadas e foi o grande campeao
console.log();
console.log(`O grande vencedor(a) foi ${listajogadores[0].nome} com ${listajogadores[0].vitoria} vitórias`);


    


