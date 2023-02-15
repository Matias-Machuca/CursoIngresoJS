/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/


function mostrar()
{
	//Declaro variable.
	let numeroIngresado;
	//Asigno valor a a variable.
	numeroIngresado = prompt("Ingrese un número entre 0 y 9.");
	//Parseo el dato ingresado (siempre que trabaje con numeros).
	numeroIngresado = parseInt(numeroIngresado);

	//Armo la condicion.
	while(numeroIngresado < 0 || numeroIngresado > 9) {

		//Si la condicion no se cumple muestro un msj por alert solicitando nuevamente el dato correcto.
		alert("Número incorrecto.");
		//Modifico la condicion para que pueda salir del bucle infinito.
		numeroIngresado = prompt("Ingrese otro número.");
		numeroIngresado = parseInt(numeroIngresado);

	}
	//Doy mensaje de que el dato es correcto por alert.
	alert("El número es correcto. Gracias.");
}