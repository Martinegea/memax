
/*
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

 var i = 0;
 while (i <= 10) {
         document.write ( i + "<br>" );
         i++;
 }

 var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
 var numeroDias = dias.length -1;
 var i = 0;

 while (i <= numeroDias) {
         document.write ( dias [i] + "<br>");
         i++;
 }

 function sumar() {
         console.log( 2 + 2);
 }

 sumar();
function cargarNombre(){
        let nombreIngresado = prompt ("Ingresar Nombre");
        document.write(nombreIngresado);
}

for(let i=0; i < 5; i += 1){
        cargarNombre();
}
let superman;
let goku;

superman = Math.ceil(Math.random() * 10) ;
goku = Math.random() * 10;

console.log (superman);
console.log (goku);


function saludar(nombre, apellido){
        document.write("Hola " + nombre + " " + apellido);
}

saludar("Martin","chupete");
*/
function convertir(){
        var valor=parseFloat(document.getElementById("cantidad").value); 
        document.getElementById("valor").innerHTML=valor;
        var de=document.getElementById("de").value;
        var a=document.getElementById("a").value;
        var dolar=109.51;
        var euro=121.06;
        resultado=0;
        if(de==1&&a==2){
                resultado=valor/dolar;
        }
        else if(de==1&&a==3){
                resultado=valor/euro;
        } 
        else if(de==2&&a==1){
                resultado=valor*dolar;
        }
        else if(de==2&&a==3){
                resultado=valor*(dolar/euro);
        }
        else if(de==3&&a==1){
                resultado=valor*euro;
        }
}