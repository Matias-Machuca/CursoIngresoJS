function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad < 13 || edad > 17) {

		alert("No es adolescente");


		/*pregunto si no estoy dentro del rango
		if( !(edad >= 13 && edad <= 17)) {
			alert("No es adolescente");
		}*/
	}

}