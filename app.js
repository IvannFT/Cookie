var galletas = 0;

var inventario = [0,0,0];
var galletasProduce = [1,2,3];
var precioProducto = [100,200,400];


function clic(){
    galletas++;
}


function render(){
    document.getElementById("contador").innerHTML = galletas;
}

//------------------------------------
var FPS = 30;

setInterval(function(){
   render(); 
},1000/FPS);