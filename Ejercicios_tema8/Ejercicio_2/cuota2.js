$(document).ready(function() {
	
	$("#capital").keyup(function() {
		calcularCuota();
	});

	$("#interes").keyup(function() {
		calcularCuota();
	});

	$("#meses").keyup(function() {
		calcularCuota();
	});

	$("#capital").change(function() {
		calcularCuota();
	});

	$("#interes").change(function() {
		calcularCuota();
	});

	$("#meses").change(function() {
		calcularCuota();
	});

	function calcularCuota(){
		var capital = parseInt($("#capital").val());
		var interes = parseInt($("#interes").val());
		var meses = parseInt($("#meses").val());
		if(meses != ""){
		var cuota = (capital + capital * interes) / meses;
		}
		$("#cuota").val(cuota);
	}

}); 
