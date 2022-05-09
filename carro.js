//código carro

//carro 1
let xCarro = 600; //var carro
let yCarro = 40;
let velocidadeCarro1 = 2;

//carro 2
let xCarro2 = xCarro; 
let yCarro2 = 96;
let velocidadeCarro2 = 2.5;

//carro 3
let xCarro3 = xCarro; 
let yCarro3 = 150;
let velocidadeCarro3 = 3.6;


function mostraCarro(){
    image(imgCarro1, xCarro, yCarro, 50, 40);
    image(imgCarro2, xCarro2, yCarro2, 50, 40);
    image(imgCarro3, xCarro3, yCarro3, 50, 40);
  }


//velocidade
function movimentaCarro(){
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}
