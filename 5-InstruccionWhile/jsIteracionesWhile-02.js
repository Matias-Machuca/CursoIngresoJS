/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()

{	//Declaro e1 inicializo la variable.
	let condicion; 
	condicion = 10;

	// Armo la variable de control (condicion).
	while(condicion >= 1) { 
	
	//Muestro por alert la repetición solicitada por el enunciado.
	alert(condicion);

    //Modifico de la variable de control para permitir que salga del bucle infinito.
		condicion--; 
	}
}