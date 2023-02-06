<?php
//variable que almacena en su interior la información 
$el_usuario=isset($_GET["usuario"]) ? $_GET["usuario"] : $_POST["usuario"];
//array que almacena un objeto JSON
$el_array=new stdClass();
if($el_usuario=="Juan"){//si el usuario es igual al objeto creado
    //crea el objeto JSON nombre=valor
    //lo suyo seria que en vez de que los datos esten jarcodeados vinieran directamente de la base de datos.
    $el_array->nombre="Juan";
    $el_array->apellido="Gomez";
    $el_array->edad="18";
    $json=json_encode($el_array);//codifica el JSON
    echo $json;//y lo devuelve.
}
?>