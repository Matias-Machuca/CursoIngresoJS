/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	
	/*Se sugiere declarar las variables en cada función,
	ya que la visivilidad de la variable depende de que esté dentro del scope:
	(espacio dentro de las llaves {}) cuando se declara con let.
	Si la variable es declarada con var en el scope global solo es necesario 
	declarar una vez aunque en algunos entornos está mal visto.*/
	let num1;

	let num2;

	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 + num2;

	alert("La suma es: " + resultado);
}

function restar()
{
	let num1;

	let num2;

	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	/* en esta linea se cambia en signo suma por el de resta de la funcion anterior (sumar)*/
	resultado = num1 - num2;

	/* acá mantengo el signo + porque es para concatenar ya que la resta la hicimos
	en la linea 42 y modifico el literal de cadena (texto) para que se adapte a la operacion*/
	alert("La resta es: " + resultado);
}

function multiplicar()
{ 
	let num1;

	let num2;

	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = num1 * num2;

	alert("La multiplicación es: " + resultado);
}

function dividir()
{
	let num1;

	let num2;

	let resultado;
	
	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

	num2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	// TODO incluir condicional porque no se puede dividir por cero
	resultado = num1 / num2;

	alert("La división es: " + resultado);
}

