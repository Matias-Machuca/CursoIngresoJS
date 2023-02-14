/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/


function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("Por favor ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado < 0 || numeroIngresado > 9) {

		alert("Número incorrecto.");
		numeroIngresado = prompt("Ingrese otro número.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	alert("El número es correcto. Gracias.");
}