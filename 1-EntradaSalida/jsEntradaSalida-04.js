/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	// reservo espacio en memoria para guardar el nombre del usuario
	let nombre;

	//guardo en la variable nombre el texto que escribio el usuario dentro de la ventana promp
	nombre = prompt("Ingrese su nombre");

	//copio el nombre que tengo guardado en la variable nombre dento de la caja de texto embebida en la pagina html
	document.getElementById("txtIdNombre").value = nombre;


} 