$(document).ready(function(){
	$('.header__hat-mobile__menu-hamburger__icon').click(function(){
	$(this).toggleClass('open');
	$('.header__hat-mobile__menu-hamburger__appeare').toggle('slow', function(){$('this').css('display','block')});
	});

});

