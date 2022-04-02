let nombreProducto=document.getElementById("producto");

let cantidadProducto=document.getElementById("cantidad");

let precioProducto=document.getElementById("precio");

let tarjeta=document.getElementById("tarjetas")

let view=document.getElementById("salida");

function capturar(){
        view.innerHTML=nombreProducto.value+"<br>"+cantidadProducto.value+"<br>"+precioProducto.value+"<br>"+tarjeta.value;

        let producto=[nombreProducto.value, cantidadProducto.value,precioProducto.value,tarjeta.value];

        console.log(producto);
}