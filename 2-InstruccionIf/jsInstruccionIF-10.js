function mostrar()
{
	let nota;

	/*let notaMinima = 1
	let notaMaxima = 10

	nota = Math.round(Math.random() * (notaMaxima - notaMinima) + notaMinima);*/

	nota = Math.round(Math.random() * 9 + 1);


	if (nota > 8)
	{
		alert("¡Exelente! " + "Nota: " + nota);
	}
	else
	{
		if (nota >= 4)
		{
			alert("¡Aprobó! " + "Nota: " + nota);
		}
		else 
		{
			alert("¡Vamos! !La proxima se puede! " + "Nota: " + nota);
		}
	}
}