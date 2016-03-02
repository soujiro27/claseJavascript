$(function(){
	$('button').on('click',inicia);
});


function inicia()
{
	milisegundos=0;
	segundos=0;
	minutos=0;
	tiempo=parseInt($('input').val());
	while(minutos<tiempo)
	{
		
		$('div.segundos').html(segundos);
		segundos+=1;
		if(segundos>590)
		{
			minutos+=1;
			$('div.minutos').html(minutos);
			segundos=0;
		

		}
	}
}

