/*
Debemos lograr tomar el sueldo por ID ,
transformarlo a entero (parseInt), luego
mostrar nuevo sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;

	/* se usa parseFloat porque el sueldo puede contener centavos,
	no solo numeros enteros*/
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	/* multiplico sueldo x el %10 y luego sumamos ese resultado a sueldo
	y lo asigno al cuadro de texto "Resultado"*/
	document.getElementById("txtIdResultado").value = sueldo + (sueldo * 0.1);

	
}
  