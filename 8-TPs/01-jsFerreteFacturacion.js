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

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = num1 + num2 + num3;

    alert("La suma es: " + suma);

}


function Promedio () 
{
	let precio1;

    let precio2;

    let precio3;

    let promedio;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (num1 + num2 + num3) / 3;

    alert("El promedio es: " + promedio);
}


function PrecioFinal () 
{
	let precio1;

    let precio2;

    let precio3;

    let precioFinal;

    num1 = parseFloat(document.getElementById("txtIdPrecioUno").value);

    num2 = parseFloat(document.getElementById("txtIdPrecioDos").value);

    num3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

    precioFinal = (num1 + num2 + num3) * 1.21 ;

    alert("El precio final es: " + precioFinal);
}