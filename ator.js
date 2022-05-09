//código do ator

let xAtor = 100;
let yAtor = 366;    //var do ator


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