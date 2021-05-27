var galletas = 0;

var inventario = [0,0,0];
var galletasProduce = [1,2,3];
var precioProducto = [100,200,400];


function clic(){
    galletas++;
}


function comprar(objeto){

    if(galletas >= precioProducto[objeto]){
    inventario[objeto]++;
    galletas-= precioProducto[objeto];
    }
    else{
        console.log("No tienes suficiente galletas")
    }

}


function producir(){
    for(contador=0; contador<inventario.length; contador++){
        galletas += inventario[contador] * galletasProduce[contador];
    }

}

function render(){
    document.getElementById("contador").innerHTML = galletas;
    document.getElementById("inventario").innerHTML = 
        `Cursores: ${inventario[0]}<br>
        Abuelita: ${inventario[1]}<br>
        Horno: ${inventario[2]}
        `;
}

//------------------------------------
var FPSProduce = 1;

setInterval(function(){
    producir();
},1000/FPSProduce);




var FPS = 30;

setInterval(function(){
   render(); 
},1000/FPS);