$(function(){
	$('button').on('click',dias);
})


function dias()
{
	var dias=parseInt($('input').val());
	if(dias>365)
	{
		anos(dias);
	}
	else if(dias>30 && dias<365)
	{
		meses(dias);
	}
}

function anos(dias)
{
	var anos=Math.floor(dias/365);
	//console.log(anos);
	$('h1').text(anos);
	var diasSobrantes=dias%365;
	meses(diasSobrantes);    
}
function meses(dias)
{
	var meses=Math.floor(dias/30);
	$('h2').text(meses);
	var diasSobrantes=dias%30;
	$('h3').text(diasSobrantes);
}
