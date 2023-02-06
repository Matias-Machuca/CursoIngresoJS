function mostrar() {
	let estadoCivil;

	let edad;

	estadoCivil = document.getElementById("estadoCivil").value;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (estadoCivil == "Soltero" && edad > 17) {
		alert("Es soltero y no es menor");
	}

}