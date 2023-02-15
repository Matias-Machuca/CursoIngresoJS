/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	//Declaro la variable
	let sexoIngresado;
	//Pido al usuario el dato por prompt
	sexoIngresado = prompt("Por favor ingrese f para femenino ó m para masculino.");

	//Armo la condicion
	while(sexoIngresado != "f" && sexoIngresado != "m") {
		//Repito el mensaje pidiendo el dato correcto
		sexoIngresado = prompt("Dato incorrecto. Por favor ingrese f para femenino ó m para masculino.");
	}
	//Alert con mensaje cuando se ingrese el dato correcto
	alert("Gracias.");

	//Muestro por cuadro de texto el dato correcto ingresado por el usuario
	document.getElementById("txtIdSexo").value = sexoIngresado;
}