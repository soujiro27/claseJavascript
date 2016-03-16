var contador=0;
var total=0;
var usuario={
	nombre:'fer',
	contra:'tentaculos'
}

var wildBest={
	track1:"present tense",
	track2:"future"
}

$(document).on('ready',inicia);


function inicia()
{
	$('section input').on('click',linea);
	$('section.login button').on('click',validar);
	$('div.menu').on('click',menucito);
	$('section.portadaDiscos img').on('click',albumcito);
	$('nav ul li').first().on('click',regresa);
	$('section.portadaDiscos button').on('click',compra);
	

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

function menucito() {
	 //$('nav').toggle('slow');
	 if (contador==0) {
		$('nav').addClass('muestraMenu');
		contador=1;
	 }
	 else
	 {
	 	$('nav').removeClass('muestraMenu');
	 	contador=0;
	 	
	 }
}

function albumcito() {
var imagen=$(this).attr('src');
$('section.portadaDiscos').hide('slow');
$('section.play figure').html('<img src='+imagen+'>');
var nombre=$(this).data('disco');
var numero=1;
if(nombre=='wildBest')
{
	for(x in wildBest)
	{
		console.log(wildBest[x]);
		$('article.playlist').append('<p>'+wildBest[x]+'</p>');
		var cancion=document.createElement('audio');
		cancion.setAttribute('src','../img/cancion'+numero+'.mp3' );
		cancion.setAttribute('controls', 'controls');
		console.log(cancion);	
		$('article.playlist').append(cancion);
		numero=numero+1;
	}
}


}

function regresa()
{
	$('section.portadaDiscos').show('slow');
	$('section.play').hide('slow');

}

function compra()
{
	var precio=parseInt($(this).data('precio'));
	var nombre=$(this).parent().children().first().data('disco');
	$('table').append('<tr><td>'+nombre+'</td><td>'+precio+'</td><td>E</td></tr>').show('slow');
	$(this).attr('disabled','true').addClass('desabilitado');
	total=total+precio;
	$('div.total h2').text('el total es: '+total);
}