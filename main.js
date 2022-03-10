

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
