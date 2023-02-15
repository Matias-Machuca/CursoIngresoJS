/*
	Al presionar el botón pedir 5 números
	e informar la suma acumulada y el promedio.
 */

function mostrar()
{
	//Declaro variables
	let numeroIngresado;
	let promedio;
	//Declaro e inicializo variables.
	let acumulador = 0; //Guardo y sumo los número ingresados por el usuario.
	//Variable de control.
	let condicion = 0;
	
	//Armo la condición:
	while (condicion < 5) {
		//Pido al usuario los números por prompt.
		numeroIngresado = prompt("Ingrese un numero");
		//Parseo los datos ingresados.
		numeroIngresado = parseInt(numeroIngresado);

		//En la varible acumulador voy guardando los datos ingresados y hago la suma.
		acumulador = acumulador + numeroIngresado;

		//Modifico la condición para que se ajuste al enunciado:
		condicion = condicion + 1;
	}

	//Calculo el promedio usando los datos que ingresó el usuario y guardé previamente
	//en la variable acumulador.
	promedio = acumulador / 5;
	
	//Muestro por caja de texto la suma acumulada y el promedio.
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}