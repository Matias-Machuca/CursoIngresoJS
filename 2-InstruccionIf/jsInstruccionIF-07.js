function mostrar() {
	let estadoCivil;

	let edad;

	estadoCivil = document.getElementById("estadoCivil").value;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad < 18 && estadoCivil != "Soltero") {

		alert("Es demasiado pequeño para no ser soltero");
	}
} 