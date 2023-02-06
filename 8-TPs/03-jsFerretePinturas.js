/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperaturaFarenheit;

    let conversionEnCelcius;

    temperaturaFarenheit = document.getElementById("txtIdTemperatura").value;

    temperaturaFarenheit = parseFloat(temperaturaFarenheit);

    conversionEnCelcius = (temperaturaFarenheit - 32) * 0.5556;

    conversionEnCelcius = conversionEnCelcius.toFixed(2);

    alert(temperaturaFarenheit + " grados Farenheit son "+ conversionEnCelcius + " grados Celcius");

}


function CentigradosFahrenheit () 
{
    let temperaturaEnCelcius;

    let conversionFarenheit;

    temperaturaEnCelcius = document.getElementById("txtIdTemperatura").value;

    temperaturaEnCelcius = parseFloat(temperaturaEnCelcius);

    conversionFarenheit = (temperaturaEnCelcius * 0.5556) + 32;

    conversionFarenheit = conversionFarenheit.toFixed(2);

    alert(temperaturaEnCelcius + " grados Centígrados son " + conversionFarenheit + " grados Farenhiet");
}
