/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positivos-negativos).
*/
function mostrar() {
	//Declaro variables
	let numeroIngresado;
	let seguir;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPosivitos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	//Genero bucle hasta que el usuario quiera (do while)
	do {
		//Pido un numero
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		//Diferencio entre positivos, negativos y ceros
		//Acumulo y sumo por signos
		if (numeroIngresado > 0) {
			contadorPositivos = contadorPositivos + 1;
			acumuladorPosivitos = acumuladorPosivitos + numeroIngresado;
		}
		if (numeroIngresado < 0) {
			contadorNegativos = contadorNegativos + 1;
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}
		else {
			contadorCeros = contadorCeros + 1;
		}

		//Saber si el numero es par
		if (numeroIngresado % 0 == 2) {
			contadorPares = contadorPares + 1;
		}
		seguir = prompt("¿Quiere ingresar un nuevo numero?");
	} while (seguir == "si");

	//Calcular promedios con los datos ingresados en el bucle
	if (contadorPositivos > 0) {
		promedioPositivos = acumuladorPosivitos / contadorPositivos;
	}
	if (contadorNegativos > 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos;
	}

	//Calculo diferencia entre positivos y negativos
	diferencia = contadorPositivos - contadorNegativos;

	//Muestro los resultados
	document.write("La suma de los negativos es: " + acumuladorNegativos);
}