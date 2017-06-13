// var banner = $('.banner-title').offset().top;

// $(window).scroll(function(){
// 	if ($(window).scrollTop() > navbar) {
// 		$('.banner').addClass('fixed');
// 	}
// 	else{
// 		$('.banner').removeClass('fixed');
// 	}

// 	console.log("script");
// });

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