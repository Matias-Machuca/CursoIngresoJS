/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    let precioLamparas = 35;
    let cantidadDeLamparas;
    let marca;
    let precioFinal;
    let precioConDescuento;
    let descuento = 0;
    let ingresosBrutos;



    
    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);

    marca = document.getElementById("Marca").value;

    
    if (cantidadDeLamparas > 5) 
    {
        descuento = 0.5;
    } 
    else 
    {   
        if (cantidadDeLamparas == 5 && marca == "ArgentinaLuz") 
        {
           descuento = 0.4;
        } 
        else 
        {
            if (cantidadDeLamparas == 5) 
            { 
                descuento = 0.3;
            } 
            else
            {
                if (cantidadDeLamparas == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas"))
                {
                    descuento = 0.25;
                } 
                else 
                {
                    if (cantidadDeLamparas == 4) 
                    {
                        descuento = 0.2;
                    }
                    else 
                    {
                        if (cantidadDeLamparas == 3 && marca == "ArgentinaLuz") 
                        {
                            descuento = 0.15;
                        } 
                        else 
                        {
                            if (marca == "FelipeLamparas")
                            {
                                descuento = 0.1;
                            } 
                            else 
                            {
                                descuento = 0.05;
                            } 
                            if (cantidadDeLamparas < 3)
                            {
                                descuento = 0;
                            }
                        }
                    }
                }
            }
        }
    } 


    precioFinal = cantidadDeLamparas * precioLamparas; 

    precioConDescuento = precioFinal - (precioFinal * descuento); 

    if (precioConDescuento > 120)
    {
        ingresosBrutos = precioConDescuento * 0.1;
        precioConDescuento = precioConDescuento + ingresosBrutos;
        alert ("Usted pagó " + "$"+ ingresosBrutos + " de IIBB.");
    }

    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

}
