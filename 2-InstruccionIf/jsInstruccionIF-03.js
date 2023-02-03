function mostrar()
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Usted es mayor de edad");
	}
	else {
		alert("Usted es menor de edad");
	}


	/* solucion alternativa:

	if (edad < 18) {
		alert("Usted es menor de edad");
	}
	else {
		alert("Usted es mayor de edad");
	}*/
	
}
