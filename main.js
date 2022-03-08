
var nombre = "martin";
        console.log(nombre)
        let num1= 10;
        let num2= 5;
        let suma = num1 + num2;
        console.log(suma)

 const puntaje = 1000;
 let vidas = 3;

 if (puntaje == 1000) {
         console.log ("ganaste");
 }

 if (vidas == 0) {
         console.log ("perdiste");
 } else {
         console.log ("seguir jugando");
 }

 let rol = "";

 if (rol=="ADMIN") {
         console.log ("podes haceer todo");
 } else {
         console.log ("restringido");
 }

 let valor = 14;

 if (valor == 15) {
         console.log ("es 15");
 } else {
         console.log ("no es 15");
 }

 let usuario = true;
 let puedePagar = true;

 if (usuario && puedePagar) {
         console.log("Se genero el pedido")
 } else {
         console.log("no se puede efectuar el pedido")
 }

 let efectivo = 300;
 let credito = 700;
 let disponible = efectivo + credito ;
 let totalCompra = 1000;

 if (efectivo > totalCompra || credito > totalCompra){
         console.log("podes pagar");
 } else if(disponible >= totalCompra){
         console.log("pagas con ambas");
 } else{
         console.log ("no podes pagar");
 }

 let str = prompt("Ingrese un valor");
 let aux = Number(str);
 let res;

 if (aux) {
         console.log(aux);
         res = typeof aux;
 } else {
         console.log(str);
         res = typeof str;
 }

 console.log(res);

 let infresarNumero = parseInt (prompt("ingresar numero"));
 for (let i = 0; i <= 10; i++) {
         let resultado = infresarNumero * i;
         console.log(infresarNumero + " X " + i + " = " + resultado);
 }
