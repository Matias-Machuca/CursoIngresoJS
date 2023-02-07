function mostrar() 
{
	let edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseInt(edad);

	//Funcion original
	if (edad < 13) 
	{
		alert("Es niño");
	}
	else 
	{
		if (edad >= 13 && edad <= 17) 
		{
			alert("Es adolescente");
		}
		else 
		{
			alert("Es adulto");
		}
	}

	// Agregando una condicion (adulto mayor)
	/*if (edad < 13) {
		alert("Es niño");
	}
	else {
		if (edad >= 13 && edad <= 17) {
			alert("Es adolescente");
		}
		else {
			if(edad < 65) {
			alert("Es adulto");
		}
			else {
				alert("Es anciano");
			}
		}
	}*/


	//Acomodando la funcion y utilizando else if para evitar el anidado
	//OJO CON EL else if!
	/*if (edad < 13) {
		alert("Es niño");
	}
	else if (edad >= 13 && edad <= 17) {
		alert("Es adolescente");
	}
	else if (edad < 65) {
		alert("Es adulto");
	}
	else {
		alert("Es anciano");
	}
*/

	//otra alternativa 
	/*if (edad > 17) {
		alert("Es mayor de edad.");
	} else {
		if (edad > 12) {
			alert("Es adolescente.");
		}
		else {
			alert("Es niño.");
		}
	}*/
}
