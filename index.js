function setup() {
    createCanvas(500, 400);
}

function draw() {
  background(imgEstrada); 
  mostraAtor ();
  mostraCarro ();
  movimentaCarro ();
  movimentaAtor ();
  loopingPosicaoInicial(); 
  incluiPontos();
  marcaPonto();
}   
