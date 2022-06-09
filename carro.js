//código carro

let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let velocidadeCarros = [2, 2.5, 3.6]
let comprimentoCarro = 50;
let alturaCarro = 40;

//função para visualizar o carro
function mostraCarro(){
    for (let i = 0; i < imgCarros.length; i = i + 1 ){
    image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

//velocidade
function movimentaCarro(){
    for(let i = 0; i < imgCarros.length; i = i + 1){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function loopingPosicaoInicial() {
    for(let i = 0; i < imgCarros.length; i = i + 1){
        if (passouTodaATela(xCarros[i])) {
        xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarros){
    return xCarros < - 50;
}