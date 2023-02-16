/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	//Declaro variables
	let numeroIngresado;
	let maximo;
	let minimo;
	let seguir;
	let flag = 0;


	//Armo un bucle mientras el usuario quiera(do while)
	do {
		numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);

		//debo reconocer si lo pido por primera vez
		if (flag == 0) {
			//si es asi inicializo max y min
			maximo = numeroIngresado;
			minimo = numeroIngresado;
			flag = 1;
		}
		//sino me fijo si tengo un nuevo max o un nuevo min
		//los actualizo de ser necesario
		if (numeroIngresado > maximo) {
			maximo = numeroIngresado;
		}
		if (numeroIngresado < minimo) {
			minimo = numeroIngresado;
		}

		seguir = prompt("¿Quiere ingresar otro numero?")
	} while (seguir == "si");

	//muestro la informacion

	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;

}