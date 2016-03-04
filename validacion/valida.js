$(function(){

	$('input[type=text]').on('change',valida);
	$('input[type=number]').on('change',validaEdad);

});

var numeros=[0,1,2,3,4,5,6,7,8,9];


function valida()
{
	var nombre=$('input[type=text]').val();
	for(x in nombre)
	{
		for(y in numeros)
		{
			if(nombre[x]==numeros[y])
			{
				alert("no se permiten numeros")
			}
			else
			{
				$('input[type=number]').show('slow');
			}
		}
	}


	
}

function validaEdad()
{
	var edad=parseInt($('input[type=number]').val());
	if(edad>18)
	{
		alert("menor a 18");
	}
	else{
			$('input[type=password]').show('slow');

	}
}

