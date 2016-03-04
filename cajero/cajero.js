

$(document).on('ready',inicio);


function inicio()
{
	$('button').on('click',valida);
}


function valida()
{
	
	var cantidad=parseInt($('input').val());
		if(cantidad>6000 || cantidad%50>0 || cantidad<0  )
	{
		console.log("datos incorrectos");
	}
	else
	{
		billetesMil(cantidad);
	}
}

function billetesMil(cantidad)
{

	var mil=cantidad/1000;
	if(mil>=1)
	{
	var sobrante=cantidad%1000;
	mil=Math.floor(mil);
	var contador=0;
	while(contador<mil)
	{
		$('div.mil').append('<img src=mil.jpg>');
		contador+=1;
	}
		if(sobrante>0)
		{
			billetesQuinientos(sobrante);
		}
	}

}


function billetesQuinientos(sobrante)
{
	var quinientos=sobrante/500;
	
	if(quinientos>0)
	{
		var sobrante=sobrante%500;

		quinientos=Math.floor(quinientos);
	var contador=0;
	while(contador<quinientos)
	{
		$('div.quini').append('<img src=quinientos.jpg>');
		contador+=1;
	}

		if(sobrante>0)
		{
			billetesDoscientos(sobrante);
		}
	}
	

}


function billetesDoscientos(sobrante)
{
	var doscientos=sobrante/200;
	console.log(doscientos);
	if(doscientos>0)
	{
		var sobrante=sobrante%200;

		doscientos=Math.floor(doscientos);
		var contador=0;
		while(contador<doscientos)
		{
		$('div.dos').append('<img src=doscientos.jpg>');
		contador+=1;
		}

		if(sobrante>0)
		{
			billetesCien(sobrante);
		}
	}
	else
	{
		console.log("billetes de Doscientos: 0");
	}

}


function billetesCien(sobrante)
{
	
	var cien=sobrante/100;
	console.log(sobrante);
	if(cien>0)
	{
		var sobrante=sobrante%100;
		cien=Math.floor(cien);
		var contador=0;
		while(contador<cien)
		{
		$('div.cien').append('<img src=cien.jpg>');
		contador+=1;
		}

		if(sobrante>0)
		{
			billetesCincuenta(sobrante);
		}
	}
	

}

function billetesCincuenta(sobrante)
{
	
	var cincuenta=sobrante/50;
	if(cincuenta>0)
	{
		var sobrante=sobrante%100;
		cien=Math.floor(cincuenta);
		var contador=0;
		while(contador<cincuenta)
		{
		$('div.cincu').append('<img src=cincuenta.jpg>');
		contador+=1;
		}

	
	}
	

}



