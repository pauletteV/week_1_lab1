var inputUnit = "C";
var inputTemp = 75;

var convertedTemp;


if(inputUnit === "F") {

	convertedTemp = ((inputTemp - 32) * 5) / 9;
	console.log("temperature of " + inputTemp + "degrees " + inputUnit + " is equal to " + convertedTemp + " Celsius");
}

else {

	convertedTemp = ((inputTemp * 9) / 5 ) + 32; 
	//inputUnit = "C";
	console.log("temperature of " + inputTemp + "degrees " + inputUnit + " is equal to " + convertedTemp + " Farenheit");
}

