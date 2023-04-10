$(document).ready(function () {//pone a la espra el desarrollo del código hasta que carga el html.
    /*apunta al objeto form con identificador "cuota", al pulsar submit realiza la 
      función anónima*/
        $("#ciclos_informatica").submit(function () {
            /*llama al archivo JSON ciclos.json, el archivo que he utilizado para los ciclos
            lo he obtenido de una actividad de la asignatura lenguaje de marcas que se realizo 
            con XML, modificandolo para obtener el formato JSON como el ejemplo dado en la actividad*/           
            var response = $.getJSON("http://localhost/ejercicios_javascript/Ejercicios_tema8/Ejercicio_3/ciclos.json",
            "",procesarDatos);
            return false;
        });
    
        function procesarDatos(datos_devueltos) {
           
              var respuesta = "";
              /*recorre el array de objetos obtenidos en el JSON con un forEach y guarda en la variable respuesta
                el valor de cada ciclo*/
              datos_devueltos.ciclos.ciclo.forEach(ciclo => {
                respuesta+="<b>*</b>"+ciclo.abrebiatura_ciclo+"-"+ciclo.nombre+"</br>";
    
            });
            
             /*acceder a la información apuntando donde se quiere colocar
              en este caso en el <div> con identificador id="contenidos externos"
              de esta forma modifica el DOM*/            
            $("#contenidos_externos").html("<p> Ciclos de Infromática: </br> "+respuesta+"</p>"); 
            /*En javaScript no se puede cargar un archivo JSON, ni ninguno ya que es lado de cliente y 
            los datos estarian expuestos, se tiene que hacer mediante AJAX y este funciona mediante
            funciones get() o post() con llamadas al servidor web, en este caso mi servidor local.*/
        }

    
    }); 