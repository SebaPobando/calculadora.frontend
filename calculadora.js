var numeroActual = "";
var operadorActual = "";
var resultado = "";

$(".btn").on("click", function(){
	var buttonValue = $(this).val();
	
	if(buttonValue == "all-clear"){
		numeroActual = "";
		operadorActual = "";
		resultado = "";
		$(".calculator-screen__input").val("");
	}
	else if(buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/"){
		operadorActual = buttonValue;
		resultado = numeroActual;
		numeroActual = "";
		$(".calculator-screen__input").val("");
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
		$(".calculator-screen__input").val(resultado);
		numeroActual = resultado;
		operadorActual = "";
	}
	else{
		numeroActual += buttonValue;
		$(".calculator-screen__input").val(numeroActual);
	}
});