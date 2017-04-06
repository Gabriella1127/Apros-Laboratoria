$(document).ready(init);

var currentSection = null;
var currentSec = null;


function init()
{
	currentSection = $('#section-1');
	$('#btn-sect1').click(onClickBtnFirst);
	$('#btn-sect2').click(onClickBtnSecond);
	$('#btn-sect3').click(onClickBtnThree);
	$('#btn-sect4').click(onClickBtnFour);
	$('#btn-sect5').click(onClickBtnFive);


	//TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnFirst() {
	
	gotoSection('section-1');
}
function onClickBtnSecond() {
	
	gotoSection('section-2');
}
function onClickBtnThree() {
	
	gotoSection('section-3');
}
function onClickBtnFour() {
	
	gotoSection('section-4');
}
function onClickBtnFive() {
	
	gotoSection('section-5');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);
	console.log(nextSection);
	nextSection.addClass('visible animated fadeInLeft');

	//TweenMax.from(nextSection, 1, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}
