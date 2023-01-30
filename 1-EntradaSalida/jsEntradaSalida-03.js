/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
	let nombre;

	nombre = document.getElementById("txtIdNombre").value;
	/* traer un elemento del archivo html al archivo js y usar su valor*/

	/*
	nombre = txtIdNombre.value; (de esta manera tambien es valido
	gracias a una funcion del navegador)*/

	alert(nombre)

	document.getElementById("txtIdNombre").value = "";

	/*de esta manera el nombre ingresado se borra dejando vacio para proximo ingreso*/


}
