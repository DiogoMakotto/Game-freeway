//código carro

let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let velocidadeCarros = [2, 2.5, 3.6]

function mostraCarro(){
    for (let i = 0; i < imgCarros.length; i = i + 1 ){
    image(imgCarros[i], xCarros[i], yCarros[i], 50, 40);
    }
}

//velocidade
function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
}

function loopingPosicaoInicial() {
    if (xCarros[0] < -50) {
        xCarros[0] = xCarros[0]
    }
    if (xCarros[1] < -50) {
        xCarros[1] = xCarros[1]
    }
    if (xCarros[2] < -50) {
        xCarros[2] = xCarros[2]
    }
}