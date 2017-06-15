window.onload = function() {
	document.getElementById("seymour_allyn").onclick = loadAllyn;
	document.getElementById("seymour_lincy").onclick = loadLincy;

}

function loadAllyn() {
	var x = document.getElementById("a_more");
	var link = document.getElementById("seymour_allyn");
	if (x.style.display === 'none') {
		x.style.display = 'block';
		link.innerHTML = 'See Less';

	}
	else{
		x.style.display = 'none';
		link.innerHTML = 'See More';
		
	}
}

function loadLincy() {
	var x = document.getElementById("l_more");
	var link = document.getElementById("seymour_lincy");
	if (x.style.display === 'none') {
		x.style.display = 'block';
		link.innerHTML = 'See Less';
	}
	else{
		x.style.display = 'none';
		link.innerHTML = 'See More';

	}
}

$(document).ready(function(){

var navbar = $('#navbar');
var originalOffset = navbar.offset().top;

function scroll() {
	if ($(window).scrollTop() >= originalOffset) {
		$('#navbar').addClass('navbar-fixed-top');
	}
	else{
		$('#navbar').removeClass('navbar-fixed-top');

	}
}

	document.onscroll = scroll;

});