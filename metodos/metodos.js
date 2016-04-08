$(document).on('ready',inicia);


$(window).unload(function(){
	var opcion=confirm("deseas salir de la pagina");
});


function inicia()
{
	$('button').bind('click mouseleave mouseenter',saludo);
$(body).onbeforeunload(function(){
	confirm("mesaage");
});

}
function saludo()
{
	console.log("tu jefa");
}

function metodos()
{
navigator.getBattery().then(function(battery){
	carga(battery);
});

var pad=navigator.getGamepads;
console.log(pad);
}

function carga(battery)
{
	console.log(battery.charging);
	console.log(battery.level);
	console.log(battery.chargingTime);
	console.log(battery.dischargingTime);
}


