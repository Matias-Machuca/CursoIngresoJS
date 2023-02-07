/*Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/

function mostrar() 
{
	let numeroRandom;

	//De esta manera se puede probar con distintos numeros a lo largo del codigo
	//sin cambiar manualmente los numeros (rango) dentro de la declaracion.
	let maximo = 10;
	let minimo = 1;

	numeroRandom = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert(numeroRandom);
}