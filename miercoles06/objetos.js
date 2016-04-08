var idAlumno=1;
var num=0;
var estudiante= new Array();

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
	$('input').on('change',muestra);
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
	idAlumno++;
	$('input').val('');

	console.log(estudiante);
	dibujaTabla(nombre,programacion,calculo,ingles,algoritmos);
}


function dibujaTabla(nombre,programacion,calculo,ingles,algoritmos)
{
	var promedio=(programacion+calculo+ingles+algoritmos)/4;
	var tabla="";
	tabla =tabla+'<tr>';
	tabla+='<td>'+nombre+'</td>';
	tabla+='<td>'+programacion+'</td>';
	tabla+='<td>'+calculo+'</td>';
	tabla+='<td>'+ingles+'</td>';
	tabla+='<td>'+algoritmos+'</td>';
	tabla+='<td>'+promedio+'</td>';
	//promedio=Math.floor(promedio);
	tabla+='<td><meter value='+promedio+' min=0 max=10 >Promedio</meter></td>';
	tabla+='</tr>';


	$('section.tabla table').show('slow');
	$('section.tabla table tbody').append(tabla);

}



function muestra()
{
	$(this).next().show('slow');
}