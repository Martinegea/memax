let nombre = prompt("Dime tu nombre");

alert("Hola " + nombre + " bienvenido a memax 3d");

function saludar(){
        respuesta = prompt(nombre + " ¿Como fue tu día?");
        if (respuesta == "bien") {
                 alert("Me alegro")
        } else {
                 alert("Vendran días mejores")
}

}

saludar()


const objeto1 = { id: 1, producto: "Llavero" };
const array = [objeto1, { id: 2, producto: "Sombrero Harry"}];
array.push({ id: 3, producto: "Soporte celular"});

console.log(array);

let tabla = prompt(nombre + " Ingresa un número y te muestro su tabla de multiplicar");

for (var i = 1; i < 11; i++) {
        console.log(tabla + " x " + i + " = " + (tabla * i));
}

