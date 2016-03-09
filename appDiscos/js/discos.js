



var usuario={
	nombre:'fer',
	contra:'tentaculos'
}

$(document).on('ready',inicia);


function inicia()
{
	$('section input').on('click',linea);
	$('section button').on('click',validar);

}


function linea()
{
	$(this).addClass('linea');
}

function validar()
{
	var user=$('input[type=text]').val();
	var contra=$('input[type=password]').val();
	if (user==usuario.nombre && contra==usuario.contra) 
	{
		window.location="paginas/portada.html";	
	}
	else
	{
		console.log('clave incorrecta');
	}
}