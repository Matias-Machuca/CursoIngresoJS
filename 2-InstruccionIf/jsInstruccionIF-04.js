function mostrar() {
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 13) {

		if (edad <= 17) {

			alert("Es adolescente");
		}

	}
}