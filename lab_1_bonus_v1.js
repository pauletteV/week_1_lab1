//var tempF = 75;
//var tempC = 40;

var tempF = 80;
var tempC = 20;

var convertedTempF = ((tempF-32)*5)/9;
var convertedTempC = ((tempC*9)/5) +32; 

if(tempF === 75) {

	console.log("You have converted:" + tempF + " Fahrenheit to " + convertedTempF + " Celsius");
}

else {
	console.log("Your number is not valid");
}


if(tempC === 40) {

	console.log("You have converted:" + tempC + " Celsius to " + convertedTempC + " Fahrenheit");
}

else {
	console.log("Your number is not valid");
}
