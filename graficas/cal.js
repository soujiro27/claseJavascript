$(document).on('ready',inicia);

function inicia()
{
	$('section.universidad button').on('click',agrega);
}


function agrega()
{
	var html='<tr><td><input type="text" placeholder="nombre"></td><td><input type="number" ></td><td><input type="number" ></td><td><input type="number" ></td><td class="promedio"></td></tr>';
	$('table').append(html);

	$('table td input[type=number]').on('change',promedio);
}

var calif=0;
function promedio()
{
	$(this).attr('disabled', 'true');
	var numero=parseInt($(this).val());
	calif=calif+numero;
	var promedio=calif/3;
	$('table td.promedio').text(promedio);

	grafica(promedio)
}

function grafica(promedio)
{
	var altura=promedio*10;
	$('section.graficas').html('<div></div>');
	$('section.graficas div').css({
		'width':'25px',
		'background':'red',
		'height':altura+'px'
	});	

}

	