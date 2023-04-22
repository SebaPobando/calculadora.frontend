var numeroActual = "";
var operadorActual = "";
var resultado = "";

$(".btn").on("click", function(){
	var buttonValue = $(this).val();
	
	if(buttonValue == "all-clear"){
		numeroActual = "";
		operadorActual = "";
		resultado = "";
		$(".entrada-pantalla-calculadora").val("");
	}
	else if(buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/"){
		operadorActual = buttonValue;
		resultado = numeroActual;
		numeroActual = "";
		$(".entrada-pantalla-calculadora").val("");
	}
	else if(buttonValue == "="){
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
		numeroActual += buttonValue;
		$(".entrada-pantalla-calculadora").val(numeroActual);
	}
});