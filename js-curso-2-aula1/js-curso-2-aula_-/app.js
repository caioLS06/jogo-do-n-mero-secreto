let listaDeNumerosSorteados = [];
let nuemroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function  exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "brazilian portuguese female",
    {reate:1.2});
}
 
function exibirMenssagemInicial(){
    exibirTextoNaTela("h1", "jogo do numero secreto");
    exibirTextoNaTela("p", "escolha um numero entre 1 a 10");

}

exibirMenssagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "voce acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let menssagemTentativas = `voce descobriu o numero secreto com 
        ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", menssagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
   
       if(chute > numeroSecreto){
        exibirTextoNaTela("p", "o numero secreto é menor");
       }else{
        exibirTextoNaTela("p", "o numero secreto é maior");
       }
       tentativas++;
       limparCampo();
    }

}

function gerarNumeroAleatorio(){
    let numeroEscolhido  = parseInt(Math.random() * nuemroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return  numeroEscolhido;
    }
}

function  limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMenssagemInicial();
        document.getElementById("reiniciar").setAttribute("disabled", true);
}