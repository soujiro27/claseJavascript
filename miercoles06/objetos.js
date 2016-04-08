var idAlumno=1;
var num=0;
var estudiante= new Array();
var promedioGral=0;
var contador=1;
//------fin de declaracion de variables globales ---------//

function alumno(nombre,jc,julian,teacher,daniel)
{
	this.id=idAlumno;
	this.nombre=nombre;
	this.programacion=jc;
	this.ecuaciones=julian;
	this.ingles=teacher;
	this.algoritmos=daniel;

}

//-------------- fin del constructor----------//

$(function() {
	$('section.datos button').on('click',califica);
	
	$('section.datos input').on('change',muestra);
});


function califica()
{
	
	var nombre=$('input#nombre').val();
	var programacion=parseInt($('input#jc').val());
	var calculo=parseInt($('input#julian').val());
	var ingles=parseInt($('input#teacher').val());
	var algoritmos=parseInt($('input#daniel').val());
	estudiante[num]=new alumno(nombre,programacion,calculo,ingles,algoritmos);
	num++;
	$('input').val('');

	
	dibujaTabla(nombre,programacion,calculo,ingles,algoritmos);
}


function dibujaTabla(nombre,programacion,calculo,ingles,algoritmos)
{
	var promedio=(programacion+calculo+ingles+algoritmos)/4;
	var tabla="";
	tabla =tabla+'<tr>';
	tabla+='<td>'+idAlumno+'</td>';
	tabla+='<td>'+nombre+'</td>';
	tabla+='<td>'+programacion+'</td>';
	tabla+='<td>'+calculo+'</td>';
	tabla+='<td>'+ingles+'</td>';
	tabla+='<td>'+algoritmos+'</td>';
	tabla+='<td>'+promedio+'</td>';
	//promedio=Math.floor(promedio);
	tabla+='<td><meter value='+promedio+' min=0 max=10 >Promedio</meter></td>';
	tabla+='<td><button>Del</button></td>';
	tabla+='</tr>';
	$('section.tabla table').show('slow');
	$('section.tabla table tbody').append(tabla);
	promGral(promedio);

}

function promGral(promedio)
{
	promedioGral+=promedio;
	var total=promedioGral/contador;
	contador+=1;
	$('section.promedioGral h2').text(total);
	idAlumno++;
	$('table button').on('click',elimina);
}

function muestra()
{
	$(this).next().show('slow');
	var valor=$(this).val();
	
	var resultado=valida(valor);
	if(resultado<0)
	{
		$(this).addClass('error');
	}

}

function valida(calificacion)
{
	if(calificacion>=0 && calificacion <=10)
	{
		console.log(calificacion);
		return calificacion;
	}
	else
	{
		console.log("dio -1");
		return -1;
	}
}


function elimina()
{
	var posicion=$(this).parent().parent().children().first().text();
	posicion-=1;
	$(this).parent().parent().hide('slow');
	estudiante.splice(posicion,1);
}

