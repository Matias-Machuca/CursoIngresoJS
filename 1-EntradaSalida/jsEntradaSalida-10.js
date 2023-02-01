/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento() 
{
	let importe;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	document.getElementById("txtIdResultado").value = importe * 0.75;
}
