/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba 
tiene el precio sin descuento
*/

function mostrar()
{
	let estacion;
	let destino;
	let precioBase = 15000;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion) {
		case "Invierno":
			switch(destino) {
				case "Bariloche":
					alert(precioBase * 1.2);
					break;
				case "Cordoba":
				case "Cataratas":
					alert(precioBase * 0.9);
					break;
				case "Mar del plata":
					alert(precioBase * 0.8);
					break;
			}
			break;
		case "Verano":
			switch(destino) {
				case "Bariloche":
					alert(precioBase * 0.8);
					break;
				case "Mar del plata":
					alert(precioBase * 1.2);
					break;
				default:
					alert(precioBase * 1.1);
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch(destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					alert(precioBase * 1.1);
				break;
				case "Cordoba":
					alert(precioBase);
			}
			break;
	}
}