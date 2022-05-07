let imgEstrada;
let imgAtor;
let imgCarro1;

//var carro
let xCarro = 600;

//var ator
let yAtor = 366;

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
    
    
}   

function mostraAtor(){
    image(imgAtor, 100, yAtor, 30, 30);
  }
  
  function mostraCarro(){
    image(imgCarro1, xCarro, 40, 50, 40);
  }

function movimentaCarro(){
    xCarro -= 2;
}
 
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
}