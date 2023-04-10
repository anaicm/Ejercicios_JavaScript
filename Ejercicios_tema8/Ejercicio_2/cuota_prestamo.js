
$(document).ready(function () {//pone a la espra el desarrollo del código hasta que carga el html.
/*apunta al objeto form con identificador "cuota", al pulsar submit realiza la 
  función anónima*/
	$("#cuota").submit(function () {
		//recorre el formulario devolviendo un array de todos los campos clave=valor
		var datosFormulario = $(this).serialize();
		//var json = JSON.stringify($(this).serializeArray()); //  

		/*para poder recibir los datos del servidor hay que utilizar la funcion getJSON()
		  le entra por parametro la "base de datos a la que se quiere acceder", los datos 
		  que entran por cliente, y lo que va a devovler, en este caso la función procesando datos*/
		var response = $.getJSON("http://localhost/ejercicios_javascript/Ejercicios_tema8/Ejercicio_2/cuota_prestamo.php",
		datosFormulario, procesarDatos);
		return false;
	});

	function procesarDatos(datos_devueltos) {
		/*acceder a la información apuntando donde se quiere colocar
		  en este caso en el <div> con identificador id="contenidos externos"
		  de esta forma modifica el DOM*/
		$("#contenidos_externos").html("<p> Su cuota mensual será de: " + datos_devueltos + " Euros</p>");

	}

}); 
