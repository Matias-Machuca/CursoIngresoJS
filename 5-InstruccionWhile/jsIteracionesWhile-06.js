/*
	Al presionar el botón pedir 5 números
	e informar la suma acumulada y el promedio.
 */

function mostrar()
{
	let numeroIngresado;
	let acumulador = 0;
	let promedio;
	let condicion = 0;
	
	while (condicion < 5) {

		numeroIngresado = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numeroIngresado;

		condicion = condicion + 1;
	}

	promedio = acumulador / 5;
	
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}