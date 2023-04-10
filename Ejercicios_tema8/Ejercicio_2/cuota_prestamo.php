<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
    $capital=$_GET["capital"];//mediante get() obtiene el capital
    $interes=$_GET["interes"] ;//mediante get() obtiene el interés
    $meses=$_GET["meses"];// mediante get() obtiene los meses a pagar
    //realiza la cuenta para calcular la cuota que ha de pagar.
    $calcular=($capital+($capital*$interes))/$meses;
    echo $calcular;
?>