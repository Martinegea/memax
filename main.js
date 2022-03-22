function convertir() {
        var valore = parseInt(document.getElementById("valor").value);
        var resultado = 0;
        var dolar = 110;
        var euro = 121;
        if (document.getElementById("uno").checked){
                resultado = valore / dolar;
                alert("El cambio de pesos a dolar es: $" + resultado);
        }
        else if (document.getElementById("dos").checked){
                resultado = valore / euro;
                alert("El cambio de pesos a euro es: $" + resultado);
        }
        else{
                alert("Tiene que completar los datos");
        }
}

const memax1 = "mate"
const memax2 = "soporte"
const memax3 = "lapicero"

console.log (memax1);

const memax = ["mate", "soporte", "lapicero"];
console.log (memax);
console.log (memax[0]);

console.log(memax.length);
console.log(memax[memax.length - 1]);

const listaCompras = [];

let cantidad = 5;

do {
        let compra = prompt("Cargar productos");
        console.log(compra);
        listaCompras.push(compra);

} while(listaCompras.length<=cantidad)

carrito = []

const p1 = {
        nombre: "Mate Darth Vader",
        precio: 1500,
}

const p2 = {
        nombre: "Caldero Harry",
        precio: 1100
}

carrito.push(p1);
carrito.push(p2);


for(let item of carrito){
        console.log(item);
        console.log(item.precio);
}