/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//TODO: PARSEAR EN UNA SEGUNDA LINEA DE CODIGO PARA EVITAR PROBLEMAS FUTUROS!!!

function SacarResto()
{
	// puedo usar el codigo del ejercicio anterior y modificar los nombres de las variables
	let dividendo;

	let divisor;

	let resto;

	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);

	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	/* aca va el operador aritmetico modulo o resto de la división entrera (%)
	es muy comun utilizar el resto, permite saber si el numero es par o impar,
	si el dividendo es multiplo del divisor, si el divisor es un divisor exacto
	del dividendo y permite operaciones matematicas para resolver problemas
	y resolver algoritmos*/
	resto = dividendo % divisor

	// adecuamos el literal de cadena a la consigna
	alert("El resto es: " + resto);
}
