var numeroActual = "";
var operadorActual = "";
var resultado = "";

$(".btn").on("click", function(){
	var valorBoton = $(this).val();
	
	if(valorBoton == "all-clear"){
		numeroActual = "";
		operadorActual = "";
		resultado = "";
		$(".entrada-pantalla-calculadora").val("");
	}
	else if(valorBoton == "+" || valorBoton == "-" || valorBoton == "*" || valorBoton == "/"){
		operadorActual = valorBoton;
		resultado = numeroActual;
		numeroActual = "";
		$(".entrada-pantalla-calculadora").val("");
	}
	else if(valorBoton == "="){
		if(operadorActual == "+"){
			resultado = parseFloat(resultado) + parseFloat(numeroActual);
		}
		else if(operadorActual == "-"){
			resultado = parseFloat(resultado) - parseFloat(numeroActual);
		}
		else if(operadorActual == "*"){
			resultado = parseFloat(resultado) * parseFloat(numeroActual);
		}
		else if(operadorActual == "/"){
			resultado = parseFloat(resultado) / parseFloat(numeroActual);
		}
		$(".entrada-pantalla-calculadora").val(resultado);
		numeroActual = resultado;
		operadorActual = "";
	}
	else{
		numeroActual += valorBoton;
		$(".entrada-pantalla-calculadora").val(numeroActual);
	}
});