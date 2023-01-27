
//crear un array con los div mediante clases, todas las clases "color" iran en el array.    
var colores= document.getElementsByClassName("color");
//se crea el array
const arrayColores = [];
 for(var i=0;i<colores.length;i++){//se recorre
    arrayColores.push(colores[i].innerText);//y se va añadiendo el valor del texto de cada elemento con innerText 
 }

 var indiceAleatorio = Math.floor(Math.random() * arrayColores.length);//indice aleatorio randon.
 var colorAleatorio = arrayColores[indiceAleatorio];//valor del indice aleatorio que ha salido.
 document.getElementById("colorElegir").innerText += "  "+colorAleatorio; //imprime la etiqueta p, con su texto con (innerText) y el color aleatorio

/*
para recorrer el array con foreach(clave,valor)
 arrayColores.forEach(color => {
    document.write("los colores son: " + color+"<br>");
});
*/

    function elegir_color(texto_del_div){//el valor que entra es el this de los div
        if (colorAleatorio == texto_del_div){//si el color aleatorio es igual al color que entra por el div
            alert('mu bien!!');
        }else{
        alert('mu mal');
        }
    }
