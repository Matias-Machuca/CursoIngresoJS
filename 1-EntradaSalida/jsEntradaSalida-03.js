/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	let nombre;

	// traer un elemento del archivo html al archivo js y usar su valor//
	// al hacer click derecho-inpeccionar sobre el cuadro de texto podemos ver el id.value
	nombre = document.getElementById("txtIdNombre").value;

	/*
	nombre = txtIdNombre.value; (de esta manera tambien es valido
	gracias a una funcion del navegador)*/

	alert(nombre)

	/*de esta manera el nombre ingresado se borra dejando vacio para proximo ingreso*/
	//document.getElementById("txtIdNombre").value = "";

		

}
