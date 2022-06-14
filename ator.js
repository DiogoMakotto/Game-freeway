//código do ator

let xAtor = 100;
let yAtor = 366;    //var do ator
let colisao = false;  //valor inicial do nosso ator
let pontos = 0;

function mostraAtor(){
    image(imgAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
}

function verificaColisao(){
  for(let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      retornaPosicaoInicial();
    }
  }
}
function retornaPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25)
  Fill(color(255,240, 60))
  Text(pontos, width / 5, 27);
}

function marcaPonto(){
  if(yAtor < 15){
    pontos += 1;
    retornaPosicaoInicial();
  }
}