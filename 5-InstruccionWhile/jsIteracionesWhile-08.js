/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	//Declaro variables
	let seguir;
	let numeroIngresado;
	//Declaro e inicializo acumuladores para numeros positivos y negativos
	let positivos = 0;
	//Multiplico por 1 en lugar de 0 para no perder los
	//valores negativos al multiplicar por 0.
	let negativos = 1;
	//Uso una bandera para saber si en algun momento paso por algun
	//lugar del codigo durante el flujo.
	let flag = 0;

	//Armo el bucle que se repite por lo menos una vez
	do {
		//Pido los datos al usuario
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		//Diferencio numeros positivos de negativos
		//Y acumulo negativos y positivos
		if (numeroIngresado >= 0) {
			positivos = positivos + numeroIngresado;
		}
		else {
			//Coloco la bandera para saber si se ingresa algun negativo
			flag = 1;
			negativos = negativos * numeroIngresado;
		}

		//Pregunto si quiere ingresar mas numeros
		seguir = prompt("¿Quiere ingresar otro numero?");

	} while (seguir == "si");

	//Si no se ingresan negativos uso flag para no mostrar el 1
	// de la variable negativos.
	if (flag == 0) {
		negativos = 0;
	}

	//Muestro la suma de positivos y la multiplicacion de negativos
	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;
}