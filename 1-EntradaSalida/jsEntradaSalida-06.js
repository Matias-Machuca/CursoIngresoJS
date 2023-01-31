/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resultado por medio de "ALERT"*/
function sumar() {
	let num1;

	let num2;

	let resultado;

	//ParseIt me permite covertir un string a number, 
	//de lo contrario el alert concatenaria los datos ingresados
	//y no los sumaria matematicamente. Es un filtro que va detectando
	//numeros y se interrumpe al encontrar una letra o punto.

	//una forma de hacerlo es en un linea
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	/*o bien pueden ser 2 lines de codigo con el mismo resultado:
	num2 = document.getElementById("txtIdNumeroDos").value;
	num2 = parseInt(num2);
*/
	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;

	//string + number = string que es lo que esperaba el alert
	alert("El resultado es " + resultado);

}

