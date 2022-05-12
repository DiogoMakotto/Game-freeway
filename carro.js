//código carro

let xCarros = [600, 600, 600]
let yCarros = [40, 96, 150]
let velocidadeCarros = [2, 2.5, 3.6]

function mostraCarro(){
    image(imgCarro1, xCarros[0], yCarros[0], 50, 40);
    image(imgCarro2, xCarros[1], yCarros[1], 50, 40);
    image(imgCarro3, xCarros[2], yCarros[2], 50, 40);
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