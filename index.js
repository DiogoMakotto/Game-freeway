let imgEstrada;
let imgAtor;
let imgCarro;

function preload(){
    imgEstrada = loadImage("./assets/estrada.png")
    imgAtor = loadImage("./assets/ator-1.png")
    imgCarro1 = loadImage("./assets/carro-1.png")
    imgCarro2 = loadImage("./assets/carro-2.png")
    imgCarro3 = loadImage("./assets/carro-3.png") 
}

function setup() {
    createCanvas(500, 400);
}
function draw() {
    background(imgEstrada);
    image(imgAtor, 100, 366, 30, 30)
    image(imgCarro1, 420, 40, 50, 40)
}   
