var currentNumber = "";
var currentOperator = "";
var result = "";

$(".btn").on("click", function(){
	var buttonValue = $(this).val();
	
	if(buttonValue == "all-clear"){
		currentNumber = "";
		currentOperator = "";
		result = "";
		$(".calculator-screen__input").val("");
	}
	else if(buttonValue == "+" || buttonValue == "-" || buttonValue == "*" || buttonValue == "/"){
		currentOperator = buttonValue;
		result = currentNumber;
		currentNumber = "";
		$(".calculator-screen__input").val("");
	}
	else if(buttonValue == "="){
		if(currentOperator == "+"){
			result = parseFloat(result) + parseFloat(currentNumber);
		}
		else if(currentOperator == "-"){
			result = parseFloat(result) - parseFloat(currentNumber);
		}
		else if(currentOperator == "*"){
			result = parseFloat(result) * parseFloat(currentNumber);
		}
		else if(currentOperator == "/"){
			result = parseFloat(result) / parseFloat(currentNumber);
		}
		$(".calculator-screen__input").val(result);
		currentNumber = result;
		currentOperator = "";
	}
	else{
		currentNumber += buttonValue;
		$(".calculator-screen__input").val(currentNumber);
	}
});
