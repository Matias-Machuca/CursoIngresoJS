/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;

    let precio2;

    let precio3;

    let suma;

    num1 = document.getElementById("txtIdPrecioUno").value;

    num1 = parseFloat(num1);

    num2 = document.getElementById("txtIdPrecioDos").value;

    num2 = parseFloat(num2);

    num3 = document.getElementById("txtIdPrecioTres").value;

    num3 = parseFloat(num3);

    suma = num1 + num2 + num3;

    suma = suma.toFixed(2);

    alert("La suma es $" + suma);

}


function Promedio () 
{
	let precio1;

    let precio2;

    let precio3;

    let promedio;

    num1 = document.getElementById("txtIdPrecioUno").value;

    num1 = parseFloat(num1);

    num2 = document.getElementById("txtIdPrecioDos").value;

    num2 = parseFloat(num2);

    num3 = document.getElementById("txtIdPrecioTres").value;

    num3 = parseFloat(num3);

    promedio = (num1 + num2 + num3) / 3;

    promedio = promedio.toFixed(2);

    alert("El promedio es $" + promedio);
}


function PrecioFinal () 
{
	let precio1;

    let precio2;

    let precio3;

    let precioFinal;

    num1 = document.getElementById("txtIdPrecioUno").value;

    num1 = parseFloat(num1);

    num2 = document.getElementById("txtIdPrecioDos").value;

    num2 = parseFloat(num2);

    num3 = document.getElementById("txtIdPrecioTres").value;

    num3 = parseFloat(num3);

    precioFinal = (num1 + num2 + num3) * 1.21;

    precioFinal = precioFinal.toFixed(2);

    alert("El precio final es $" + precioFinal);
}