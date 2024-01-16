let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMenssagemInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Escolha um número de 0 á 10.');
}
 exibirMenssagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if ( chute == numeroSecreto ){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagem = `Voce descobriu o número Secreto com ${tentativas} ${palavraTentativa}.`
        exibirTextoNaTela('p', menssagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('h1', 'Voce errou, tente novamente');
            exibirTextoNaTela('p', 'O número é menor.');
        } else {
            exibirTextoNaTela('h1', 'Voce errou, tente novamente');
            exibirTextoNaTela('p', 'O número é maior.');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    console.log('bateu aqui');
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
}