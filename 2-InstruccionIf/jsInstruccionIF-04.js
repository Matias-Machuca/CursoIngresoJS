function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 13 && edad <= 17) {

		alert("Es adolescente");
	}

	//solucion sin operador logico &&
	/*if (edad >= 13) {

		if (edad <= 17) {

			alert("Es adolescente");
		}

	//solucion alternativa con operador de negacion !
	if( !(edad < 13 || edad > 17)) {
		
		alert("Es adolescente");
	}
			
	}*/

}