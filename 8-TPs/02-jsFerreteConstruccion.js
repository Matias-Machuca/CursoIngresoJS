/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
let largoDelTerreno;

let anchoDelTerreno;

let perimetro;

largoDelTerreno = document.getElementById("txtIdLargo").value;

largoDelTerreno = parseFloat(largoDelTerreno);

anchoDelTerreno = document.getElementById("txtIdAncho").value;

anchoDelTerreno = parseFloat(anchoDelTerreno);

perimetro = ((largoDelTerreno + anchoDelTerreno) * 2) * 3;

perimetro = perimetro.toFixed(2);

alert("La cantidad de alambre necesaria es " + perimetro + " metros");

}





function Circulo () 
{
	let radioDelTerreno;

    let perimetro; 

    radioDelTerreno = document.getElementById("txtIdRadio").value;

    radioDelTerreno = parseFloat(radioDelTerreno);

    perimetro = 2 * Math.PI * radioDelTerreno;

    perimetro = perimetro.toFixed(2) * 3;

    alert("La cantidad de alambre necesaria es: " + perimetro + " metros");

}


function Materiales () 
{
    let largoDelTerreno;
    
    let anchoDelTerreno;
    
    let bolsasDeCemento;

    let bolsasDeCal;

    let perimetro;
    
    largoDelTerreno = document.getElementById("txtIdLargo").value;
    
    largoDelTerreno = parseFloat(largoDelTerreno);
    
    anchoDelTerreno = document.getElementById("txtIdAncho").value;
    
    anchoDelTerreno = parseFloat(anchoDelTerreno);
    
    perimetro = largoDelTerreno * anchoDelTerreno;

    bolsasDeCemento = perimetro * 2;

    bolsasDeCal = perimetro * 3;

    //mensaje con materiales por separado
    alert("Se necesitan " + bolsasDeCemento + " bolsas de Cemento");
    
    alert("Se necesitan " + bolsasDeCal + " bolsas de Cal.");

    //mensaje con materiales juntos
    alert("Se necesitan " + bolsasDeCemento + " bolsas de Cemento y " + bolsasDeCal + " bolsas de Cal.");

    }