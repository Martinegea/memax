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