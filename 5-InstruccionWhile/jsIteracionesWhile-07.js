/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let seguir;
	let numeroIngresado;
	let promedio;
	let acumulador = 0;
	let contador = 0;

	do {
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		//Modificacion de la variable de control.
		seguir = prompt("¿Quiere ingresar otro numero?");

	} while (seguir == "si");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


	/*
	let seguir = 's';
	let numeroIngresado;
	let promedio;
	let acumulador = 0;
	let contador = 0;

	while (seguir == 's') {

		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		acumulador = acumulador + numeroIngresado;

		contador = contador + 1;

		//Modificacion de la variable de control.
		seguir = prompt("¿Quiere ingresar otro numero?");
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	*/
}