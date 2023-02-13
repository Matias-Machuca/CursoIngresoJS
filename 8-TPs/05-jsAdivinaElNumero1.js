/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  
del número secreto.
*/


/*
  Usar esta plantilla:

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
    //Genero el número RANDOM entre 1 y 100
     
    

}

function verificar()
{
    
    

}
*/


var numeroSecreto;

    
function adivinaElNumero()
{
    
    let numeroIngresado;
    let minimo = 1;
    let maximo = 100;

    numeroSecreto = numeroRandom = Math.round(Math.random() * (maximo - minimo) + minimo);
    numeroSecreto = parseInt(numeroSecreto);  

    numeroIngresado = document.getElementById("txtIdNumero").value;
    numeroIngresado = parseInt(numeroIngresado);

    
    if (numeroIngresado == numeroSecreto) 
    {
      alert("Usted es el ganador!!!");
    } 
    else 
    {
      if (numeroIngresado > numeroSecreto) 
      {
        alert("El número es mas alto!");
      } 
      else 
      {
        if(numeroIngresado < numeroSecreto)
        {
          alert("El número es mas bajo!");
        }
      } 
    }
}